import { ACTIONS } from '../constants'

const characterTable = [
["あ","い","う","え","お"],
["か","き","く","け","こ"],
["さ","し","す","せ","そ"],
["た","ち","つ","て","と"],
["な","に","ぬ","ね","の"],
["は","ひ","ふ","へ","ほ"],
["ま","み","む","め","も"],
["や","　","ゆ","　","よ"],
["ら","り","る","れ","ろ"],
["わ","を","ん","　","　"],
];

let initialState = [];
for (let i in characterTable) {
    for (let j in characterTable[i]) {
        const cid = `${i}_${j}`;
        initialState.push({
            cid: cid,
            showing: characterTable[i][j],
            enabled: true,
            columns: i,
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
