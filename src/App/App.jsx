import NowPlayingPage from './NowPlayingPage/NowPlayingPage'
import SearchPage from './SearchPage/SearchPage'
import React, { Component } from 'react';
import { SiteHeader } from './Core/SiteHeader/SiteHeader';
import SideNav from './Core/SideNav/SideNav';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faEnvelope, faFileAudio } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'


library.add(faHome, faHistory, faSmile, faEnvelope, faGithub, faGlobe, faFileAudio);

export class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <SiteHeader />
                    {/* <ul>
                        <li><Link to="/search">Search</Link></li>
                    </ul> */}

                    <SideNav />

                    <main
                        className="app-container__content container">
                        <Route exact path="/" component={NowPlayingPage} />
                        <Route exact path="/search/:query" component={SearchPage} />
                    </main>
                </div>
            </Router>
        );
    }
}
