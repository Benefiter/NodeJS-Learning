const log = require('./logger');
const fs = require('fs');

const listfiles = (err, result) => {
if (err ) log( `Error: ${err}`);
else log(`Result: ${result}`);
}

fs.readdir('./', listfiles);

