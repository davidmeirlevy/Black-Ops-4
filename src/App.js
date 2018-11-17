import React from 'react'
import Statistics from "./Container/Statistics/Statistics";
import './App.css'
import {Logo} from "./components/Logo/Logo";
import Login from "./Container/Login/Login";
import LifeTime from "./Container/Multiplayer/LifeTime";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
        return (
            <div>
                <Logo/>
                <Router>
                    <div>
                        <Route exact path={'/'} component={Login}/>
                        <Route path={'/user/:name'} render={(props)=><Statistics {...props} />}/>
                        <Route path={'/lifetime/:neme'} component={LifeTime}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App