import React from "react";
import {getPrestigeImage} from "../../Functions/Functions";
import Link from "react-router-dom/es/Link";
import './Top.css'

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
        const {data} = this.props.location.state;
        const {username} = data;
        const {level, prestige} = data.mp;
        this.setState({
            username,
            level,
            prestige
        })
    }

    render() {
        const outPage = {
            marginLeft: "1px",
            border: "#fc6621 solid thin",
            borderRadius: "10px 10px 0 0",
            borderBottom: "#fc6621 solid thin",
            color: '#553400',
            backgroundColor: '#1b1b1b',
            shdowBox: '10px 10px 10px white',
            padding: '10px'
        };
        const inPage = {
            backgroundColor: '#101010',
            padding: '10px',
            marginLeft: "1px",
            border: "#fc6621 solid thin",
            borderRadius: "10px 10px 0 0",
            borderBottom: "none",
        };
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

                <div className={'navigation'}>
                    <div style={this.props.match.params.section === 'weekly'? inPage : outPage }>
                        <Link to={'weekly'}>Weekly</Link>
                    </div>
                    <div style={this.props.match.params.section !== 'weekly'? inPage : outPage }>
                        <Link to={'lifetime'}>Life Time</Link>
                    </div>
                </div>
            </div>
        );
    }
};
export default Top