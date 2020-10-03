const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log = message => {
        // Send an HTTP request
        console.log(message);

        // Raise an event (register a listener to receive this event)
        this.emit('messageLogged', "messageLogged event emit message");
    }
}

module.exports = Logger;