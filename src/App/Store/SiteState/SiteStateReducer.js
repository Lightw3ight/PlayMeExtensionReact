import * as SiteStateActions from './SiteStateActions';

export const defaultServerState = {
    menuOpen: false,
}

export function siteStateReducer (state = defaultServerState, action) {
    switch (action.type) {
        case SiteStateActions.toggleSiteMenu.type:
            return {
                ...state,
                menuOpen: action.data
            };
        default:
            return state;
    }
}