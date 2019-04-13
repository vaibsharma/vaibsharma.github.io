import { START_APP } from '../Constants/actions';

export function initApp(currentState){
    return (dispatch) => {
        dispatch({
            ...currentState,
            type: START_APP,
            onUpdate: new Date()
        });
    }
}