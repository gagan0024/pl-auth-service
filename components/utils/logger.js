
const structuredLog = require('structured-log');

const log = structuredLog.configure()
                .minLevel.information()
                .writeTo(new structuredLog.ConsoleSink())
                .create();

function logger(){
    return log;
}
  
module.exports = logger;

