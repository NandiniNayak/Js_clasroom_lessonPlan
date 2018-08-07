var http = require('http');

http.createServer((req, res) => {
  res.end("hello world");
}).listen(3000);

console.log(`server started running on localhost:3000 ${process.env.USER}`);
