import React from 'react'
import './Statistics.css'
import WeeklyGraphs from "../WeeklyGraphs/WeeklyGraphs";
import LifeTime from "../Multiplayer/LifeTime";

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            allData: null,
            playerStats: {
                username: '',
                level: 0,
                prestige: 0,
            },
            page: '',
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
                const {data} = this.props.location.state;
                const {username} = data;
                const {level, prestige} = data.mp;
                this.setState({
                    playerStats: {
                        username: username,
                        level: level,
                        prestige: prestige,
                    },
                    page: 'Team Deathmatch',
                });

    };



    pagesLabels = () => {
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
            <div className={'page-labels'}>
                <div style={this.state.page.match('Team Deathmatch') ? inPage : outPage}
                     onClick={() => this.setState({page: 'Team Deathmatch'})}>Life time
                </div>
                <div style={!this.state.page.match('Team Deathmatch') ? inPage : outPage}
                     onClick={() => this.setState({page: 'BlackOut'})}>Weekly
                </div>
            </div>)
    };


    render() {
        return (
            <div className={'container'}>

            </div>
        );
    }
}

export default Statistics;

