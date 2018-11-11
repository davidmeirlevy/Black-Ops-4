import React from "react";
import './Card.css'
import {Bar, Doughnut} from 'react-chartjs-2';
import {fixName} from "../../Functions/Functions";

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
            <div className={'card-top'}> {fixName(name)}</div>
            <div className={'card-context'}>
                {(data.toString().split('').length > 10 ?
                    data.toString().slice(0, 6) : data)}
            </div>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};

export const TestGraph = ({name, lable}) => {
    const data = {
        lable: [lable],
        datasets: [],
        options: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        }
    };
    const test = name.map(user => createDataForGraph(user.data['username'], user.data[lable], user.color));
    test.map(x => data.datasets.push(x));
    return <div className={'card'}>
        <div className={'graph-mini'} style={{backgroundColor: 'white'}}>
            <div className={'card-container-pie'}>
                <div className={'card-top'}>{(lable).split('')[0].toUpperCase() +
                lable.split('').slice(1)
                    .map(letter => (letter === letter.toUpperCase()
                        ? ` ${letter}`
                        : letter)).join('')}
                </div>
                <Bar style={{backgroundColor: 'white', color: 'white'}}
                     width={300}
                     height={300} data={data}/>
                <div className={'card-sub'}>test</div>
            </div>
        </div>

    </div>


};

export const createDataForGraph = (name, data, color) => {
    return {
        label: name,
        backgroundColor: `rgba(${color},0.4)`,
        borderColor: `rgba(${color},1)`,
        borderWidth: 1,
        hoverBackgroundColor: `rgba(${color},0.7)`,
        hoverBorderColor: `rgba(${color},1)`,
        data: [data]
    };
};
