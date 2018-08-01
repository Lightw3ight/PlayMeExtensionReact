import { updateAudioZone } from './AudioZoneActions';

export const defaultServerState = {
    audioZoneUrl: null,
}

export function audioZoneReducer (state = defaultServerState, action) {
    switch (action.type) {
        case updateAudioZone.type:
            return {
                ...state,
                audioZoneUrl: action.data
            };
        default:
            return state;
    }
}