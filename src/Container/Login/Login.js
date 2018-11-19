import React from 'react'
import {getUserData} from "../../Functions/Http";
import './Login.css'
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            query: '',
            data: [],
            res:''
        }
    }

    validateUsername = (username) => {
        getUserData(username).then(results => {
            this.setState({
                validate: results.status === 'success',
                data: results.data,
                res:results.status
            },);
        })
    };

    render() {
        console.log(this.state);
        return (
            <div className={'login'}>
                Enter your username:
                <input onChange={(event) => {this.setState({query: event.target.value,}, () => this.validateUsername(this.state.query));}}/>
                <div hidden={!this.state.validate}>
                    <Link to={{pathname: `/${this.state.query}/lifetime`, state: {data: this.state.data}}}>
                        <button className={'button'}>Enter</button>
                    </Link>
                </div>
                <div className={'example'}> example:FormingSpoon801</div>
            </div>
        );
    }


}

export default Login