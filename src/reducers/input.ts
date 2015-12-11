import { ACTIONS, CHARACTER_TABLE, BACK_COMMAND } from '../constants'

export interface State {
    text: string;
    step: number[];
    error: string;
}


let initialState: State = {
    text: "",
    step: [null, null],
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
    let text, step, error;
    error = "";
    if(state.step[0]) {
        const index1 = state.step[0] - 1;
        const index2 = command - 1;
        if (command === BACK_COMMAND) {
            text = state.text;
            step = [null];
        }
        else if (CHARACTER_TABLE[index1][index2]) {
            text = state.text + CHARACTER_TABLE[index1][index2];
            step = [null];
        } else {
            text = state.text;
            step = [...state.step];
            error = `Row ${command}: Not Found.`;
        }
    } else {
        const index1 = command - 1;
        if (CHARACTER_TABLE[index1]) {
            text = state.text;
            step = [command];
        } else {
            text = state.text;
            step = [null];
            error = `Column ${command}: Not Found.`;
        }
    }
    return { text, step, error};
}
