import React from 'react'
import {normalizeNumber} from "../../Functions/Functions";
import {Card} from "../../components/Card/Card";
import {Graph} from "../Graph/Graph";
import {Loading} from "../../components/Loading/Loading";
import './LifeTime.css'
import '../../App.css'
import {cardsData, pieData} from "./Data";
import {getUserData} from "../../Functions/Http";

class LifeTime extends React.Component {
    constructor(props) {
        super(props);
        console.log('from life time',props);
        this.state = {
            allData: null,
        }
    };

    componentDidMount() {
        this.getData(this.props.match.params.name);
    }

    getData = () => {
        const username = this.props.match.params.name;
        getUserData(username,'profile')
            .then(({data})=>{
                this.setState({
                    allData: Object.keys(data.mp.lifetime.all)
                        .map(x => Object.assign({action: x, result: data.mp.lifetime.all[x]})),
                });
            })

    };

    pieFactory = (divider, divided) => {
        const {allData} = this.state;
        const obj1 = this.hardFilter(allData, divider);
        const obj2 = this.hardFilter(allData, divided);
        return (<div className={'middel'}>
            <div className={'card-wrapper'}>
                <Card name={`${obj1.action.toUpperCase()}/${obj2.action.toUpperCase()}`}
                      text={`Ratio ${normalizeNumber((obj1.result / obj2.result) * 100)}%`}>
                    <Graph name={'test'} data={obj1} dates={obj2} type={'pie'} size={500}/>
                </Card>
            </div>
        </div>)
    };

    cardFactory = (cardName) => {
        const {allData} = this.state;
        const filterResult = this.hardFilter(allData, cardName);
        return (<Card
            name={filterResult.action}>{((filterResult.result % 1) !== 0 ? normalizeNumber(filterResult.result) : filterResult.result)}</Card>)
    };

    hardFilter = (list, word) => {
        return list.filter(x => x.action.split(' ').join('') === word)[0]
    };

    render() {
        const list = (this.state.allData !== null ? this.state.allData : []);
        const cardFactoryList = cardsData();
        const pieFactorList = pieData();
        return (
            <div className={'container'}>
                {
                    list.length > 0 ?
                        <div className={'cards-wrapper'}>
                            {
                                pieFactorList.map((x, index) => {
                                    return (<div key={index}>{this.pieFactory(x.obj1, x.obj2)}</div>)
                                })
                            }
                            {
                                cardFactoryList.map((x, index) => {
                                    return (<div key={index}>{this.cardFactory(x)}</div>)
                                })
                            }
                        </div>
                        :
                        <Loading/>
                }
            </div>
        );
    }


}

export default LifeTime