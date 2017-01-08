#!/usr/bin/env node

var buzzChamber = require('./buzz-chamber.js');
var yargs = require('yargs');
var path = require('path')

var args = yargs
  .usage('$0 [path] [--port port]')
  .example('$0 public --port 1337', 'Serve the content of public/ folder on port 1337')
  .describe('port', 'Port to listen on')
  .nargs('port', 1)
  .default('port', 8033)
  .alias('p', 'port')
  .alias('h', 'help')
  .help()
  .argv;

var path = args._.length > 0 ? path.resolve(args._[0])  : process.cwd();
var port = args.port;

buzzChamber.start(path, port, function() {
  console.log('Serving ' + path + ' at http://localhost:' + port + '/');
});
