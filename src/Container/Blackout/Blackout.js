import React from 'react'
import {Loading} from "../../components/Loading/Loading";
import {CardPie} from "../../components/Card/CardPie";
import './Graph.css'

export class Blackout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            times:[]
        };
    }

    componentDidMount() {
        const TIME = 20;

        // fetch('https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/FormingSpoon801/profile/type/wz')
        //     .then(j => j.json()).then(res => console.log(res));
        fetch('https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/MenahemCohen/matches/mp/start/0/end/0/details')
            .then(j => j.json()).then(({data}) => {
                console.log(data);
            this.setState({
                data: {
                    killList: {data:data.matches.map(x => x.playerStats.kills),name:'kill'},
                    ekiaList: {data:data.matches.map(x => x.playerStats.ekia),name:'ekia'},
                    deathList: {data:data.matches.map(x => x.playerStats.deaths),name:'death'},
                    assistsList: {data:data.matches.map(x => x.playerStats.assists),name:'assists'},
                    ekiadRatioList: {data:data.matches.map(x => x.playerStats.ekiadRatio),name:'ekiadRatio'},
                },
                times:{utcEndSeconds: {data:data.matches.map(x => x.utcStartSeconds),name:'utcEndSeconds'},}

            })
        })
    }


    render() {
        const tempObj = Object.keys(this.state.data).map(x => this.state.data[x]);
        const time = Object.keys(this.state.times).map(x => this.state.times[x]);
        return (
            <div className={'graph-container'}>
                {
                    tempObj.map((x, index) => {
                        return (<div key={index}>
                            <CardPie name={x.name} dates={time} data={x.data}/>
                        </div>)})
                }
            </div>
        );
    }

}

export default Blackout