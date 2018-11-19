import React from 'react'
import { getUsersData} from "../../Functions/Http";
import './TeamMate.css'
import {fixName, normalizeNumber} from "../../Functions/Functions";
import {TableRow} from "./table";

class TeamMate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: [],
            isLoading: false
        }
    }

    componentDidMount(){
        console.log('this is state',this.state)
    }


    search = () => {
        if(this.state.query !== '') {
            getUsersData([this.props.match.params.name, this.state.query]).then(res => {
                this.setState({
                    data: Object.keys(res[1].data.mp.lifetime.all)
                        .map(x => Object.assign({
                            action: x,
                            friedResult: res[1].data.mp.lifetime.all[x],
                            friendName: res[1].data.username,
                            myResult: res[0].data.mp.lifetime.all[x],
                            myName: res[0].data.username,
                        })),
                }, () => {
                    this.setState({
                        isLoading: true
                    })
                })
            })
        }
    };


    render() {
        console.log('this is state',this.state);
        // const myData ={
        //     labels: [1,2,3,4,5,6,7,8,9,10],
        //     datasets: [
        //         {
        //             type: 'bar',
        //             fill: false,
        //             label: `{Player 1}`,
        //             backgroundColor: 'rgba(255, 255, 255,0.5)',
        //             borderColor: 'rgba(255, 255, 255,0.5)',
        //             data:[1,14,23,1,12,14] ,
        //             steppedLine: false,
        //             lineTension: 0.6,
        //             pointRadius: 0,
        //             pointHitRadius: 10,
        //             borderDash: [3],
        //         },
        //         {
        //             type: 'bar',
        //             fill: false,
        //             borderDash: [],
        //             label: 'Player 2',
        //             backgroundColor: 'rgba(255,140,0)',// orange
        //             borderColor: 'rgb(255,140,0)',
        //             data: [1,14,23,1,12,14].map(x=>x*3),
        //             lineTension: 0.1,
        //             pointRadius: 1,
        //             pointHitRadius: 10,
        //
        //         },
        //
        //     ],
        // };

        // const data = this.status.friendData ? this.status.friendData : [];
        return (
            <div className={'TeamMate'}>
                SearchFriend : <input type='text' onChange={(event) => {this.setState({query: event.target.value})}}/>
                <button onClick={() => this.search(this.state.query)}>Click</button>
                <div className={'table'}>
                    {
                        this.state.isLoading ?
                        <div className={'table-header'}>
                            <div className={'header-item'}/>
                            <div className={'header-item'}>{this.props.match.params.name} VS {this.state.query}</div>
                        </div>
                    :
                    <div/>}


                    {
                        this.state.isLoading ?

                            this.state.data.map((x,index)=>{
                                return(
                                    <div className={'table-wrapper'} key={index}>
                                        {TableRow(x.action,x.myResult,x.friedResult,x.friendName)}
                                    </div>
                                )
                            })
                            :
                            <div>Choose Friend</div>
                    }
                </div>
            </div>
        );
    }


}

export default TeamMate