import React, { Component } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AudioZoneChooser from './AudioZoneChooser/AudioZoneChooser';
import SearchInput from './SearchInput/SearchInput';
import { MenuButton } from './MenuButton/MenuButton';

import './SiteHeader.css';

export class SiteHeader extends Component {
    render () {
        return (
            <div
                className="site-header">
                <div
                    className="site-header__search-container">
                    <div
                        className="size-header__menu-toggle">
                        <MenuButton />
                    </div>

                    <div
                        className="size-header__search-input">
                        <SearchInput />
                    </div>

                    <div
                        className="size-header__audio-zone">
                        <AudioZoneChooser />
                    </div>
                </div>
            </div>
        )
    }
}