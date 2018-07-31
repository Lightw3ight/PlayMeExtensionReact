import { combineReducers } from 'redux';
import { serverStateReducer } from './ServerState/ServerStateReducer';
import { audioZoneReducer } from './AudioZone/AudioZoneReducer';

export const rootReducer = combineReducers({
    serverState: serverStateReducer,
    audioZone: audioZoneReducer
})