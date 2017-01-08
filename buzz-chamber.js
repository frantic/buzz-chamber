var http = require('http');
var WebSocketServer = require('ws').Server;
var express = require('express');

function start(path, port, callback) {
  var server = http.createServer();
  var wss = new WebSocketServer({ server: server });
  var app = express();

  app.use(express.static(path));

  wss.on('connection', function(ws) {
    ws.on('message', function(message) {
      wss.clients.forEach(function(client) {
        if (client !== ws) client.send(message);
      });
    });
  });

  server.on('request', app);
  server.listen(port, callback);
}

module.exports = {start: start};
