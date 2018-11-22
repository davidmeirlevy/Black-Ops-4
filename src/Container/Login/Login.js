import React from 'react'
import {getUserData, myFetch} from "../../Functions/Http";
import './Login.css'
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            query: '',
            data: [],
            res:'',
            options:[]
        }
    }

    componentWillMount(){
        myFetch('http://localhost:8000/users/')
            .then(res=>{
            this.setState({
                options:res.map(x=>x.name)
            })
        })


    }

    validateUsername = (username) => {
        getUserData(username).then(results => {
            this.setState({
                validate: results.status === 'success',
                data: results.data,
                res: results.status
            })
        });
    };

    render() {
        const {options} = this.state;
        return (
            <div className={'login'}>
                {
                    options.length > 0 ?
                        options.map((user,index)=>{
                            return(
                                <div key={index} onClick={()=> {this.setState({query: user
                                },()=>this.validateUsername(this.state.query))
                                }}>{user}
                                    <h1 hidden={!this.state.validate}><Link to={{pathname: `/${this.state.query}/lifetime`, state: {data: this.state.data}}}>
                                        Click Her
                                    </Link></h1>
                                </div>
                            )
                        })
                        :
                        <div>No User in list</div>

                }


            </div>
        );
    }


}

export default Login