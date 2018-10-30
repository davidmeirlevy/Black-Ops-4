import React from "react";
import './Card.css'
import {VictoryPie} from 'victory-pie';

export const CardPie = ({name, data1, data2, sub}) => {
    const orange = '#b27b00';
    const blackOrange = '#6e4c00';
    return (<div className={'card'}>
        <div className={'card-container-pie'}>
            <div className={'card-top'}>{name}</div>
            <div className={'card-context-pie'}><VictoryPie
                colorScale={[orange, blackOrange]}
                data={[
                    {x: `${data1}%`, y: data1},
                    {x: `${data2}%`, y: data2},
                ]}
                padAngle={3}
                innerRadius={100}
                labelRadius={110}
                style={{
                    labels: {
                        fill: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                        fontFamily: 'Titillium Web, sans-serif'
                    }
                }}
            /></div>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};

export const Card = ({name, data, sub}) => {
    return (<div className={'card'}>
        <div className={'card-container'}>
            <div className={'card-top'}> {name}</div>
            <div className={'card-context'}>{data}</div>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};