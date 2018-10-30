import React from 'react'
import './Statistics.css'
import {Card, CardPie} from "../components/Card/CardPie";
import ProgressBar from 'react-progress-bar-battlenet-style';
import {getPresentage, getPrestigeImage, getShortNum, getUserData} from "../components/Functions";

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            assists: 0
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        getUserData(this.state.username).then(({data}) => data)
            .then(({username, mp}) => {
                console.log(mp);
                this.setState({
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
                    assists: mp['lifetime'].all['assists']
                })
            });
    };

    render() {
        const totalShots = this.state.misses + this.state.hits;
        const totalGames = this.state.wins + this.state.losses;
        return (
            <div className={'container'} style={this.props.style}>
                <div className={'top'}>
                    <div className={'left'}>
                        <div className={'prestige'}>{getPrestigeImage(this.state.prestige)}</div>
                        <div>
                            {this.state.username}
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'right-sub'}>Level: {this.state.level}
                            <ProgressBar
                                completed={getPresentage(this.state.level, 55)}
                                colors={[30, 70, 95]}/>
                        </div>
                        <div className={'right-sub'}>Prestige: {this.state.prestige}</div>

                    </div>
                </div>
                <div className={'middle'}>
                    <CardPie name={`Shots (${totalShots})`}
                             data1={getPresentage(this.state.hits, totalShots)}
                             data2={getPresentage(this.state.misses, totalShots)}
                             sub={`Hits: ${this.state.hits} | Miss: ${this.state.misses}`}/>
                    <CardPie name={`Win/Lose (${totalGames})`}
                             data1={getPresentage(this.state.wins, totalGames)}
                             data2={getPresentage(this.state.losses, totalGames)}
                             sub={`Wins: ${this.state.wins} | Losses: ${this.state.losses}`}/>
                    <Card name={'Headshots'}
                          data={this.state.hs}
                          sub={`${getPresentage(this.state.hs, this.state.hits, false)}% of you hits are headshots`}/>
                    <Card name={'Suicides'}
                          data={this.state.suicides}
                          sub={`${getPresentage(this.state.suicides, this.state.deaths, false)}% of you death is suicide `}/>
                    <Card name={'Longest Kill streak'}
                          data={this.state.longestKillstreak}
                          sub={(this.state.longestKillstreak > 10 ? 'Nice!!!' : 'Try to work on yourself dude')}/>
                    <Card name={'Damage Per Minute'} data={getShortNum(this.state.damagePerMinute, 5)}
                          sub={`${((this.state.damagePerMinute) / 100).toString().split('.')[0]} +/- People in minute`}/>
                    <Card name={'Damage Per Game'}
                          data={getShortNum(this.state.damagePerGame)}
                          sub={`${((this.state.damagePerGame) / 100).toString().split('.')[0]} +/- People in game`}/>
                    <Card name={'Avg. EKIA Per Game'}
                          data={getShortNum(this.state.ekiaPerGame)}
                          sub={(this.state.ekiaPerGame > 10 ? 'Nice!!!!' : 'Need to practise')}/>
                    <Card name={'K/D Ratio'}
                          data={getShortNum(this.state.kills / this.state.deaths)}
                          sub={`Kills: ${this.state.kills}| Deaths: ${this.state.deaths}`}/>
                    <Card name={'EKIA (Kills + Assists) Ratio'}
                          data={getShortNum((this.state.kills + this.state.assists) / this.state.deaths)}
                          sub={`EKIA: ${this.state.assists + this.state.kills} | Death:${this.state.deaths}`}/>
                </div>
            </div>
        );
    }
}

export default Statistics;