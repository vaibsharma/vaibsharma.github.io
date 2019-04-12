import { START_APP } from '../Constants/actions';

export function initApp(currentState){
    return {
        ...currentState,
        type: START_APP,
        onUpdate: new Date()
    };
}

