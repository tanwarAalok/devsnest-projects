let logger = null;

if (process.env.NODE_ENV === 'development') {
    logger = require('./dev-logger');
} else {
    logger = require("./prod-logger");
}


module.exports = logger;