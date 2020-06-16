import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel  extends Component {
    
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState( { term } );
        this.props.onSearchChange(term);
    };

    render(){
        const searchText = 'Type here to search';
        const searchStyle = {
            fontSize: '20px'
        };
        return <input
            style={searchStyle}
            placeholder={searchText}
            value={this.state.term}
            onChange={this.onSearchChange}
        />;
    };
};


// component function

// const SearchPanel = () => {
//     const searchText = 'Type here to search';
//     const searchStyle = {
//         fontSize: '20px'
//     };
//     return <input
//         style={searchStyle}
//         placeholder={searchText}
//     />;
// };

// export default SearchPanel;