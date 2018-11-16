import React from "react";
import './Card.css'
import {fixName} from "../../Functions/Functions";

export const Card = (props) => {
    return (<div className={'card'}>
        <div>
            <div className={'card-top'}>{fixName(props.name)}</div>
            <div className={'card-context'}>{props.children}</div>
            <div className={'card-sub'}>{props.text} </div>
        </div>
    </div>)
};

