const log = require('./logger');
const os = require('os');

log(` totalmem = ${os.totalmem()}`);
log(` freemem = ${os.freemem()}`);

