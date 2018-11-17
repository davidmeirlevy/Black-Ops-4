import React from 'react'
import './Graph.css'
import {Graph} from "../Graph/Graph";
import {getUserData} from "../../Functions/Http";

export class WeeklyGraphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [],
            times: [],
            type: '',
            size: ''
        };
    }

    componentWillUpdate(prevProps) {
        if (this.props.data !== prevProps.data)
            this.refreshData()
    }

    componentDidMount() {
        console.log('component mounted', this.state.size);
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
                times: {data: data.matches.map(x => x.utcStartSeconds)}
            })
        })
    };

    render() {
        window.addEventListener('resize', () => this.setState({size: window.innerWidth}));
        const chartList = Object.keys(this.state.data).map(x => this.state.data[x]);
        const times = Object.keys(this.state.times).map(x => this.state.times[x])[0];
        return (
            <div className={'graph-container'}>
                {
                    chartList.map((x, index) => {
                        return (<div key={index}>
                            <Graph name={x.name} dates={times} data={x.data} type={'line'} size={this.state.size}/>
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default WeeklyGraphs