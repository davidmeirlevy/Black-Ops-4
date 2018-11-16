import React from 'react'
import Statistics from "./Container/Statistics/Statistics";
import './App.css'
import Login from "./Container/Login/Login";
import {Logo} from "./components/Logo/Logo";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            list: [],
            com: false,
            isAuthorized: null
        }
    }

    setAutoraztion = (access, username) => {
        if (access)
            this.setState({
                isAuthorized: true,
                username: username
            })
    };

    render() {
        const {isAuthorized} = this.state;

        return (
            <div>
                <Logo/>
                {
                    isAuthorized ?
                        <div className={'App'}>
                            <div className={'statistic-container'}>
                                <Statistics name={this.state.username}/>
                            </div>
                        </div>
                        :
                        <Login isAutorized={(bool, user) => (this.setAutoraztion(bool, user))}/>
                }
            </div>
        );
    }
}

export default App