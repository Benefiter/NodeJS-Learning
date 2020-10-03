const EventEmitter = require('events');
const logger = require('./logger');

const emitter = new EventEmitter();


const handleMessageLoggedEvent = e => {
    logger(`Handled message logged event ${e}`);
}

// Register a listener
emitter.on('messageLogged', handleMessageLoggedEvent)


// Raise an event (register a listener to receive this event)
emitter.emit('messageLogged', "messageLogged event emit message");


const handleLoggingEvent = e => {
    logger(`Handled logging event ${e}`);
}

// Register a listener
emitter.on('logging', handleLoggingEvent)


// Raise an event (register a listener to receive this event)
emitter.emit('logging', "logging event emit message");


