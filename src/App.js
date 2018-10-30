import React from 'react'
import Statistics from "./Main/Statistics";
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
                    <img className={'logo'}
                         src={'https://image.ibb.co/inYpYA/07ef4a2a-37ba-4f4d-8be6-1be1b61bc102.png'}
                         alt={'logo'}/>
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
                                <Statistics name={user.name}/>
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

