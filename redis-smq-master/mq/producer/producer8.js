'use strict';

const config = require('../config');
const { Producer, Message } = require('redis-smq');
const messageText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const producer8 = new Producer('queue8', config);

function produceNTimes(payload, n, cb) {
    n -= 1;
    if (n > 0) {
        const message = new Message();
        message.setBody(payload);
        producer8.produceMessage(message, (err) => {
            if (err) cb(err);
            else setTimeout(() => {produceNTimes(payload, n, cb)}, 3);
        });
    } else cb();
}

produceNTimes({ message: messageText }, 1000000, (err) => {
    if (err) {
        console.log(`Erro: ${err}`);
        throw err;
    } else {
        console.log('Produced successfully!');
        producer8.shutdown();
    }
});
