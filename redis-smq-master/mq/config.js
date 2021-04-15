'use strict';

module.exports = {
    namespace: 'nouvenn',
    redis: {
        driver: 'redis',
        options: {
            host: '127.0.0.1',
            port: 6379
        }
    },
    log: {
        enabled: false,
        options: {
            level: 'trace'
        }
    },
    monitor: {
        enabled: true,
        port: 3000,
        host: '127.0.0.1'
    }
};
