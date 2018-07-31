import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './TrackSummary.css';

export function TrackSummary(props) {
    const { track } = props;

    return (
            <div className="row">
                <div
                    className="col-3">
                    <img
                        src={track.Album.ArtworkUrlLarge || '/assets/images/pixel.gif'}
                        className="img-fluid" />
                </div>

                <div
                    className="col-9">
                    <h1
                        className="track-summary__title">
                        <a
                            href={track.ExternalLink}
                            target="_blank"
                            title={track.Name}>
                            {track.Name}
                        </a>
                    </h1>

                    <ul
                        className="comma-separated track-summary__artists">

                        {track.Artists.map(artist => (
                            <li key={artist.Link}>
                                <a
                                    href="#">
                                    {artist.Name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#"
                        className="track-summary__album">
                        { track.Album.Name }
                    </a>
                </div>
            </div>
    )
}

TrackSummary.propTypes = {
    track: PropTypes.object.isRequired
}