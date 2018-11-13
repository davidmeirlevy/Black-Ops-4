import React from 'react'
import './Graph.css'
import {CardLine} from "../Card/CardLine";
import {getUserData} from "../../Functions/Http";

export class WeeklyGraphs extends React.Component {
    constructor(props) {
        super(props);
        console.log('props',props);
        this.state = {
            username:'',
            data: [],
            times: [],
            type: ''
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.type !== prevProps.type)
            this.refreshData()
    }

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        const {playerName} = this.props;
        getUserData(playerName,'matches')
            .then(({data}) => {
            this.setState({
                data: {
                    killList: {data: data.matches.map(x => x.playerStats.kills), name: 'kill'},
                    ekiaList: {data: data.matches.map(x => x.playerStats.ekia), name: 'ekia'},
                    deathList: {data: data.matches.map(x => x.playerStats.deaths), name: 'death'},
                    assistsList: {data: data.matches.map(x => x.playerStats.assists), name: 'assists'},
                    ekiadRatioList: {data: data.matches.map(x => x.playerStats.ekiadRatio), name: 'ekiadRatio'},
                },
                times: {utcEndSeconds: {data: data.matches.map(x => x.utcStartSeconds), name: 'utcEndSeconds'},}
            })
        })
    };

    render() {
        const chartList = Object.keys(this.state.data).map(x => this.state.data[x]);
        const time = Object.keys(this.state.times).map(x => this.state.times[x])[0];
        return (
            <div className={'graph-container'}>
                {
                    chartList.map((x, index) => {
                        return (<div key={index}>
                            <CardLine name={x.name} dates={time.data} data={x.data}/>
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default WeeklyGraphs