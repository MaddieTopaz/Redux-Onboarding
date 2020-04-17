import React from 'react';
import CounterControl from '../counter/CounterControl';
import CounterOutput from '../counter/CounterOutput';
import * as actionCreators from '../counter/index';
import { useSelector, useDispatch } from 'react-redux';

const functionalCounter = (props) => {
    const counter = useSelector(state => state.ctr.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" clicked={() => dispatch(actionCreators.increment())}/>
            <CounterControl label="Decrement" clicked={() => dispatch(actionCreators.decrement())}/>
            <CounterControl label="Add 5" clicked={() => dispatch(actionCreators.add(5))}/>
    </div>
    );
};

export default functionalCounter;