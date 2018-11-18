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
        return (
            <div className={'login'}>
                <input onChange={(event) => {this.setState({query: event.target.value,}, () => this.validateUsername(this.state.query));}}/>
                <div hidden={!this.state.validate}>
                    <Link to={{pathname: `/${this.state.query}/lifetime`, state: {data: this.state.data}}}>
                        <button>Enter</button>
                    </Link>
                    {this.state.res}
                </div>
            </div>
        );
    }


}

export default Login