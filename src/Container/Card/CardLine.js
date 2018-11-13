import React from 'react'
import {Bar} from "react-chartjs-2";

export class CardLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: 1,
            data: [],
            dates: [],
            size: 0,
            avg: 0,

        }
    }

    componentDidMount() {

        this.refreshData()
    }

    componentWillUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.refreshData()

        }
    }

    refreshData = () => {
        this.setState({
            name: this.props.name,
            data: this.props.data,
            dates: this.props.dates,
            size: this.props.size
        }, () => {
            this.setState({
                avg: this.state.data ? this.state.data.reduce((a, b) => a + b) : 0
            });

        });
    };

    createDataForGraph = (name, data, avg, dates) => {
        const avgValue = [];
        for (let i = 0; i < 20; i++) {
            avgValue.push(avg)
        }
        if (this.state.amount === 1)
            return {
                labels: dates.reverse(),
                datasets: [
                    {
                        type: 'line',
                        fill: false,
                        label: `Average`,
                        backgroundColor: 'rgba(255, 255, 255,0.5)',
                        borderColor: 'rgba(255, 255, 255,0.5)',
                        data: avgValue,
                        steppedLine: false,
                        lineTension: 0.6,
                        pointRadius: 0,
                        pointHitRadius: 10,
                        borderDash: [3],
                    },
                    {
                        type: 'bar',
                        fill: false,
                        borderDash: [],
                        label: name.toUpperCase(),
                        backgroundColor: 'rgba(255,140,0)',// orange
                        borderColor: 'rgb(255,140,0)',
                        data: data,
                        lineTension: 0.1,
                        pointRadius: 1,
                        pointHitRadius: 10,

                    },

                ],
            };
    };

    matchDate = (timeList) => {
        return timeList.map(x => (`${new Date(x * 1000).toLocaleDateString('en-US')} ${new Date(x * 1000).getHours()}:${new Date(x * 1000).getMinutes()}`))
    };

    render() {
        const {dates} = this.state ? this.state : [];
        const mydata = this.createDataForGraph(this.state.name, this.state.data, this.state.avg / 20, this.matchDate(dates));
        return (
            <div>
                <Bar
                    height={300}
                    width={500}
                    data={mydata}
                    redraw={true}
                />
            </div>
        );
    }


}