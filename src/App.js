import React from 'react'
import Statistics from "./Container/Statistics/Statistics";
import './App.css'
import {Logo} from "./Functions/Functions";
import {TestGraph} from "./components/Card/CardPie";
import {Loading} from "./components/Loading/Loading";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            com: false
        }
    }


    componentDidMount() {
        this.setState({
            list: list()
        })
    }


    changeList = (user) => {
        user.show = !user.show;
        this.setState({
            user
        })
    };

    clickHendler = () => {
        this.setState({com: !this.state.com})
    };

    getAllUsers = () => {
        return this.state.list.map(x => ({data: x.data, color: x.color}));
    };



    render() {
        const users = this.getAllUsers();
        return (
            <div>
                <Logo/>
                {
                    users.length >= 1
                        ?
                        <div className={'App'}>
                            {this.state.list.map((user, index) => {
                                return users.length > 0 ?
                                    <div key={index} className={'statistic-container'}>
                                        <Statistics name={user.name} color={`rgb(${user.color})`}/>
                                    </div>

                                    :
                                    <div key={index}>
                                        <Loading/>
                                    </div>

                            })}
                        </div>
                        :
                        <div/>
                }
            </div>
        );
    }
}

export default App

export const list = () => {
    return [
        // {name: 'dudioudo', color: '255, 0, 0', data: [], friends: []},
        // {show: true, name: 'WakingBrizard', color: '0, 0, 255', data: []},
        // {show: true, name: 'FormingSpoon801', color: '0, 255, 0', data: []},
        {show: true, name: 'MenahemCohen', color: '0, 0, 0', data: []},
        // {show: true, name: 'SufleShokolad', color: '255,255,0', data: []},
    ]
};