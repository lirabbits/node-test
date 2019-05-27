const Clock = require('./clock');
const clock = new Clock();

let i = 0;

clock.on('tick', () => {
    console.log(++i);
    if (i > 3) {
        clock.stop();
    }
});

clock.start();
