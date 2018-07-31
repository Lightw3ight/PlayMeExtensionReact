import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './App/Store/ConfigureStore';
import { Provider } from 'react-redux';
import { ServerStateService } from './App/Api/ServerStateService';
import { setAudioZone } from './App/Store/AudioZone/AudioZoneActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import { ServerStateProvider } from './App/providers/ServerStateProvider';

const store = configureStore();

ServerStateService.current.setDispatcher(store.dispatch, store.getState);
store.dispatch(setAudioZone('http://music.trademe.local/sst/2'));

ReactDOM.render(
    <Provider store={store}>
        {/* <ServerStateProvider serverState={serverState}> */}
            <App />
        {/* </ServerStateProvider> */}
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

