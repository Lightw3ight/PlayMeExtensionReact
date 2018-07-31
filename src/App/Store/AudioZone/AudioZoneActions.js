import { ServerStateService } from '../../Api/ServerStateService';
import { createAction } from '../CreateAction';

export const setAudioZoneSuccess = createAction('SET_AUDIO_ZONE_SUCCESS');

export function setAudioZone (zoneUrl) {
    return (dispatch, getState) => {
        // let svc = serverStateService ? serverStateService : new ServerStateService();
        //svc.initializeHub();

        return ServerStateService.current.openConnection(zoneUrl)
            .then(() => {
                dispatch(setAudioZoneSuccess(zoneUrl));
            });
    }
}
