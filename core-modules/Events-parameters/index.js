const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//Create an event handler:
const myEventHandler = function (second) {
  console.log(`I hear a scream ${second}`);
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream", "secondary");
