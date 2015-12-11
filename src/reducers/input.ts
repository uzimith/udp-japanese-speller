import { ACTIONS, CHARACTER_TABLE, BACK_COMMAND } from '../constants'

export interface State {
    text: string;
    step: number[];
    error: string;
}

let initialState: State = {
    text: "",
    step: [],
    error: ""
};

export default function input(state = initialState, action): State {
    switch (action.type) {
        case ACTIONS.RECIEVE_COMMAND:
            return handleRcieveCommand(state, action.command);
        default:
            return state;
    }
}

function handleRcieveCommand(state: State, command: number): State {
    if(state.step.length === 0) {
        const index1 = command - 1;
        if (CHARACTER_TABLE[index1]) {
            return Object.assign({}, state, {step: [command]});
        } else {
            return Object.assign({}, state, {error: `Column ${command}: Not Found.`});
        }
    }
    if(state.step.length === 1) {
        const index1 = state.step[0] - 1;
        const index2 = command - 1;
        if (command === BACK_COMMAND) {
            return Object.assign({}, state, {step: []});
        } else if (CHARACTER_TABLE[index1][index2]) {
            const text = state.text + CHARACTER_TABLE[index1][index2];
            const step = [];
            return Object.assign({}, state, {text, step});
        } else {
            return Object.assign({}, state, {error: `Row ${command}: Not Found.`});
        }
    }
}
