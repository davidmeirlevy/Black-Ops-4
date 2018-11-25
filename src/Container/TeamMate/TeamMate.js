import React from 'react'
import { getUsersData} from "../../Functions/Http";
import './TeamMate.css'
import {TableRow} from "./table";
import {Bar} from "react-chartjs-2";

class TeamMate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: [],
            isLoading: false,
            isSuccess: null,
            size:5
        }
    }

    componentDidMount()
    {
        setInterval(()=>{this.setState({size: this.state.size +1})},10000)
    };


    search = () => {
        if(this.state.query !== '') {
            getUsersData([this.props.match.params.name, this.state.query]).then(res => {
                if(res[1].status === 'success'){
                    this.setState({
                        isSuccess:true,
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
                }
                else
                    this.setState({
                        isSuccess:false
                    })

            })
        }
    };


    render() {
        const temp =this.state.data.filter(x=>(x.myResult !== 0 &&
            x.friedResult !==0 &&
            x.myResult <1000 &&
            x.friedResult <1000 &&
            x.myResult >1 &&
            x.friedResult >1));
        const myData ={
            labels: temp.map(x=>x.action).slice(this.state.size-5,this.state.size),
            datasets: [
                {
                    // type: 'bar',
                    fill: false,
                    label: this.state.data.myName,
                    backgroundColor: 'rgba(255, 255, 255,0.5)',
                    borderColor: 'rgba(255, 255, 255,0.5)',
                    data:temp.map(x=>x.friedResult).slice(this.state.size -5,this.state.size),
                    steppedLine: false,
                    lineTension: 0.6,
                    pointRadius: 0,
                    pointHitRadius: 10,
                },
                {
                    // type: 'bar',
                    fill: false,
                    label: this.state.data.friendName,
                    backgroundColor: 'rgba(255,140,0)',// orange
                    borderColor: 'rgb(255,140,0)',
                    data: temp.map(x=>x.myResult).slice(this.state.size -5,this.state.size),
                    steppedLine: false,
                    lineTension: 0.6,
                    pointRadius: 0,
                    pointHitRadius: 10,

                },

            ],
        };

        return (
            <div className={'TeamMate'}>
                <div className={'TeamMate-wrapper'}>
                    <div className={'TeamMate-search'}>
                        SearchFriend : <input type='text' onChange={(event) => {this.setState({query: event.target.value})}}/>
                        <button onClick={() => this.search(this.state.query)}>Click</button>
                    </div>
                    {
                        this.state.isSuccess !== null ?
                            this.state.isSuccess ?
                                <div>

                                    <div className={'table'}>
                                        {
                                            this.state.isLoading ?
                                                <div className={'table-header'}>
                                                    <div className={'header-item'}/>
                                                    <div className={'header-item'}>{this.props.match.params.name} VS {this.state.query}</div>
                                                </div>
                                                :
                                                <div/>}

                                    <Bar
                                        height={50}
                                        width={600}
                                        data={myData}
                                        redraw={true}
                                    />
                                </div>


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

                                :
                                <div>Invalid Username</div>
                            :
                            <div>Enter User name</div>
                    }
                </div>
            </div>
        );
    }


}

export default TeamMate