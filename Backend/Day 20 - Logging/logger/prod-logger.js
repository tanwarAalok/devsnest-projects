const { createLogger, format, transports } = require("winston");
const { combine,timestamp, errors, stack, json } = format;

function prodLogger() {
    return createLogger({
      format: combine(timestamp(), errors({ stack: true }), json()),
      defaultMeta: { service: "user-service" },
      transports: [
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log", level: "error" })
      ],
    });
};

module.exports = prodLogger();