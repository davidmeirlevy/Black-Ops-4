import React from 'react'
import Statistics from "./Container/Statistics/Statistics";
import './App.css'
import {Logo} from "./Functions/Functions";
import {Loading} from "./components/Loading/Loading";
import {getUserData} from "./Functions/Http";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'FormingSpoon801',
            list: [],
            com: false,
            isAutorise: false
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

    getAllUsers = () => {
        return this.state.list.map(x => ({data: x.data, color: x.color}));
    };

    validateName = (name) => {
        getUserData(name).then(({status}) =>
            this.setState({
                isAutorise: (status === 'success')
            }));
    };

    render() {
        const users = this.getAllUsers();
        const {isAutorise} = this.state;

        return (
            <div>
                <Logo/>
                {
                    isAutorise ?
                        <div className={'App'}>
                            {this.state.list.map((user, index) => {
                                return users.length > 0 ?
                                    <div key={index} className={'statistic-container'}>
                                        <Statistics name={this.state.query} color={`rgb(${user.color})`}/>
                                    </div>

                                    :
                                    <div key={index}>
                                        <Loading/>
                                    </div>

                            })}
                        </div>
                        :
                        <div>
                            <div className={'login-step'}>
                                Enter User name <input width={300} onChange={(event) => this.setState({query: event.target.value})}/>
                                <button onClick={() => this.validateName(this.state.query)}>check</button>
                            </div>
                        </div>
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
        {show: true, name: 'FormingSpoon801', color: '0, 255, 0', data: []},
        // {show: true, name: 'MenahemCohen', color: '0, 0, 0', data: []},
        // {show: true, name: 'SufleShokolad', color: '255,255,0', data: []},
    ]
};