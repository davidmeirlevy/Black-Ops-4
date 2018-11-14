import React from 'react'
import './Statistics.css'
import {Card, List, SmallCard, MyPie} from "../../components/Card/CardPie";
import {fixName, getPrestigeImage, normalizeNumber} from "../../Functions/Functions";
import {getUserData} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";
import WeeklyGraphs from "../WeeklyGraphs/WeeklyGraphs";
import {Graph} from "../Card/Graph";

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: null,
            playerStats: {
                username: '',
                level: null,
                prestige: 0,
            },
            page: '',
            query: '',
            array: []
        }
    }

    componentDidMount() {
        this.getData(this.props.name);


    }

    getData = (username) => {
        getUserData(username, 'profile')
            .then(({data}) => {
                const {username} = data;
                const {level, prestige} = data.mp;
                const multiplayerData = data.mp.lifetime.all;

                this.setState({
                    allData: Object.keys(multiplayerData).map(x => Object.assign({
                        action: x,
                        result: multiplayerData[x]
                    })),
                    playerStats: {
                        username: username,
                        level: level,
                        prestige: prestige,
                    },
                    page: 'Team Deathmatch',
                    array: []

                });
            });
    };

    Top = () => {
        const prestigeImage = {
            backgroundImage: `url(${getPrestigeImage(this.state.playerStats.prestige)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        };
        return (
            <div className={'top'} style={prestigeImage}>
                <div className={'left'}>
                    <div>
                        {this.state.playerStats.username}
                    </div>
                </div>
                <div className={'right'}>
                    <div className={'right-sub'}>Level: {this.state.playerStats.level}
                    </div>
                    <div className={'right-sub'}>Prestige: {this.state.playerStats.prestige}</div>
                </div>
            </div>)
    };


    hardFilter = (list ,word) => {
    return list.filter(x=>x.action.split(' ').join('') === word)[0]
    };


    lifeTime = () => {
        const list = this.state.allData;
        const objectList = list.map(x => Object.assign({action: fixName(x.action), result: x.result}));
        const objectList2 = list.map(x => Object.assign({action: x.action, result: x.result}));
        const {array} = this.state;
        const perList = list.map(x => Object.assign({
            action: fixName(x.action),
            result: x.result
        })).filter(x => x.action.split(' ')[1] === 'Per');


        const ekia = this.hardFilter(list,'ekia');
        const deaths = this.hardFilter(list,'deaths');


        const wins = this.hardFilter(list,'wins');
        const losses = this.hardFilter(list,'losses');

        const score = this.hardFilter(list,'scoreCore');
        const scorePerGame = this.hardFilter(list,'scorePerGame');
        const scorePerMin = this.hardFilter(list,'scorePerMinute');
        const scoreList = ['scoreCore','scorePerGame','scorePerMinute'];

        const scoreListObjects= scoreList.map( x=>this.hardFilter(list,x));
        console.log('this is tamplate!',scoreListObjects);

        return (
            <div className={'middel'}>
                <div className={'card-wrapper'}>
                    {
                        array.map((filter, index) => {
                            return (
                                <div className={'list-nest'} key={index}>
                                    <List data={objectList} filter={filter}/>
                                </div>

                            )
                        })
                    }


                    <Card name={'Ekia/Deaths'} text={`Ratio ${normalizeNumber(ekia.result / deaths.result)}`}>
                        <Graph name={'test'} data={ekia} dates={deaths} type={'pie'}/>
                    </Card>

                    <Card name={'Wins/Losses'} text={`Ratio ${normalizeNumber(wins.result / losses.result)}`}>
                        <Graph name={'test'} data={wins} dates={losses} type={'pie'}/>
                    </Card>



                    <div className={'small-card-wrapper'}>
                        {
                            perList.map((x, index) => {
                                return <div key={index}>
                                    <Card name={x.action}>
                                        {normalizeNumber(x.result)}
                                    </Card>
                                </div>
                            })
                        }
                    </div>
                </div>


                {
                    scoreListObjects.map((x,index)=>{
                        console.log(x);
                        return(<div key={index}><Card name={x.action}>{x.result}</Card></div>)
                    })
                }
            </div>
        );
    };



    //<Card name={'Score per game'}>{scorePerGame.result}</Card>
    //                     <Card name={'Score'}>{score.result}</Card>
    //                     <Card name={'Score per minutes'}>{scorePerMin.result}</Card>

    pagesLabels = () => {
        return (
            <div className={'page-labels'}>
                <div style={this.state.page === 'Team Deathmatch' ? this.inPage() : this.outPage()}
                     onClick={() => this.setState({page: 'Team Deathmatch'})}>Life time
                </div>
                <div style={this.state.page !== 'Team Deathmatch' ? this.inPage() : this.outPage()}
                     onClick={() => this.setState({page: 'BlackOut'})}>Weekly
                </div>
            </div>)
    };

    pages = (page) => {
        switch (page) {
            case 'BlackOut':
                return <WeeklyGraphs type={'mp'} playerName={this.state.playerStats.username}/>;
            default:
                return this.lifeTime();


        }
    };

    outPage = () => {
        return {
            marginLeft: "1px",
            border: "#fc6621 solid thin",
            borderRadius: "10px 10px 0 0",
            borderBottom: "#fc6621 solid thin",
            color: '#553400',
            backgroundColor: '#1b1b1b',
            shdowBox: '10px 10px 10px white',
            padding: '10px'

        }
    };

    inPage = () => {
        return {
            backgroundColor: '#101010',
            padding: '10px',
            marginLeft: "1px",
            border: "#fc6621 solid thin",
            borderRadius: "10px 10px 0 0",
            borderBottom: "none",
        }
    };

    render() {
        const list = (this.state.allData !== null ? this.state.allData : []);
        return (
            <div className={'container'}>
                {
                    <div>
                        {this.Top()}
                        {
                            list.length > 0
                                ?
                                <div>
                                    {this.pagesLabels()}
                                    <div className={'pagination-border'}> {this.pages(this.state.page)}</div>
                                </div>
                                :
                                <Loading/>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Statistics;

