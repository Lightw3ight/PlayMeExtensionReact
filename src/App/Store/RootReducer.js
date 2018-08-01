import { combineReducers } from 'redux';
import { serverStateReducer } from './ServerState/ServerStateReducer';
import { audioZoneReducer } from './AudioZone/AudioZoneReducer';
import { siteStateReducer } from './SiteState/SiteStateReducer';
import { searchReducer } from './Search/SearchReducer';

export const rootReducer = combineReducers({
    serverState: serverStateReducer,
    audioZone: audioZoneReducer,
    siteState: siteStateReducer,
    search: searchReducer
})