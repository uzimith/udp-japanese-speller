import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
    RECIEVE_COMMAND : null
});

export const CHARACTER_TABLE = [
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

export const BACK_COMMAND = 6;
