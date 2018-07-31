import { setAudioZoneSuccess } from './AudioZoneActions';

export const defaultServerState = {
    audioZoneUrl: null,
}

export function audioZoneReducer (state = defaultServerState, action) {
    switch (action.type) {
        case setAudioZoneSuccess.type:
            return {
                ...state,
                audioZoneUrl: action.data
            };
        default:
            return state;
    }
}