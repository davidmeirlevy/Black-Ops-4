import React from 'react'
import {getUserData} from "../../Functions/Http";
import {Loading} from "../../components/Loading/Loading";
import './Login.css'
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: null,
            query: '',
            data:[]
        }
    }


    validateUsername = (username) => {

        getUserData(username).then(results => {
            this.setState({validate: results.status === 'success',
            data:results.data});
        })
    };

    render() {
        return (
            <div className={'login'}>
                {this.state.isLoading ?
                    <Loading/>
                    :
                    <div/>}
                <input onChange={(event) => {
                    this.setState({query: event.target.value}, () => this.validateUsername(this.state.query));
                }}/>


                <div hidden={this.state.validate === null || this.state.validate === false}>
                    <Link  to={{ pathname: `/user/${this.state.query}`, state: { data: this.state.data} }}>
                        <button>Enter</button>
                    </Link>
                </div>
            </div>
        );
    }


}

export default Login