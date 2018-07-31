import { createAction } from '../CreateAction';

export function connectServerSocketSuccess () {
    return { type: 'CONNECT_SERVER_SOCKET_SUCCESS'};
}

export const nowPlayingChanged = createAction('NOW_PLAYING_CHANGED');
export const playingSoonChanged = createAction('PLAYING_SOON_CHANGED');
export const recentlyPlayedChanged = createAction('RECENTLY_PLAYED_CHANGED');
// export const setAudioZone = createAction('SET_AUDIO_ZONE');

// export function nowPlayingChanged (data) {
//     return { type: nowPlayingChanged.type, data }    
// }
// nowPlayingChanged.type = 'NOW_PLAYING_CHANGED';

export function setAudioZone () {
    return (dispatch, getState) => {
        // let svc = serverStateService ? serverStateService : new ServerStateService();
        //svc.initializeHub();

        window.setTimeout(() => {
            dispatch(connectServerSocketSuccess());
        }, 1000);
    }
}

export function connectServerSocket () {
    return (dispatch, getState) => {
        // let svc = serverStateService ? serverStateService : new ServerStateService();
        //svc.initializeHub();

        window.setTimeout(() => {
            dispatch(connectServerSocketSuccess());
        }, 1000);
    }
}
