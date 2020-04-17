import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import { createEpicMiddleware, combineEpics } from 'redux-observable';

import counterReducer from './counter/reducers';

const rootReducer = combineReducers({
    ctr : counterReducer
});

const middlewareLogger = (store) => {
    return (next) => {
        return (action) => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

//const rootEpic = combineEpics(
//    middlewareLogger
//);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    //const epicMiddleware = createEpicMiddleware();
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(middlewareLogger, thunk)));
    //epicMiddleware.run(rootEpic);
    return store;
}

const store = configureStore();
export default store;






