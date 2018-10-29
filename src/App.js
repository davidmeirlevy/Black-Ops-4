import React from 'react'
import Main from "./Main/Main";
import './App.css'

class App extends React.Component {

    render() {
        return (
            <div className={'App'}>
                        <Main  name={'FormingSpoon801'} />
                        <Main  name={'MenahemCohen'} />
                        <Main  name={'SufleShoKolad'} />
                        <Main  name={'WakingBrizard'} />
            </div>
        );
    }

}

export default App

