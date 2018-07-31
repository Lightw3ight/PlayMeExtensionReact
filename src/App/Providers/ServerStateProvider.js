import React, { Component, Children } from 'react';
import { PropTypes } from 'prop-types';

export class ServerStateProvider extends Component {
    static propTypes = {
        serverState: PropTypes.object.isRequired,
    }

    static childContextTypes = {
        serverState: PropTypes.object.isRequired,
    }

    getChildContext() {
        const { serverState } = this.props
        return { serverState }
    }

    render() {
        return Children.only(this.props.children)
    }
}

export const connectServerState = (ComponentToWrap) => {
    return class ServerStateComponent extends Component {
        static contextTypes = {
            serverState: PropTypes.object.isRequired,
        }

        render() {
            const { serverState } = this.context
            return (
                <ComponentToWrap {...this.props} serverState={serverState} />
            )
        }
    }
}
