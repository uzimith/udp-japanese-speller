import { ACTIONS, CHARACTER_TABLE } from '../constants';
import { Character } from '../declare';

let initialState : Character[];
initialState = [];
for (let i in CHARACTER_TABLE) {
    for (let j in CHARACTER_TABLE[i]) {
        const cid = `${i}_${j}`;
        initialState.push({
            cid: cid,
            showing: CHARACTER_TABLE[i][j],
            enabled: true,
            column: i,
            row: j
        });
    }
}

export default function table(state = initialState, action) : Character[] {
    switch (action.type) {
        case ACTIONS.RECIEVE_COMMAND:
            return handleRcieveCommand(state, action.command, action.step);
        default:
            return state;
    }
}

function handleRcieveCommand(state: Character[], command: number, step: number[]): Character[] {
    if(step.length === 1) {
        return state.map( char => Object.assign({}, char, {enabled: true}) );
    } else {
        return state.map( char => {
            if(char.column.toString() === (command - 1).toString()) {
                return Object.assign({}, char);
            } else {
                return Object.assign({}, char, {enabled: false});
            }
        });
    };
}
