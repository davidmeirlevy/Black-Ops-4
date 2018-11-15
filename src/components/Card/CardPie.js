import React from "react";
import './Card.css'
import {fixName, normalizeNumber} from "../../Functions/Functions";

export const Card = (props) => {
    return (<div className={'small-card'}>
        <div>
            <div className={'mall-card-top'}>{fixName(props.name)}</div>
            <div className={'small-card-context'}>{props.children}</div>
            <div className={'small-card-sub'}>{props.text} </div>
        </div>
    </div>)
};

export const List = ({data,filter}) => {
        const filteredList = data.filter(x=>x.action.startsWith(filter));
    return (
        <div>
            <h1>{fixName(filter)}</h1>
            <div  className={'table'}>
                {SortMaxMin(filteredList).map((x,index)=>
                    <div key={index} className={'table-line'}>
                        <div>{fixName(x.action).replace(fixName(filter),'').length > 0
                    ?
                            fixName(x.action).replace(fixName(filter),''):
                            filter
                    }</div>
                        <div className={'table-result'}>{Math.round(x.result)}</div>
                    </div>)}
            </div>

        </div>
    );
};


 const SortMaxMin = (array)=>{
    return array.sort((a,b)=> b.result - a.result)
};

