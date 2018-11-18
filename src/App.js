import React from 'react'
import './App.css'
import {Logo} from "./components/Logo/Logo";
import Login from "./Container/Login/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Top from "./Container/Top/Top"
import LifeTime from "./Container/Multiplayer/LifeTime";
import WeeklyGraphs from "./Container/WeeklyGraphs/WeeklyGraphs";
class App extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <Router>
                    <div>
                        <Route exact path={'/'} component={Login}/>
                        <Route path={'/:name/:section'} render={(props)=><Top {...props}/>}/>
                        <Route path={'/:name/lifetime'} render={(props)=><LifeTime {...props} />}/>
                        <Route path={'/:name/weekly'} render={(props)=><WeeklyGraphs {...props} />}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App