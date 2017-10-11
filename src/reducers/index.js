import * as types from '../actions/ActionTypes';

const initialState = {
    foo: 0
}

function bar(state = initialState, action) {
    switch(action.type) {
        case types.FOO_BAR:
            return {
                foo: state.foo + 1
            };
        default:
            return state;
    }
}

export default bar;