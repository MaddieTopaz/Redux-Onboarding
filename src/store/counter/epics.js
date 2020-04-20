import 'rxjs/add/observable/of';
import { filter, map } from 'rxjs/operators'
import * as actionTypes from './types';
import { ofType } from 'redux-observable';
import * as actionCreators from './actions';


export const incrementIfOddEpic = (action$, state$) => { 
    console.log("increment epic");
    console.log(state$);
    console.log(state$.value);
    //console.log(state$.value.ctr.counter);
    return action$.pipe(
    ofType(actionTypes.INCREMENT_IF_ODD),
    filter(() => state$.value.ctr.counter % 2 === 1),
    map(() => actionCreators.increment())
);
}