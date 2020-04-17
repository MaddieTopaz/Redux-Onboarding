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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddValue: (value) => dispatch(actionCreators.add(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);