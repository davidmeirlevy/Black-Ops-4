import React from 'react'
import './Statistics.css'
import ProgressBar from 'react-progress-bar-battlenet-style';
import {Card, CardPie} from "../../components/Card/CardPie";
import {fixName, getPresentage, getPrestigeImage, getShortNum} from "../../Functions/Functions";
import {getUserData} from "../../Functions/Http";


class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            query: '',
            playerStats: {
                username: '',
                level: null,
                prestige: 0,
            },
            isLoading: true
        }
    }

    componentDidMount() {
        this.getData(this.props.name)
    }

    getData = (username) => {
        getUserData(username)
            .then(({data}) => {
                console.log(data);
                const username = data.username;
                const prestige = data.prestige;
                const level = data.mp.level;
                const multiplayerData = data.mp.lifetime.all;
                this.setState({
                    temp: multiplayerData,
                    playerStats: {
                        username: username,
                        level: level,
                        prestig: prestige,
                    }
                });
                this.setState({isLoading: false});
                this.setState({
                    temp: Object.keys(this.state.temp).map(x => Object.assign({
                        action: x,
                        result: this.state.temp[x],
                        show: true
                    }))
                });
            });
    };

    getTimePlayed = (time) => {
        const h = (time / 60) / 60;
        return (h).toString().slice(0, 4)
    };

    prestigeImage = () => {
        return {};
    };

    Top = () => {
        const prestigeImage = {
            backgroundImage: `url(${getPrestigeImage(this.state.playerStats.prestige)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        };
        return (
            <div className={'top'} style={prestigeImage}>
                <div className={'left'}>
                    <div>
                        {this.state.playerStats.username}
                    </div>
                </div>
                <div className={'right'}>
                    <div className={'right-sub'}>Level: {this.state.playerStats.level}
                        <ProgressBar
                            completed={getPresentage(this.state.playerStats.level, 55)}
                            colors={[30, 70, 95]}/>
                    </div>
                    <div className={'right-sub'}>Prestige: {this.state.playerStats.prestige}</div>
                </div>
            </div>)
    };

    Tags = () => {
        return ['Kill', 'Ekia','All'];
    };


    render() {
        const tags = this.Tags();
        const currentUserColor = {border: `solid thin ${this.props.color}`};
        const list = (this.state.temp !== null ? this.state.temp : []);
        return (
            <div className={'container'} style={currentUserColor}>
                {
                    <div>
                        {this.Top()}
                        <div >
                            <input onChange={(event) => {
                                this.setState({query: event.target.value.toString().replace(' ', '')})
                            }}/>
                            Tags:
                            {
                                tags.map((tag, index) =>
                                    <li className={'tag-list'} key={index} onClick={() => this.setState({query: tag.toLowerCase()})}>{tag}</li>
                                )
                            }

                            <div className={'card-wrapper'}>
                                {list.length > 0
                                    ?
                                    list.map((x, index) => {
                                        return x.action.toLowerCase().includes(this.state.query) ?
                                            <div key={index}>
                                                <Card name={x.action} data={x.result}/>
                                            </div>
                                            :
                                            <div key={index} hidden={true}/>


                                    })
                                    :
                                    <div/>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Statistics;