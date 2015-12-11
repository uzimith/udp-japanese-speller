import { ACTIONS, CHARACTER_TABLE } from '../constants'


let initialState = [];
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

export default function table(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
