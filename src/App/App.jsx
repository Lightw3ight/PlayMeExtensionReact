import NowPlayingPage from './NowPlaying/NowPlayingPage'
import { Search } from './Search/Search'
import React, { Component } from 'react';
import { SiteHeader } from './Core/SiteHeader/SiteHeader';
import './App.css';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <SiteHeader />
                    {/* <ul>
                        <li><Link to="/search">Search</Link></li>
                    </ul> */}
                    <main
                        className="app-container__content container">
                        <Route exact path="/" component={NowPlayingPage} />
                        <Route exact path="/search/:query" component={Search} />
                    </main>
                </div>
            </Router>
        );
    }
}
