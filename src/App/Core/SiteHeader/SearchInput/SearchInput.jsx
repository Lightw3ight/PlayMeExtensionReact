import React, { Component } from 'react';
import './SearchInput.css';
import { withRouter } from 'react-router'

class SearchInput extends Component {
    constructor (props) {
        super(props);

        this.state = { searchString: '' }
        this.handleChange = this.handleChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    handleChange (event) {
        this.setState({searchString: event.target.value});
    }

    onKeyPress (args) {
        if (args.key === 'Enter' && this.state.searchString.length > 0){
            this.props.history.push(`/search/${escape(this.state.searchString)}`);
        }
    }

    render () {
        return (
            <div>
                <input
                    className="search-input__input"
                    type="text"
                    placeholder="Search..."
                    value={this.state.searchString}
                    onKeyPress={this.onKeyPress}
                    onChange={this.handleChange} />
            </div>
        );
    }
}

export default withRouter(SearchInput);