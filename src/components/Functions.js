import React from "react";

export const getPresentage = (num, total, bool = true) => {
    return (bool ? Math.floor((num / total) * 100) : ((num / total)).toString().slice(0, 6));
};

export const getShortNum = (num,slice=4) =>{
    return num.toString().slice(0,slice)
};

export const getPrestigeImage = (num) => {
        const list = [
                '',
                'https://image.ibb.co/ideMDA/L1.png',
                'https://image.ibb.co/jFtgDA/L2.png',
                'https://image.ibb.co/idRe0q/L3.png',
                'https://image.ibb.co/jsoRfq/L4.png',
                'https://image.ibb.co/cwviRV/L5.png',
                'https://image.ibb.co/iRMe0q/L6.png',
                'https://image.ibb.co/i9bq6V/L7.png',
                'https://image.ibb.co/cPXK0q/L8.png',
                'https://image.ibb.co/mZvHmV/L9.png',
                'https://image.ibb.co/dzGe0q/L10.png'
            ];

        return list[num]
    };

export const getUserData = (name) => {
    const URL = `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/${name}/profile/`;
    return fetch(URL, {
        headers: {'Access-Control-Allow-Origin': '*',}})
        .then(res => res.json()).then(({data}) => {
            return data;
        })

};

export const Logo = () => {
    return <img className={'logo'}
               src={'https://image.ibb.co/inYpYA/07ef4a2a-37ba-4f4d-8be6-1be1b61bc102.png'}
               alt={'logo'}/>;
};


