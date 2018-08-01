import { createAction } from '../CreateAction';
import { SearchService } from '../../Api/SearchService';

export const runSearchSuccess = createAction('RUN_SEARCH_SUCCESS');
export const setSearchQuery = createAction('SET_SEARCH_QUERY');
export const clearSearchQuery = createAction('RESET_SEARCH_QUERY');

export function runSearch (query) {
    return (dispatch, getState) => {
        const service = new SearchService(getState().audioZone.audioZoneUrl);
        dispatch(setSearchQuery(query));

        return service.search(query).then(response => {
            dispatch(runSearchSuccess(response));
        });
    }
}
