const EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor() {
        super();
        this.interval = 2000;
        this.timer = null;
    }
    start() {
        if (this.timer) {
            stop();
        }
        this.timer = setInterval(() => {
            this.emit('tick');
        }, this.interval);
    }
    stop() {
        if (!this.timer) {
            return;
        }
        clearInterval(this.timer);
        this.timer = null;
    }
}

module.exports = Clock;
