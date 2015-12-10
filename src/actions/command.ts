import { ACTIONS } from '../constants'

export function receiveCommand() {
    return {
        type: ACTIONS.RECIEVE_COMMAND,
        command: command
    }
};
