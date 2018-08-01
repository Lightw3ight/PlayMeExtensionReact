import React, { Component } from 'react';
import './MenuButton.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SiteStateActions from '../../Store/SiteState/SiteStateActions';

class MenuButton extends Component {
    close = () => {
        this.props.actions.toggleSiteMenu(!this.props.open);
    }

    render () {
        return (
            <button
                onClick={this.close}
                type="button"
                className="menu-button">
                <div></div>
                <div></div>
                <div></div>
            </button>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);