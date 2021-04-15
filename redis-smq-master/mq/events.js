'use strict';

module.exports = {
    BOOTSTRAP_REDIS_CLIENT: 'bootstrap.redis_client',
    BOOTSTRAP_SYSTEM_QUEUES: 'bootstrap.system_queues',
    BOOTSTRAP_SUCCESS: 'bootstrap.success',
    GOING_UP: 'going_up',
    UP: 'up',
    GOING_DOWN: 'going_down',
    DOWN: 'down',
    ERROR: 'error',
    IDLE: 'idle',
    HEARTBEAT_UP: 'heartbeat.up',
    HEARTBEAT_DOWN: 'heartbeat.down',
    GC_UP: 'gc.up',
    GC_DOWN: 'gc.down',
    GC_LOCK_ACQUIRED: 'gc.lock_acquired',
    GC_SM_QUEUE: 'gc.sm_queue',
    GC_SM_CONSUMER_OFFLINE: 'gc.sm_consumer_offline',
    GC_SM_MESSAGE: 'gc.sm_message',
    GC_SM_MESSAGE_COLLECTED: 'gc.sm_message_collected',
    GC_SM_EMPTY_QUEUE: 'gc.sm_empty_queue',
    GC_SM_QUEUE_DESTROYED: 'gc.sm_queue_destroyed',
    GC_SM_NEXT_QUEUE: 'gc.sm_next_queue',
    GC_SM_NEXT_TICK: 'gc.sm_next_tick',
    GC_SM_TICK: 'gc.sm_tick',
    GC_MESSAGE_REQUEUED: 'gc.message_requeued',
    GC_MESSAGE_DELAYED: 'gc.message_delayed',
    GC_MESSAGE_DLQ: 'gc.message_dlq',
    GC_MESSAGE_DESTROYED: 'gc.message_destroyed',
    SCHEDULER_UP: 'scheduler.up',
    SCHEDULER_DOWN: 'scheduler.down',
    STATS_UP: 'stats.up',
    STATS_DOWN: 'stats.down',
    MESSAGE_PRODUCED: 'message.produced',
    MESSAGE_NEXT: 'message.next',
    MESSAGE_RECEIVED: 'message.received',
    MESSAGE_ACKNOWLEDGED: 'message.acknowledged',
    MESSAGE_UNACKNOWLEDGED: 'message.unacknowledged',
    MESSAGE_CONSUME_TIMEOUT: 'message.consume_timeout',
    MESSAGE_EXPIRED: 'message.expired'
};