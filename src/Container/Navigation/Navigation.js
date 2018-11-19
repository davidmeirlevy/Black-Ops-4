import React from 'react'
import './Navigation.css'
import Link from "react-router-dom/es/Link";
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            pages:[
                {name:'', isClicked:false}
            ]
        }
    }

    componentDidMount(){
        this.setState({
            pages:[
                {name:'LifeTime',isClicked: true},
                {name:'Weekly',isClicked: false},
                {name:'TeamMates',isClicked: false},
            ]
        })
    }

    changePage= (page) =>{
      const pagesList = this.state.pages;
      pagesList.forEach((x=>x.isClicked = false));
      const index = pagesList.indexOf(page);
      pagesList[index].isClicked = true;
        this.setState({
            pages:pagesList
        },()=>console.log(this.state))



    };


    render() {
        const outPage = {
            marginLeft: "1px",
            border: "#fc6621 solid thin",
            borderRadius: "10px 10px 0 0",
            borderBottom: "#fc6621 solid thin",
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
        const {pages} = this.state;
        return (
            <div className={'navigation'}>
                {pages.map((page,index) =>{
                    return (<div key={index}>
                        <div style={page.isClicked? inPage : outPage} onClick={()=>this.changePage(page)}>
                            <Link style={{color:'#fc6621',textDecorationLine:'none'}} to={page.name.toLowerCase()}>{page.name}</Link>
                        </div>
                    </div>)
                })}


                {this.props.children}
            </div>
        );
    }


}

export default Navigation