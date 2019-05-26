var a = require('../module-a');

module.exports = function() {
    a();
    console.log('call module-b');
};
