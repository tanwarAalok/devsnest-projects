# Logging

## Five different types of Node.js Logging Libraries

### 1) Winston
It is most popular logging library. It enables universal logging with support for multiple <i>transports</i>
. With Winston, you can route your logs to other services like AWS CloudWatch, graylog2, logz.io, or even Sematext Logsene. We can even add the Express middleware to make logging with Express better with Winston.


### 2) Bunyan
It is used by Joyent in production. It advocates that logs should be in JSON format. Its features include
a CLI for pretty-printing, serializers, and support for multiple runtimes in addition to Node.js, like 
Webpack and Browserify.

### 3) Pino
It attributes asynchronous logging to its fast performance. Pino claims to be over five times faster 
than alternatives in many cases in its benchmarks.
Other features include child loggers and support for multiple web frameworks. It has multiple core and community modules that help to form a thriving ecosystem. With Pino, you can send the logs to many services by using proper transports like MySQL, Datadog, AWS cloud watch, or log flare.

### 4) Loglevel
Loglevel defines itself as a “minimal lightweight simple logging for JavaScript.” It also claims to replace console.log, thus eliminating console.log’s downsides.

### 5) Npmlog
It supports custom levels and colored output.There is nothing fancy about this Node.js logging library, and the last version was published four years ago

<hr/>

#### For more details: https://betterprogramming.pub/node-js-logging-libraries-5789c379640b
