import React from 'react'
import './Main.css'


class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log('main created',props)
    }

    //
    // componentDidUpdate(prevProps) {
    //     if (this.props.data !== prevProps.data) {
    //         this.fetchData(this.props.userID);
    //     }
    // }


    render() {
        return (
            <div>
                <div className={'Main-header'}>
                    <div className={'Main-username'}>{this.props.data.username}</div>
                    <div className={'Main-player-stats'}>
                        <div className={'Main-header-box1'}>Level {this.props.data.mp.level}/50</div>
                        <div className={'Main-header-box2'}>Prestige {this.props.data.mp.prestige}/10</div>
                    </div>
                </div>
                <div className={'Main'}>
                    <div className={'Main-box'}>
                    </div>
                    <div className={'Main-box'}>Total Kill</div>
                </div>
            </div>
        );
    }

}

export default Main