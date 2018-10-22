import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    checkValidation = () => {
        const URL = `https://bo4tracker.com/api/stats/bo4/${this.state.name}/xbl`;
        fetch(URL).then(res => console.log(res.json()))
    };


    render() {
        return (
            <div className={'App'}>

            </div>
        );
    }

}

export default App