'use strict';

const config = require('../config');
const events = require('../events');
const { Consumer } = require('redis-smq');

class Consumer1 extends Consumer {
    /**
     *
     * @param message
     * @param cb
     */
    consume(message, cb) {
        try {
            var messageReceived = JSON.stringify(message);
            const size = new TextEncoder().encode(messageReceived).length;
            console.log(`Got message to consume! Message size: ${size} bytes`);
            cb();
        } catch (e) {
            cb(new Error('TEST!'));
        }
    }
}

Consumer1.queueName = 'queue1';

const consumer = new Consumer1(config);

consumer.on(events.UP, () => {
    console.log('UP');
});

consumer.on(events.DOWN, () => {
    console.log('DOWN');
});

consumer.on(events.GOING_UP, () => {
    console.log('GOING UP');
});

consumer.on(events.GOING_DOWN, () => {
    console.log('GOING DOWN');
});

console.log('start');
consumer.run();
