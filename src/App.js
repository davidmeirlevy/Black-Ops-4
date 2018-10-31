import React from 'react'
import Statistics from "./Container/Statistics/Statistics";
import './App.css'
import {Logo} from "./components/Functions";
import {TestGraph} from "./components/Card/CardPie";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {show: true, name: 'dudioudo', color: 'red', data: []},
                {show: true, name: 'WakingBrizard', color: 'blue', data: []},
                {show: true, name: 'FormingSpoon801', color: 'green', data: []},
                {show: true, name: 'MenahemCohen', color: 'white', data: []},
                {show: true, name: 'SufleShokolad', color: 'yellow', data: []},
            ],
            com:false
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

    showComper = () =>{
        this.setState({com: true})
    };

    render() {
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
                {

                    this.state.com
                        ?
                        <div style={{backgroundColor:'white'}}>
                            <TestGraph userA={this.state.list[0].data}
                                       userB={this.state.list[1].data}
                                       userC={this.state.list[2].data}
                                       userD={this.state.list[3].data}
                                       userE={this.state.list[4].data}
                            />
                        </div>
                    :
                    <button onClick={()=>this.showComper()}>Click</button>
                }

            </div>
        );
    }
}

export default App

