"use strict"
const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.htm);
    utils.getFile("views/index.html", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);