import React from "react";
import './Card.css'
import {Bar, Doughnut} from 'react-chartjs-2';
export const CardPie = ({name, data1, data2, sub}) => {
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


export const TestGraph = ({userA,userB,userC,userD,userE}) => {
    const myLable=['level',
        'hits', 'misses',
        'hs', 'wins',
        'losses', 'suicides',
    'longestKillstreak','damagePerMinute','damagePerGame','headshotPercentage',
    'ekiaPerGame','ekia','deaths', 'kills','assists','timePlayedTotal' ];
    const userAdata = myLable.map(x=>userA[x]);
    const userBdata = myLable.map(x=>userB[x]);
    const userCdata = myLable.map(x=>userC[x]);
    const userDdata = myLable.map(x=>userD[x]);
    const userEdata = myLable.map(x=>userE[x]);

    const initialState = {

        labels: myLable,
        datasets: [
            {
                label: userA['username'],
                backgroundColor: 'rgba(255, 0, 30, 0.59)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                fontSize: '30px',
                data: userAdata
            },
            {
                label: userB['username'],
                backgroundColor: 'rgba(0, 1, 255, 0.59)',
                borderColor: 'rgba(0, 1, 255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 1, 255,0.4)',
                hoverBorderColor: 'rgba(0, 1, 255,1)',
                data: userBdata
            },
            {
                label: userC['username'],
                backgroundColor: 'rgba(12, 136, 16, 0.59)',
                borderColor: 'rgba(12, 136, 16,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(12, 136, 16,0.4)',
                hoverBorderColor: 'rgba(12, 136, 16,1)',
                data: userCdata
            },
            {
                label: userD['username'],
                backgroundColor: 'rgba(136, 129, 0, 0.59)',
                borderColor: 'rgba(136, 129, 0,1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(136, 129, 0,0.4)',
                hoverBorderColor: 'rgba(136, 129, 0,1)',
                data: userDdata
            },
            {
                label: userE['username'],
                backgroundColor: 'rgba(97, 96, 98, 0.59)',
                borderColor: 'rgba(97, 96, 98,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(97, 96, 98,0.4)',
                hoverBorderColor: 'rgba(97, 96, 98,1)',
                data: userEdata
            },

        ],

    };
    return <Bar height={150}
                data={initialState}
    legend={{fontSize:'30'}}/>

}