import React from 'react';


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

    }

    handleSearch = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        const { text } = this.state;
        console.log('text',text);
        // const {search,searchbut} = this.props;
        const { searchbut } = this.props;
        // console.log('search',search);
        return (
            <div className="tc">
                <input type="search"
                    placeholder="Search My Robots..."
                    className="pa3 ba b--green bg-lightest-blue"
                    // onChange={search}
                    onChange={this.handleSearch}

                />
                <button className="pa3 ba" onClick={() => searchbut(text)} > Search</button>
            </div>)
    }
}

// const SearchBox = ({search,searchbut}) => {
//     // const {search} = props;
//     // console.log('search',search);
// return (
// <div className="tc">
// <input type="search" 
// placeholder="Search My Robots..."
// className="pa3 ba b--green bg-lightest-blue"
// onChange={search}
// />
// <button className="pa3 ba" onClick={searchbut} > Search</button>
// </div>)
// }


export default SearchBox;
