import React from 'react'
import './Graph.css'
import '../../App.css'
import {Graph} from "../Graph/Graph";
import {getUserData, myFetch} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";

export class WeeklyGraphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        const {name} = this.props.match.params;
        myFetch(`http://localhost:8000/weekly/${name}`).then(x=>{
           this.setState({
               data:
                   x.map(x => Object.assign({
                           assists: x.assists,
                           date: x.date,
                           ekia: x.ekia,
                           ekiadRatio: x.ekiadRatio,
                           kills: x.kills

                       })
                   )
               }
           )
        })
    }

    componentWillUpdate(prevProps) {
        if (this.props !== prevProps.data) {
        }

    }

    refreshData = () => {
        const playerName = this.props.match.params.name;
        getUserData(playerName, 'matches').then(({data}) => {

        });

    };


    render() {
        const chartList = Object.assign({
            kills:this.state.data.map(x=>x.kills),
            ekia:this.state.data.map(x=>x.ekia),
            assists:this.state.data.map(x=>x.assists),
            ekiadRatio:this.state.data.map(x=>x.ekiadRatio)
        });
        console.log('this is keys',Object.keys(chartList));
        const times = this.state.data.map(x => x.date);
    console.log(chartList);

        return (
            <div className={'container'}>
                <div className={'graph-container'}>
                    {
                        chartList.kills.length > 0 ?
                            Object.keys(chartList).map((x, index) => {
                                console.log('this is x',x);
                                return (
                                        <div key={index}>
                                    <Graph name={'name'} dates={times} data={chartList[x]} type={'line'}/>
                                </div>
                                )
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