import React from "react";
import './Card.css'
import {Doughnut} from 'react-chartjs-2';
export const CardPie = ({name, data1, data2, sub}) => {
    const orange = '#b27b00';
    const blackOrange = '#6e4c00';
    const data = {
        labels: [
            `${data1}%`,
            `${data2}%`
        ],
        datasets: [{
            data: [data1, data2],
            backgroundColor: [
                '#ff9202',
                '#694603',
            ],
            hoverBackgroundColor: [
                '#ff9202',
                '#694603',
            ]
        }]
    };
    return (<div className={'card'}>
        <div className={'card-container-pie'}>
            <div className={'card-top'}>{name}</div>

            <Doughnut data={data}
                      width={150}
                      height={100}
                      options={{
                          maintainAspectRatio: false
                      }}/>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};

export const Card = ({name, data, sub}) => {
    return (<div className={'card'}>
        <div className={'card-container'}>
            <div className={'background'}></div>
            <div className={'card-top'}> {name}</div>
            <div className={'card-context'}>{data}</div>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};