import React from "react";
import {getPrestigeImage} from "../../Functions/Functions";
import Link from "react-router-dom/es/Link";
import './Top.css'
import Navigation from "../Navigation/Navigation";
import {getUserData} from "../../Functions/Http";

class Top extends React.Component {
    constructor(props) {
        super(props);
        console.log('from Top', props);
        this.state = {
            username: '',
            level: 0,
            prestige: 0

        }

    }

    prestigeImage = () => {
        return {
            backgroundImage: `url(${getPrestigeImage(this.state.prestige)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }

    };

    componentDidMount() {
        const {name} = this.props.match.params;
        getUserData(name).then(({data}) =>{
            const {username} = data;
            const {level, prestige} = data.mp;
            this.setState({
                username,
                level,
                prestige
            })
            }
        )

    }

    render() {
        return (
            <div className={'top'} style={this.prestigeImage()}>
                <div className={'info-section'}>
                    <div className={'left'}>
                        <div>
                            {this.state.username}
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'right-sub'}>Level: {this.state.level}</div>
                        <div className={'right-sub'}>Prestige: {this.state.prestige}</div>
                    </div>
                </div>
                <Navigation/>
            </div>
        );
    }
};
export default Top