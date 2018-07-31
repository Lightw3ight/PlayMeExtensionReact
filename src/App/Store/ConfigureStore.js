import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './RootReducer';
import thunk from 'redux-thunk';

export function configureStore (initialState) {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}