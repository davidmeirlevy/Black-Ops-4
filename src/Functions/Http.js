const URL ='https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/';


export const toJson = (data) => {
    return data.json()
};

export const myFetch = (url) => {
    return fetch(url).then(toJson)
};

export const getUserData = (username,action='profile') => {
    const path = (!action.match('matches')  ? `${URL}${username}/${action}` : `${URL}${username}/${action}/mp/start/0/end/0/details` );
    return Promise.resolve(myFetch(path))
};

