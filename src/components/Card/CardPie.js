import React from "react";
import './Card.css'
import {Line} from 'react-chartjs-2';
import {fixName} from "../../Functions/Functions";

export const CardPie = ({name, data}) => {
    console.log(data);
    const avg = data?data.reduce((a, b) => a + b):0;
    const mydata = createDataForGraph(name, data, avg / 20);
    return (
        <div className={'card-chart'}>
            <Line
                data={mydata}
                height={200}
                width={450}
                redraw={true}
            />
        </div>)
};

export const Card = ({name, data, sub}) => {
    return (<div className={'card'}>
        <div className={'card-container'}>
            <div className={'card-top'}> {fixName(name)}</div>
            <div className={'card-context'}>
                {(data.toString().split('').length > 10 ?
                    data.toString().slice(0, 6) : data)}
            </div>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};


export const createDataForGraph = (name, data, avg) => {
    const avgValue = [];
    for (let i = 0; i < 20; i++) {avgValue.push(avg)}
    return {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datasets: [
            {
                fill: false,
                label: `${name.toUpperCase()} Avg`,
                backgroundColor: 'rgba(255, 255, 255,0.5)',
                borderColor: 'rgba(255, 255, 255,0.4)',
                data: avgValue,
                steppedLine: false,
                lineTension: 0.6,
                pointRadius: 0,
                pointHitRadius: 10,
            },
            {
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


