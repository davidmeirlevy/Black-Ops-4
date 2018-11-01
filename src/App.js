import React from 'react'
import Statistics from "./Container/Statistics/Statistics";
import './App.css'
import {Logo} from "./components/Functions";
import {TestGraph} from "./components/Card/CardPie";
import {HorizontalBar} from "react-chartjs-2";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {show: true, name: 'dudioudo', color: '255, 0, 0', data: []},
                {show: true, name: 'WakingBrizard', color: '0, 0, 255', data: []},
                {show: true, name: 'FormingSpoon801', color: '0, 255, 0', data: []},
                {show: true, name: 'MenahemCohen', color: '0, 0, 0', data: []},
                {show: true, name: 'SufleShokolad', color: '255,255,0', data: []},
            ],
            com: false
        }
    }

    componentDidMount() {
        console.log('mounted', this.state)
    }

    dataFromChild = (name, data) => {
        const currentUser = this.state.list.find(user => user.name === name);
        currentUser.data = data;
        this.setState({
            currentUser
        });
    };

    changeList = (user) => {
        user.show = !user.show;
        this.setState({
            user
        })
    };

    showComper = () => {
        this.setState({com: !this.state.com})
    };

    getAllUsers = () => {
        return this.state.list.map(x => ({data: x.data, color: x.color}));
    };

    render() {
        const myS = ['level',
            'hits',
            'hs', 'wins',
            'suicides',
            'longestKillstreak', 'damagePerMinute', 'damagePerGame', 'headshotPercentage',
            'ekiaPerGame', 'ekia', 'deaths', 'kills', 'assists'
        ];
        const users = this.getAllUsers();
        return (
            <div>
                <Logo/>
                {this.state.list.map((user, index) => {
                    return (<div key={index} className={'player-list'}>
                        <label>
                            <input type={'checkbox'}
                                   defaultChecked
                                   onClick={() => {
                                       this.changeList(user)
                                   }}/>
                            {user.name}
                        </label>
                    </div>)
                })}
                <button onClick={() => this.showComper()}>Click</button>
                {
                    !this.state.com
                        ?
                        <div className={'App'}>
                            {this.state.list.map((user, index) => {
                                return user.show ?
                                    <div key={index} className={'statistic-container'}>
                                        <Statistics name={user.name}
                                                    color={user.color}
                                                    dataToParent={this.dataFromChild}/>
                                    </div>
                                    :
                                    <div/>
                            })}
                        </div>
                        :
                        <div className={'graph'}>
                            {
                                myS.map((lable, index) => {
                                    return (<div key={index}>
                                        <TestGraph name={users} lable={lable}/>
                                    </div>)
                                })
                            }
                        </div>
                }
            </div>
        );
    }
}

export default App

