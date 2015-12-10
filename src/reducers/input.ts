import { ACTIONS } from '../constants'

let initialState = {
    text: "",
    step: [null, null]
};

export default function input(state = "てすと", action) {
    switch (action.type) {
        case ACTIONS.RECIEVE_COMMAND:
            return handleCommand(state, command);
        default:
            return state;
    }
}
