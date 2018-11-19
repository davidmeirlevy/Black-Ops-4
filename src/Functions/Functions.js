import React from "react";

export const normalizeNumber = (num) => {

    return (num.toString().includes('.')?`${num.toString().split('.')[0]}.${num.toString().split('.')[1].slice(0,3)}`:num)
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


export const fixName = (name) => {
return name.split('')[0].toUpperCase() +
    name.split('').slice(1)
        .map(letter => (letter === letter.toUpperCase()
            ? ` ${letter}`
            : letter)).join('')
};

