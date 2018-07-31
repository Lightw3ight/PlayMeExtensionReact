import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FixedBackground } from '../Shared/FixedBackground/FixedBackground';
import { TrackSummary } from './TrackSummary/TrackSummary';

import './NowPlaying.css';

class NowPlayingPage extends Component {
    constructor (props, context) {
        super(props)
    }
    componentDidMount () {
        // this.socketService.initializeHub('http://music.trademe.local/sst/2');
    }

    componentWillUnmount () {
        // this.socketService.closeHubConnection();
    }

    render () {
        let { nowPlaying } = this.props;

        if (!nowPlaying || !nowPlaying.Track) {
            return null;
        }

        return (
            <div>
                <FixedBackground
                    src={nowPlaying.Track.Album.ArtworkUrlLarge}
                    blurred={true} />
                <TrackSummary
                    track={nowPlaying.Track} />
            </div>
        )
    }
}

NowPlayingPage.propTypes = {
    nowPlaying: PropTypes.object.isRequired,
    connected: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
    nowPlaying: state.serverState.nowPlaying,
    connected: state.serverState.connected
};
};

// const mapDispatchToProps = (dispatch) => ({
//     // connectServerSocket: () => dispatch(connectServerSocket())
//     actions: bindActionCreators({ connectServerSocket }, dispatch)
// });

export default connect(mapStateToProps)(NowPlayingPage);