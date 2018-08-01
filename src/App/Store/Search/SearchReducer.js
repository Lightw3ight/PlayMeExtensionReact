import * as SearchActions from './SearchActions';

export const defaultState = {
    searchResults: null,
    searchQuery: null
}

export function searchReducer (state = defaultState, action) {
    switch (action.type) {
        case SearchActions.setSearchQuery.type:
            return {
                ...state,
                setSearchQuery: action.data
            };
        case SearchActions.runSearchSuccess.type:
            return {
                ...state,
                searchResults: action.data
            };
        case SearchActions.clearSearchQuery.type:
            return {
                ...state,
                searchResults: null,
                searchQuery: null
            }
        default:
            return state;
    }
}