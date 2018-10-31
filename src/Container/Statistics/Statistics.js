import React from 'react'
import './Statistics.css'
import ProgressBar from 'react-progress-bar-battlenet-style';
import {Card, CardPie} from "../../components/Card/CardPie";
import {getPresentage, getPrestigeImage, getShortNum, getUserData} from "../../components/Functions";

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            playerStats: {
                username: this.props.name,
                level: null,
                lifetime: [],
                hits: 0,
                misses: 0,
                hs: 0,
                wins: 0,
                losses: 0,
                suicides: 0,
                longestKillstreak: 0,
                prestige: 0,
                damagePerMinute: 0,
                damagePerGame: 0,
                headshotPercentage: 0,
                ekiaPerGame: 0,
                ekia: 0,
                deaths: 0,
                kills: 0,
                assists: 0,
                timePlayedTotal: 0
            }
        }
    }

    componentDidMount() {
        this.getData();
        this.props.dataToParent(this.state.playerStats.username,this.state.playerStats)
    }

    getData = () => {
        getUserData(this.state.playerStats.username)
            .then(({username, mp}) => {
                this.setState({
                    playerStats: {
                        username: username,
                        level: mp['level'],
                        hits: mp['lifetime'].all['hits'],
                        misses: mp['lifetime'].all['misses'],
                        hs: mp['lifetime'].all['headshots'],
                        headshotPercentage: mp['lifetime'].all['headshotPercentage'],
                        wins: mp['lifetime'].all['wins'],
                        losses: mp['lifetime'].all['losses'],
                        suicides: mp['lifetime'].all['suicides'],
                        longestKillstreak: mp['lifetime'].all['longestKillstreak'],
                        prestige: mp['prestige'],
                        damagePerMinute: mp['lifetime'].all['damagePerMinute'],
                        damagePerGame: mp['lifetime'].all['damagePerGame'],
                        ekiaPerGame: mp['lifetime'].all['ekiaPerGame'],
                        ekia: mp['lifetime'].all['ekia'],
                        deaths: mp['lifetime'].all['deaths'],
                        kills: mp['lifetime'].all['kills'],
                        assists: mp['lifetime'].all['assists'],
                        timePlayedTotal: mp['lifetime'].all['timePlayedTotal']
                    }
                });
                  this.props.dataToParent(this.state.playerStats.username,this.state.playerStats)
            });
    };

    getTimePlayed = (time) => {
        const h = (time / 60) / 60;
        return (h).toString().slice(0, 4)
    };

    getStyle = () =>{
        return {
            backgroundImage: `url(${getPrestigeImage(this.state.playerStats.prestige)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        };
    };

    render() {
        const currentUserColor = {border: `solid thin ${this.props.color}`};
        const totalShots = this.state.playerStats.misses + this.state.playerStats.hits;
        const totalGames = this.state.playerStats.wins + this.state.playerStats.losses;
        return (
            <div className={'container'} style={currentUserColor}>

                <div className={'top'} style={this.getStyle()}>
                    <div className={'left'}>
                        <div>
                            {this.state.playerStats.username}
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'right-sub'}>Level: {this.state.playerStats.level}
                            <ProgressBar
                                completed={getPresentage(this.state.playerStats.level, 55)}
                                colors={[30, 70, 95]}/>
                        </div>
                        <div className={'right-sub'}>Prestige: {this.state.playerStats.prestige}</div>
                    </div>
                </div>
                <div className={'middle'} hidden={'True'}>
                    <CardPie name={`Shots (${totalShots})`}
                             data1={getPresentage(this.state.playerStats.hits, totalShots)}
                             data2={getPresentage(this.state.playerStats.misses, totalShots)}
                             sub={`Hits: ${this.state.playerStats.hits} | Miss: ${this.state.playerStats.misses}`}/>
                    <CardPie name={`Win/Lose (${totalGames})`}
                             data1={getPresentage(this.state.playerStats.wins, totalGames)}
                             data2={getPresentage(this.state.playerStats.losses, totalGames)}
                             sub={`Wins: ${this.state.playerStats.wins} | Losses: ${this.state.playerStats.losses}`}/>
                    <Card name={'Headshots'}
                          data={this.state.playerStats.hs}
                          sub={`${getPresentage(this.state.playerStats.hs, this.state.playerStats.hits, false)}% of you hits are headshots`}/>
                    <Card name={'Suicides'}
                          data={this.state.playerStats.suicides}
                          sub={`${getPresentage(this.state.playerStats.suicides, this.state.playerStats.deaths, false)}% of you death is suicide `}/>
                    <Card name={'Longest Kill streak'}
                          data={this.state.playerStats.longestKillstreak}
                          sub={(this.state.playerStats.longestKillstreak > 10 ? 'Nice!!!' : 'Try to work on yourself dude')}/>
                    <Card name={'Damage Per Minute'} data={getShortNum(this.state.playerStats.damagePerMinute, 5)}
                          sub={`${((this.state.playerStats.damagePerMinute) / 100).toString().split('.')[0]} +/- People in minute`}/>
                    <Card name={'Damage Per Game'}
                          data={getShortNum(this.state.playerStats.damagePerGame)}
                          sub={`${((this.state.playerStats.damagePerGame) / 100).toString().split('.')[0]} +/- People in game`}/>
                    <Card name={'Avg. EKIA Per Game'}
                          data={getShortNum(this.state.playerStats.ekiaPerGame)}
                          sub={(this.state.playerStats.ekiaPerGame > 10 ? 'Nice!!!!' : 'Need to practise')}/>
                    <Card name={'K/D Ratio'}
                          data={getShortNum(this.state.playerStats.kills / this.state.playerStats.deaths)}
                          sub={`Kills: ${this.state.playerStats.kills}| Deaths: ${this.state.playerStats.deaths}`}/>
                    <Card name={'EKIA (Kills + Assists) Ratio'}
                          data={getShortNum((this.state.playerStats.kills + this.state.playerStats.assists) / this.state.playerStats.deaths)}
                          sub={`EKIA: ${this.state.playerStats.assists + this.state.playerStats.kills} | Death:${this.state.playerStats.deaths}`}/>
                    <Card name={'Time Played'}
                          data={this.getTimePlayed(this.state.playerStats.timePlayedTotal)}
                          sub={'Time in total'}/>
                </div>
            </div>
        );
    }
}

export default Statistics;