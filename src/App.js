import React from 'react'
import './App.css'
import {Logo} from "./components/Logo/Logo";
import Login from "./Container/Login/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Top from "./Container/Top/Top"
import LifeTime from "./Container/LifeTime/LifeTime";
import WeeklyGraphs from "./Container/WeeklyGraphs/WeeklyGraphs";
import TeamMate from "./Container/TeamMate/TeamMate";
class App extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <Route exact path="/" render={()=><Login/>} />
                        <Route path={'/:name/:section'} render={(props)=><Top {...props}/>}/>
                        <Route path={'/:name/lifetime'} render={(props)=><LifeTime {...props} />}/>
                        <Route path={'/:name/weekly'} render={(props)=><WeeklyGraphs {...props} />}/>
                        <Route path={'/:name/teammates'} render={(props)=><TeamMate {...props} />}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App