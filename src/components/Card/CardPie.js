import React from "react";
import './Card.css'
import {fixName, normalizeNumber} from "../../Functions/Functions";

export const Card = ({name, data, sub}) => {
    return (<div className={'card'}>
        <div>
            <div className={'card-top'}>{fixName(name)}</div>
            <div className={'card-context'}>
                {normalizeNumber(data)}
            </div>
            <div className={'card-sub'}>{sub} </div>
        </div>
    </div>)
};


export const List = ({data,filter}) => {
        const temp =data.filter(x=>x.action.startsWith(filter));
    return (
        <div>
            <h1>{fixName(filter)}</h1>
            <div  className={'table'}>
                {temp.sort((a,b)=> b.result -a.result).map((x,index)=>
                    <div key={index} className={'table-line'}>
                        <div>{fixName(x.action).replace(fixName(filter),'')}</div>
                        <div className={'table-result'}>{Math.round(x.result)}</div>
                    </div>)}
            </div>

        </div>
    );
};



export const SmallCard =({name, data, sub})=>{
    return (<div className={'small-card'}>
        <div>
            <div className={'small-card-top'}>{fixName(name)}</div>
            <div className={'small-card-context'}>
                {normalizeNumber(data)}
            </div>
            <div className={'small -card-sub'}>{sub} </div>
        </div>
    </div>)
};