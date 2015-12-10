import { ACTIONS, characterTable } from '../constants'


let initialState = [];
for (let i in characterTable) {
    for (let j in characterTable[i]) {
        const cid = `${i}_${j}`;
        initialState.push({
            cid: cid,
            showing: characterTable[i][j],
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
