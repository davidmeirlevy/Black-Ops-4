import React from 'react'
import Login from "./login/login-page";
import Main from "./Main/Main";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            data: []
        }
    }

    getData = (data) => {
        this.setState({
            data
        })
    };

    checkLogin = () => {
        this.setState({login: true})
    };

    render() {
        return (
            <div className={'App'}>
                {!this.state.login
                    ?
                    <Login isLogin={() => this.checkLogin()}
                           getPlayerData={(data) => this.getData(data)}/>
                    :
                    <Main data={this.state.data}/>

                }
            </div>
        );
    }

}

export default App