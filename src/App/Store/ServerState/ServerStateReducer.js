import * as ServerStateActions from './ServerStateActions';

export const defaultServerState = {
    audioZone: null,
    connecting: false,
    connected: false,
    nowPlaying: {
        title: 'Server not connected',
    }
}

export function serverStateReducer (state = defaultServerState, action) {
    switch (action.type) {
        case ServerStateActions.nowPlayingChanged.type:
            return {
                ...state,
                nowPlaying: {...action.data}
            };
        default:
            return state;
    }
}