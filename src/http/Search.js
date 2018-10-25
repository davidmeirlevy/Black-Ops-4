
export const getUserData = (name) => {
    const URL = `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/${name}/profile/`;
    return fetch(URL, {headers: {'Access-Control-Allow-Origin': '*',}})
        .then(res => res.json())

};

