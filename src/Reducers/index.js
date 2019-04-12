import { combineReducers } from 'redux';

import { START_APP } from "../Constants/actions";

const initialState = {
    onStart: new Date(),
    onUpdate: new Date()
};

function startApp(state = initialState, action) {
    switch (action.type) {
        case START_APP:
            return Object.assign({}, initialState, {
                onUpdate: action.onUpdate
            });
        default:
            return state
    }
}

const rootReducer = combineReducers({
    startApp
});

export default rootReducer;