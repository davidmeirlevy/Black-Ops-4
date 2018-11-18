import React from 'react'
import './Graph.css'
import '../../App.css'

import {Graph} from "../Graph/Graph";
import {getUserData} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";

export class WeeklyGraphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [],
            dates: [],
        };
    }

    componentWillUpdate(prevProps) {
        if (this.props.data !== prevProps.data)
            this.refreshData()
    }

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        const playerName = this.props.match.params.name;
        getUserData(playerName, 'matches').then(({data}) => {
            this.setState({
                data: {
                    killList: {data: data.matches.map(x => x.playerStats.kills), name: 'kill'},
                    ekiaList: {data: data.matches.map(x => x.playerStats.ekia), name: 'ekia'},
                    deathList: {data: data.matches.map(x => x.playerStats.deaths), name: 'death'},
                    assistsList: {data: data.matches.map(x => x.playerStats.assists), name: 'assists'},
                    ekiadRatioList: {data: data.matches.map(x => x.playerStats.ekiadRatio), name: 'ekiadRatio'},
                },
                dates: {data: data.matches.map(x => x.utcStartSeconds)}
            })
        })
    };

    render() {
        const chartList = Object.keys(this.state.data).map(x => this.state.data[x]);
        const times = Object.keys(this.state.dates).map(x => this.state.dates[x])[0];
        return (
            <div className={'container'}>
                <div className={'graph-container'}>
                    {
                        chartList.length > 0?
                        chartList.map((x, index) => {
                            return (<div key={index}>
                                <Graph name={x.name} dates={times} data={x.data} type={'line'} size={this.state.size}/>
                            </div>)
                        })
                            :
                            <Loading/>
                    }
                </div>
            </div>


        );
    }
}

export default WeeklyGraphs