# buzz-chamber

`buzz-chamber` is a tool for prototyping static-HTML-based apps and games that can communicate with each other over websockets.

## [Demo](https://buzz-chamber-demo.herokuapp.com/)

See source code for the demo page in the `example` folder.

## Usage

Assuming you have your html files in the current folder

```
$ npm install -g buzz-chamber
$ buzz-chamber
```

will start a simple http server and websocket relay. For more options, check out:

```
$ buzz-chamber --help
```

## Development

Nodejs + npm. [`yarn`](https://yarnpkg.com/) recommended but not required.

```
$ git clone https://github.com/frantic/buzz-chamber.git
$ cd buzz-chamber
$ npm install # or yarn
$ npm start   # or yarn start
```

## License

See `LICENSE` file
