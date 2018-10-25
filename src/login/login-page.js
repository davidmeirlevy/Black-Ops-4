import React from 'react'
import './login.css'
import Loader from 'react-loader-spinner'
import {getUserData} from '../http/Search'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            status: 'error',
        };
    }

    componentDidMount(){
        this.checkLocalStorage();
        getUserData()

    }

    isValid =(name) => {
        getUserData(name).then(({data}) => {
            this.props.getPlayerData(data);
            this.props.isLogin();
        });
    };

    checkLocalStorage = () => {
        const temp = localStorage.getItem('username');
        if (temp != null)
            this.setState({username: temp});
        else getUserData(temp)
    };

    render() {
        return (
            <div>
                <div className={'Login'}>
                    <div className={'Login-content'}>
                        <Loader
                            type={'Bars'}
                            color={'#FFA500'}/>
                        <input className={'Login-input'}
                               onChange={(event) => this.setState({username: event.target.value})}/>
                        <button
                            className={'Login-button'}
                            onClick={() => {
                                this.setState({username: this.state.username});
                                this.isValid(this.state.username)
                            }}>Search
                        </button>
                        {
                            (this.state.username).length > 0 ?
                                <div>
                                    {this.state.username}

                                </div>
                                :
                                ''
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default Login