import React from 'react'

export class Pageing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: null
        }
    }




    componentDidMount() {
        this.setState({
            pages: [
                {page: 'a', isShow: true},
                {page: 'b', isShow: false},
                {page: 'c', isShow: false},
                {page: 'd', isShow: false},
            ]
        })
    }

    changePage = (data) => {
        const currentClickedPage = this.state.pages.filter(x => x.page === data.page).isShow=true;
        console.log(currentClickedPage);
        this.setState({
            ...currentClickedPage
        })
    };


    render() {
        const pages = this.state.pages ? this.state.pages : [];
        console.log(this.state.pages);
        return (
            <div>
                {pages.map(x =>
                    <div style={(x.isShow? this.inPage() : this.outPage())}
                         onClick={() => this.changePage(x)}>{x.page}</div>)}
            </div>
        );
    }


}

export default Pageing