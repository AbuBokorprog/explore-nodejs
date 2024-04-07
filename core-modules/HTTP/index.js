const http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.write("Hello World!");
      res.end();
    } else if (req.url === "/about") {
      res.write("This is about us page!");
      res.end();
    } else {
      res.write("not found!");
      res.end();
    }
  })
  .listen(8080);
