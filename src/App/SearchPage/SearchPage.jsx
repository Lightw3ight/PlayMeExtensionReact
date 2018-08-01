import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../Store/Search/SearchActions';
import './SearchPage.css';

class SearchPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentQuery: props.searchQuery,
            loading: true,
        };

        this.props.actions.runSearch(props.searchQuery)
            .then(() => this.onResultsLoaded());
    }

    componentWillReceiveProps () {
        if (this.state.currentQuery !== this.props.searchQuery) {
            this.setState({ currentQuery: this.props.searchQuery, loading: true });
            this.props.actions.runSearch(this.props.searchQuery)
                .then(() => this.onResultsLoaded());
        }
    }

    onResultsLoaded () {
        this.setState({ loading: false });
    }

    componentWillUnmount () {
        
    }

    render () {
        let { searchQuery, results } = this.props;
        let { loading } = this.state;

        return (
            <div>
                Search results for {searchQuery}<br />

                {loading &&
                    <div>LOADING</div>
                }

                {results && results.PagedArtists &&
                    <div>
                        {results.PagedArtists.Artists.map(artist => (
                            <div key={artist.Link}>{artist.Name}</div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchQuery: ownProps.match.params.query,
        results: state.search.searchResults
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(SearchActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));