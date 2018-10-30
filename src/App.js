import React from 'react'
import Main from "./Main/Main";
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {show: true, name: 'dudioudo'},
                {show: true, name: 'WakingBrizard'},
                {show: true, name: 'FormingSpoon801'},
                {show: true, name: 'MenahemCohen'},
                {show: true, name: 'SufleShokolad'},

            ]
        }

    }

    changeList = (user) => {
        user.show = !user.show;
        this.setState({
            user

        })
    };


    render() {
        return (
            <div>
                {this.state.list.map((user,index) => {
                    return (<div key={index} className={'player-list'}>
                        <label>
                            <input type={'checkbox'}
                                   defaultChecked
                                   onClick={() => {this.changeList(user)}}/>
                            {user.name}
                        </label>
                    </div>)
                })}
                <div className={'App'}>
                    {this.state.list.map((user,index) => {
                        return user.show ?
                            <div key={index}>
                                <Main name={user.name}/>
                            </div>
                            :
                            <div/>
                    })}
                </div>
            </div>
        );
    }
}

export default App

