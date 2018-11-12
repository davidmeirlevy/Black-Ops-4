import React from 'react'
import './Statistics.css'
import {Card} from "../../components/Card/CardPie";
import {getPresentage, getPrestigeImage} from "../../Functions/Functions";
import {getUserData} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";
import Blackout from "../Blackout/Blackout";


class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            query: '',
            playerStats: {
                username: '',
                level: null,
                prestige: 0,
            },
            page: ''
        }
    }

    componentDidMount() {
        this.getData(this.props.name)
    }

    getData = (username) => {
        getUserData(username)
            .then(({data}) => {
                console.log(data);
                const {username } = data;
                const {level,prestige} = data.mp;
                const multiplayerData = data.mp.lifetime.all;
                this.setState({
                    temp: Object.keys(multiplayerData).map(x => Object.assign({action: x, result: multiplayerData[x]})),
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

    teamDeathMatch = () => {
        const list = this.state.temp;
        return (
            <div className={'middel'}>
                <div className={'card-wrapper'}>
                    {
                        list.map((x, index) => {
                            return x.action.toLowerCase().includes(this.state.query) ?
                                <div key={index}>
                                    <Card name={x.action} data={x.result}/>
                                </div>
                                :
                                <div>Loading...</div>
                        })
                    }
                </div>
            </div>


        );
    };

    pages = (page) => {
        switch (page) {
            case 'BlackOut':
                return <Blackout/>;
            case 'Team Deathmatch':
                return this.teamDeathMatch();
            default:

        }
    };

    outPage = () => {
        return {
            marginLeft: "1px",
            border: "#e6a414 solid thin",
            borderRadius: "10px 10px 0 0",
            borderBottom: "#e6a414 solid thin",
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
            border: "#e6a414 solid thin",
            borderRadius: "10px 10px 0 0",
            borderBottom: "none",
        }
    };

    render() {
        const list = (this.state.temp !== null ? this.state.temp : []);
        return (
            <div className={'container'} style={{border: `solid thin ${this.props.color}`}}>
                {
                    <div>
                        {this.Top()}
                        {
                            list.length > 0
                                ?
                                <div>
                                    <div className={'testCallse'}>
                                        <div
                                            style={this.state.page === 'Team Deathmatch' ? this.inPage() : this.outPage()}
                                            onClick={() => this.setState({page: 'Team Deathmatch'})}>Team Deathmatch
                                        </div>
                                        <div
                                            style={this.state.page !== 'Team Deathmatch' ? this.inPage() : this.outPage()}
                                            onClick={() => this.setState({page: 'BlackOut'})}>BlackOut
                                        </div>
                                    </div>
                                    <div className={'pagination-border'}>
                                        {
                                            this.pages(this.state.page)
                                        }
                                    </div>
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

