import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { incrementIfOddEpic } from './counter/epics';
import counterReducer from './counter/reducers';
import * as actionCreators from './counter/actions';

const rootReducer = combineReducers({
    ctr : counterReducer
});

const rootEpic = combineEpics(
    incrementIfOddEpic
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const configureStore = () => {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
    epicMiddleware.run(rootEpic);
    return store;
}

const store = configureStore();






//store.dispatch(actionCreators.add(10));

//Triggered whenever state is updated
//store.subscribe(() => {
    //console.log(store.getState());
//})

export default store;






