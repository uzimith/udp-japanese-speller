import { ACTIONS } from '../constants'

export function receiveCommand(command) {
    return {
        type: ACTIONS.RECIEVE_COMMAND,
        command
    }
};
