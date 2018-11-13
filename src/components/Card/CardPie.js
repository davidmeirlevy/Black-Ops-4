import React from "react";
import './Card.css'
import {fixName} from "../../Functions/Functions";

export const Card = ({name, data, sub}) => {
    return (<div className={'card'}>
        <div>
            <div className={'card-top'}>
                {fixName(name)}</div>
            <div className={'card-context'}>
                {(data.toString().split('').length > 10 ?
                    data.toString().slice(0, 6) : data)}
            </div>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};




