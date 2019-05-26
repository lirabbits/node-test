var message = require('./message');
var { echo, area } = require('./methods');
var Lamborgini = require('./lamborgini');
var config = require('./config');

console.log({
    message,
    echo: echo('aaa'),
    area: area(10, 20)
});

var car = new Lamborgini('lamborgini');

car.echo();
car.drive();

console.log(JSON.stringify(config));
