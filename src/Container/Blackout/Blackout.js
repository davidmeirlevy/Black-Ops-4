import React from 'react'
import {Bar, Line} from "react-chartjs-2";
import {Loading} from "../../components/Loading/Loading";

export class Blackout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            shots: [],
            ekiaDeathList: [],
            ekiaDeathAvg: 0,
            shotAvg:0
        }

    }

    componentDidMount() {
        // fetch('https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/FormingSpoon801/profile/type/wz')
        //     .then(j => j.json()).then(res => console.log(res));
        fetch('https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/MenahemCohen/matches/mp/start/0/end/0/details')
            .then(j => j.json()).then(({data}) => {
            const obj = data.matches;
            this.setState({shots: data.matches.map(x => x.playerStats.kills)});
            this.setState({ekiaDeathList: data.matches.map(x => x.playerStats.ekia / x.playerStats.deaths)});
            this.setState({ekiaDeathAvg: this.state.ekiaDeathList.reduce((a, b) => a + b)/20});
            this.setState({shotAvg: this.state.shots.reduce((a, b) => a + b)/20});
            this.setState({data: obj})
        });
    }


    render() {
        const {shots} = this.state ? this.state : [];
        const {ekiaDeathAvg} = this.state ? this.state : [6];
        const {shotAvg} = this.state ? this.state : [6];
        const arra  =[];
        for (let i = 0; i < 20; i++) arra.push(shotAvg);
        console.log(this.state);
        const data = {

            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20],
            datasets: [
                {
                    fill: false,
                    label: `Shot Average ${shotAvg}`,
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(255, 255, 255)',
                    data: arra,
                    steppedLine:false,
                    lineTension: 0.1,
                    pointRadius: 1,
                    pointHitRadius: 10,
                },

                {

                    fill: false,
                    borderDash: [],
                    label: "Shots",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: shots,
                    lineTension: 0.1,
                    pointRadius: 1,
                    pointHitRadius: 10,

                },

            ],
            options: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'black',
                        defaultFontColor:'white'
                    }
                }
            }

        };

        return (
            <div>
                {
                    this.state.ekiaDeathAvg != null ?
                        <Line
                            data={data}
                            height={200}
                            width={500}
                            redraw={true}
                            options={{
                                maintainAspectRatio: false
                            }}

                        />
                        :
                        <Loading/>
                }

            </div>
        );
    }

}

export default Blackout