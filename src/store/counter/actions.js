import * as actionTypes from './types';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};

export const storeResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const incrementIfOdd = () => {
    return {
        type: actionTypes.INCREMENT_IF_ODD
    };
}