import React from 'react'
import './Statistics.css'
import {Card} from "../../components/Card/CardPie";
import {getPrestigeImage} from "../../Functions/Functions";
import {getUserData} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";
import WeeklyGraphs from "../WeeklyGraphs/WeeklyGraphs";

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
        }
    }

    componentDidMount() {
        this.getData(this.props.name)
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
                    page: 'Team Deathmatch'

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

    lifeTime = () => {


        //groups: killEnemy



        const list = this.state.allData;
        const tempList = list.filter(x=>x.action.startsWith('killEnemy'));
        console.log('this is templist',tempList);
        return (
            <div className={'middel'}>
                <div className={'card-wrapper'}>
                    {
                        list.map((x, index) => {
                            return <div key={index}>
                                <Card name={x.action} data={x.result}/>
                            </div>
                        })
                    }
                    {/*<div>Kill Enemy:</div>*/}
                    {/*{*/}
                        {/*tempList.map((x,index)=>{*/}
                            {/*return <div key={index} className={'list'}>*/}
                                {/*<Card name={`Kill`}*/}
                                      {/*sub={x.action.replace('killEnemy',``)} data={x.result}/>*/}
                            {/*</div>*/}
                        {/*})*/}
                    {/*}*/}
                </div>
            </div>


        );
    };

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
                return <WeeklyGraphs type={this.state.type ? 'mp' : 'wz'}
                                     playerName={this.state.playerStats.username}/>;
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
            backgroundColor: 'black',
            shdowBox: '10px 10px 10px white',
            padding: '10px'

        }
    };

    inPage = () => {
        return {
            backgroundColor: '#1b1b1b',
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

