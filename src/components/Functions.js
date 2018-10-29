export const getPresentage = (num, total, bool = true) => {
    return (bool ? Math.floor((num / total) * 100) : ((num / total)).toString().slice(0, 6));
};

export const getShortNum = (num,slice=4) =>{
    return num.toString().slice(0,slice)
};