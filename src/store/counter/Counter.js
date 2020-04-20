import React, { Component } from 'react';
import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import * as actionCreators from './index';
import { connect } from 'react-redux';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()} />  
                <CounterControl label="Add 5" clicked={() => this.props.onAddValue(5)} />                      
                <CounterControl label="Increment if odd" clicked={() => this.props.onIncrementIfOdd()} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter
    }
}

//Recieves the dispatch function,
//Calls dispatch on the store behind the scenes
const mapDispatchToProps = (dispatch) => {
    return {
        //Dispatch takes javascript object which must have type property 
        //With optional payload
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddValue: (value) => dispatch(actionCreators.add(value)),
        onIncrementIfOdd: () => dispatch(actionCreators.incrementIfOdd())
    }
}

//Does the work of subscribe so we never need to call it
//Causes component to automatically re-render so new state is reflected
export default connect(mapStateToProps, mapDispatchToProps)(Counter);