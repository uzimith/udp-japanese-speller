import { ACTIONS } from '../constants'

export function receiveCommand(command: number, step: number[]) {
    return {
        type: ACTIONS.RECIEVE_COMMAND,
        command, step
    }
};
