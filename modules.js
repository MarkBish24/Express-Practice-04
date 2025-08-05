const { john, peter } = require("./names.js");
const sayHi = require("./utils.js");
const data = require("./alternative.js");
require("./mind-grenade.js");
console.log(data);
sayHi("susan");
sayHi(john);
sayHi(peter);
