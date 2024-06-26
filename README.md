# Node.js Explore

# Module System

নোডের প্রত্যেকটা ডট জেএস(.js) ফাইল একেকটা মোডিউল।

## export/module.exports & import/require

একের অধিক ফাইলের সাথে সংযোগ স্থাপণ করার জন্য বা একটা ফাইলের ভ্যালু অন্য একটা ফাইলে ব্যবহার করার জন্য export & import করতে হয়।

### export/module.exports & import/require দু'ভাবে করা যায়ঃ

- ESM
- commonjs

#### ESM(ES6 Modules):

মনে করি দুইটা ফাইল আছে যেমনঃ- file1 file2। আমরা চাই file1 এর ভ্যালু file2-এ ব্যবহার করতে চাই। তাহলে আমাদের প্রথমে file1 থেকে যেই ভ্যালু টা চাই সেইটা export করতে হবে। এবং file2-এ import করতে হবে।

<!-- file1 -->

```javascript
const a = 6;
exports.default = a;
```

<!-- file2 -->

```javascript
import a = "./file1"
```

#### commonjs:

মনে করি দুইটা ফাইল আছে যেমনঃ- file1 file2। আমরা চাই file1 এর ভ্যালু file2-এ ব্যবহার করতে চাই। তাহলে আমাদের প্রথমে file1 থেকে যেই ভ্যালু টা চাই সেইটা export করতে হবে। এবং file2-এ import করতে হবে।

##### module.exports

commonjs-এ export করার জন্য module.exports = (variable name) ব্যবহার করতে হবে। module.exports = {variable name1, variable name2, variable name3, variable name4} use for multiple data exports.

##### require()

commonjs-এ import করার জন্য const a = require("./file1") ব্যবহার করতে হবে। const {a,b,c} = require("./file1") use for multiple data imports.

<!-- file1 -->

```javascript
const a = 6;
module.exports = a;
module.exports = { a, b, c };
```

<!-- file2 -->

```javascript
const a = require("./file1");
const { a, b, c } = require("./file1");
```

# Core Modules

## Path Module

The Path module provides a way of working with directories and file paths.
The syntax for including the Path module in your application:

var path = require('path');

### Path Properties and Methods

- basename() Returns the last part of a path
- delimiter Returns the delimiter specified for the platform
- dirname() Returns the directories of a path
- extname() Returns the file extension of a path
- format() Formats a path object into a path string
- isAbsolute() Returns true if a path is an absolute path, otherwise false
- join() Joins the specified paths into one
- normalize() Normalizes the specified path
- parse() Formats a path string into a path object
  posix Returns an object containing POSIX specific properties and methods
- relative() Returns the relative path from one specified path to another specified path
- resolve() Resolves the specified paths into an absolute path
  sep Returns the segment separator specified for the platform
  win32 Returns an object containing Windows specific properties and methods

```javascript
const path = require("path");

const myPath = `D:/WEB DEVELOPMENT COURSE/node.js/core-modules/path/index`;

console.log(path.dirname(myPath));
```

## OS Module(Operative System Module)

The OS module provides information about the computer's operating system.

### OS Properties and Methods

Method Description:

- arch() Returns the operating system CPU architecture
  constants Returns an object containing the operating system's constants for process signals, error cotes etc.
- cpus() Returns an array containing information about the computer's CPUs
- endianness() Returns the endianness of the CPU
  EOL Returns the end-of-line marker for the current operating system
- freemem() Returns the number of free memory of the system
- hostname() Returns the hostname of the operating system
- loadavg() Returns an array containing the load averages, (1, 5, and 15 minutes)
- networkInterfaces() Returns the network interfaces that has a network address
- platform() Returns information about the operating system's platform
- release() Returns information about the operating system's release
- tmpdir() Returns the operating system's default directory for temporary files
- totalmem() Returns the number of total memory of the system
- type() Returns the name of the operating system
- uptime() Returns the uptime of the operating system, in seconds
- userInfo() Returns information about the current user

```javascript
const os = require("os");
console.log(os.homedir());
```

## FS Module(File System Module)

The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files

আপনারা খেয়াল করলে দেখতে পারবেন যে FS মেথডে একই মেথডের শেষে sync লেখা থাকে তার মানে হলো যখন sync ব্যবহার করবো এটা synchronous ভাবে কাজ করবে। তবে সব সময় চেষ্টা করবে asynchronous ভাবে কাজ করতে।

```javascript
const fs = require("fs");

fs.writeFileSync("myfile.txt", "hello programmers");
```

Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file.

## events Module

সবচেয়ে গুরুত্বপূর্ণ মোডিউল হলো ইভেন্ট মোডিউল।

Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

ইমিটার দিয়ে ইভেন্ট রেইস করতে পারি।

```javascript
var events = require("events");
var eventEmitter = new events.EventEmitter();
```

```javascript
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//Create an event handler:
const myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");
```

## Events Parameters

we can pass parameters to the event function

```javascript
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

// also we can pass multiple parameters, but good practice is pass parameters in object if you wan to pass multiple parameters.
```

## Extending Module

## HTTP Module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

```js
const http = require("http");
```

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

Use the createServer() method to create an HTTP server

```javascript
http
  .createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);
```

## Stream and Buffer

- Stream হচ্ছে এমন একটি প্রোসেস যে, প্রোসেসের মাধ্যমে ডাটা এক জায়গা থেকে অন্য একটি জায়গায় ডাটা প্রবাহিত হয়।
- Buffer হচ্ছে এই প্রোসেসের মাধ্যমে একটি পূর্ণ ডাটা কে কয়েকটি ভাগ করবে এবং একটি একটি ভাগকে একত্রে বাফার বলে।

```javascript
const fs = require("fs");

const readableStream = fs.createReadStream(__dirname + "/text.txt", "utf-8");

readableStream.on("data", (data) => {
  console.log(data);

  const writeableStream = fs.createWriteStream(__dirname + "/test.txt");

  writeableStream.write(data, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
});
// In This example we read and write
```
