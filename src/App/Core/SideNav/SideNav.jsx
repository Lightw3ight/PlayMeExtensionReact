import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SiteStateActions from '../../Store/SiteState/SiteStateActions';
import MenuButton from '../MenuButton/MenuButton';
import { SideNavItem } from './SideNavItem/SideNavItem'
import './SideNav.css';

export class SideNav extends Component {
    constructor (props) {
        super(props);
    }

    close = () => {
        this.props.actions.toggleSiteMenu(!this.props.open);
    }

    render () {
        let { open } = this.props;
        let classList = ['side-nav'];

        if (open) {
            classList.push('side-nav--open');
        }

        return (
            <div
                className={classList.join(' ')}>
                <header
                    className="side-nav__header">
                    <MenuButton />
                    <img
                        src="/assets/images/play-me.svg"
                        alt="Play Me" />
                </header>

                <div
                    className="side-nav__container">
                    <SideNavItem
                        onActivated={this.close}
                        label="Home"
                        icon="home"
                        url="/" />

                    <SideNavItem
                        onActivated={this.close}
                        label="Queue"
                        icon={['far', 'file-audio']}
                        url="#" />

                    <SideNavItem
                        onActivated={this.close}
                        label="History"
                        icon="history"
                        url="#" />

                    <SideNavItem
                        onActivated={this.close}
                        label="Your likes"
                        icon={['far', 'smile']}
                        url="#" />

                    <SideNavItem
                        onActivated={this.close}
                        label="Play Me Web"
                        icon="globe"
                        url="#" />

                    <SideNavItem
                        onActivated={this.close}
                        label="Github project"
                        icon={['fab', 'github']}
                        external={true}
                        url="https://github.com/Lightw3ight/PlayMeExtensionReact" />

                    <SideNavItem
                        onActivated={this.close}
                        label="Features / Bugs"
                        icon={['far', 'envelope']}
                        external={true}
                        url="mailto:kris@spaceage.co.nz" />
                </div>

                <div
                    onClick={this.close}
                    className="side-nav__shield">
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        open: state.siteState.menuOpen
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(SiteStateActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);