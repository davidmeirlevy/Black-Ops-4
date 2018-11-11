export const toJson = (data) => {
    return data.json()
};

export const myFetch = (url) => {
    return fetch(url).then(toJson)
};

export const getUserData = (username) => {
    return Promise.resolve(
             myFetch(`https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/${username}/profile/`)
    )

};

// matches/warzone/start/0/end/0/details