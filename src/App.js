import React from 'react'
import Main from "./Main/Main";
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
            list: []
        }
    }

    addToList = (name = 'FormingSpoon801') => {
        const currentList = this.state.list;
        const newUser = <Main name={name}/>;
        currentList.push(newUser);
        this.setState({
            list: newUser
        })
    };


    render() {

        return (
            <div>
                <input/>
                <button onClick={() => {
                    this.addToList()
                }}>Add User
                </button>
                <div className={'App'}>
                    <Main name={'FormingSpoon801'}/>
                    <Main name={'FormingSpoon801'}/>
                    <Main name={'FormingSpoon801'}/>
                    <Main name={'FormingSpoon801'}/>
                    <Main name={'FormingSpoon801'}/>
                    <Main name={'FormingSpoon801'}/>
                    <Main name={'FormingSpoon801'}/>
                    <Main name={'FormingSpoon801'}/>
                </div>

            </div>
        );
    }

}

export default App

