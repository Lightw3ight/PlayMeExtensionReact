import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as AudioZoneActions from '../../../Store/AudioZone/AudioZoneActions';
import './AudioZoneChooser.css';

export const AUDIO_ZONES = [
    { name: 'Bullnose', path: 'http://music.trademe.local/bullnose' },
    { name: 'OML L3', path: 'http://music.trademe.local/oml/3' },
    { name: 'OML L4', path: 'http://music.trademe.local/oml/4' },
    { name: 'OML L5', path: 'http://music.trademe.local/oml/5' },
    { name: 'NZX L4', path: 'http://music.trademe.local/nzx/4' },
    { name: 'Auckland L1', path: 'http://music.trademe.local/sst/1' },
    { name: 'Auckland L2', path: 'http://music.trademe.local/sst/2' },
    { name: 'Christchurch', path: 'http://chc-music.trademe.local' }
];

class AudioZoneChooser extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.setAudioZone = this.setAudioZone.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    setAudioZone (zoneUrl) {
        this.props.actions.setAudioZone(zoneUrl);
    }

    render() {
        let { audioZoneUrl } = this.props;
        let zoneName = audioZoneUrl ? AUDIO_ZONES.find(zone => zone.path === audioZoneUrl).name : 'No Zone selected';

        return (
            <Dropdown
                size="sm"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}>
                <DropdownToggle
                    className="audio-zone-chooser__toggle-button"
                    tag="span">
                    {zoneName}
                </DropdownToggle>
                <DropdownMenu right>
                    {AUDIO_ZONES.map(zone => (
                        <DropdownItem
                            onClick={() => this.setAudioZone(zone.path)}
                            key={zone.path}>
                            {zone.name}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        audioZoneUrl: state.audioZone.audioZoneUrl
    };
};

const mapDispatchToProps = (dispatch) => ({
    // connectServerSocket: () => dispatch(connectServerSocket())
    actions: bindActionCreators(AudioZoneActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioZoneChooser);