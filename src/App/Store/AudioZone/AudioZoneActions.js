import { ServerStateService } from '../../Api/ServerStateService';
import { createAction } from '../CreateAction';

export const updateAudioZone = createAction('SET_AUDIO_ZONE_SUCCESS');

export function setAudioZone (zoneUrl) {
    return (dispatch, getState) => {
        dispatch(updateAudioZone(zoneUrl));
        return ServerStateService.current.openConnection(zoneUrl)
    }
}
