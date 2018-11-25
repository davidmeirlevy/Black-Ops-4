const cors = require('cors');
const firebase = require('firebase');
const express = require('express');
const http = require('https');
const bodyParser = require('body-parser');

const app = express();
const port2 = process.env.PORT;

const PLATFORM = 'xbl';
const TITLE = 'bo4';
const MAIN_URL = `https://my.callofduty.com/api/papi-client/crm/cod/v2/title/${TITLE}/platform/${PLATFORM}/gamer/`;

var GLOBAL_NAME = '';
app.use(cors());
app.use(bodyParser.json());

const config = {
    apiKey: "AIzaSyAOzEkQ8vpjKbsw5mqnFFmr4qML-bVbCeI",
    authDomain: "call-of-duty-black-ops-4-15a24.firebaseapp.com",
    databaseURL: "https://call-of-duty-black-ops-4-15a24.firebaseio.com",
    projectId: "call-of-duty-black-ops-4-15a24",
    storageBucket: "call-of-duty-black-ops-4-15a24.appspot.com",
    messagingSenderId: "518851485397"
};
firebase.initializeApp(config);

app.get('/users', (req, res) => {
    console.log('enter api.user');
    firebase.database().ref('/users/').on('value', (snap) => {
        const registrateUsers = snap.val();
        res.json(Object.keys(registrateUsers).map(x => Object.assign({name: x})));
        res.status(200);
        res.end();
    });
});

app.get('api/users/:name', (req, res) => {
    GLOBAL_NAME = req.params.name;
    let data = '';
    http.get(`${MAIN_URL}${GLOBAL_NAME}/profile`, (resp) => {
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            const jsonFile = JSON.parse(data);
            const userName = jsonFile.data.username;
            const userLevel = jsonFile.data.mp.level;
            const userPrestige = jsonFile.data.mp.prestige;
            const object = Object.assign({username: userName, level: userLevel, prestige: userPrestige});
            updateDB(GLOBAL_NAME, userName, userLevel, userPrestige).then(
                res.status(200),
                res.json(object).end())
        });

    });
});

app.get('api/lifetime/:name', (req, res) => {
    GLOBAL_NAME = req.params.name;
    let data = '';
    http.get(`${MAIN_URL}${GLOBAL_NAME}/profile`, (resp) => {
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            const jsonFile = JSON.parse(data);
            const userData = jsonFile.data.mp.lifetime.all;
            firebase.database().ref(`/users/${GLOBAL_NAME}`).update({
                data: Object.keys(userData).map(x => Object.assign({action: x, result: userData[x]}))
            }, () => firebase.database().ref(`/users/${GLOBAL_NAME}`).on('value', (snap) => {
                res.json(snap.val().data);
                res.status(200)
            })).then(res.status(200));
        });

    });
});

app.get('api/weekly/:name', (req, res) => {
    const name = req.params.name;
    firebase.database().ref(`/users/${name}/weekly`).on('value', (snap) => {
        const dataFromDB = snap.val();
        console.log(dataFromDB);
        if (dataFromDB == null) {
            console.log('enter null', dataFromDB);
            let data = '';
            http.get(`${MAIN_URL}${name}/matches/mp/start/0/end/0/details`, (resp) => {
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    const jsonFile = JSON.parse(data);
                    const tempData = jsonFile.data.matches;
                    const fromAPI = tempData.map(x => Object.assign({
                        assists: x.playerStats.assists,
                        date: x.utcStartSeconds,
                        ekia: x.playerStats.ekia,
                        ekiadRatio: x.playerStats.ekiadRatio,
                        kills: x.playerStats.kills
                    }));
                    let size = [];
                    size = arraysEqual(dataFromDB, fromAPI);
                    if (size.length !== dataFromDB.length)
                        firebase.database().ref(`/users/${GLOBAL_NAME}`).update({
                            weekly: size
                        });
                    data = '';
                });
            })
        }
        res.json(dataFromDB);
    });
});

const arraysEqual = (arraToSave, arrayWithChanges) => {
    return Object.values(arrayWithChanges.concat(arraToSave).reduce((r, o) => {
        r[o.date] = o;
        return r;
    }, {}));

};

const updateDB = (name, userName, userLevel, userPrestige) => {
    return firebase.database().ref(`/users/${name}`).update({
        personal: {
            name: userName,
            level: userLevel,
            prestige: userPrestige
        },
    })
};

app.listen(3000);
