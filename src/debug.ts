require("babel-polyfill");

import * as dgram from 'dgram';
import * as readline from 'readline';

const socket = dgram.createSocket("udp4");
const host = {
    address: "0.0.0.0",
    port: 8000
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const prefix = '> ';

rl.on('line', function(line) {
    const message = line.trim();
    socket.send(message, 0, message.length, host.port, host.address);
    rl.setPrompt(prefix);
    rl.prompt();
})

console.log(prefix + 'send command with udp');
rl.setPrompt(prefix);
rl.prompt();
