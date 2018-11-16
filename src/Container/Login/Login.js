import React from 'react'
import {getUserData} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: null,
            query: ''
        }
    }

    isLogin = () => {
        if (this.state.validate)
            this.props.isAutorized(this.state.validate, this.state.query)
    };

    validateUsername = (username) => {
        getUserData(username).then(({status}) => {
            this.setState({validate: status === 'success'}, () => this.isLogin());

        })
    };

    render() {
        const {validate} = this.state;
        return (
            <div className={'login'}>
                {
                    validate !== false && validate !== true ?
                        <div/>
                        :
                        validate === false ?
                            <div>No username found</div> :
                            <Loading/>
                }
                <div className={'login-step'}>Enter User username</div>

                <input width={300}
                       onChange={(event) => this.setState({query: event.target.value})}/>
                <button onClick={() =>
                    this.validateUsername(this.state.query)}>Enter
                </button>
                {this.state.isAuthorized ? <div>Access Denied</div> : <div/>}
                <div className={'sub'}>click here: <div onClick={() => {
                    this.setState({query: 'FormingSpoon801', validate: true}, () => this.isLogin());
                }}>FormingSpoon801</div></div>
            </div>
        );
    }


}

export default Login