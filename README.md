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

## Sharing from your computer

Use [ngrok](https://ngrok.com/) to expose your local `buzz-chamber` server to the world. After starting `buzz-chamber`, open a new terminal tab and run:

```
$ ngrok http 8033 # or whatever port you are using
```

## Deploying to Heroku

Add a `package.json` to your project's directory and [deploy your app](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app).

```
{
  "name": "my-awesome-app",
  "scripts": {
    "start": "buzz-chamber --port ${PORT:-8033}"
  },
  "dependencies": {
    "buzz-chamber": "^1.0.0"
  }
}
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
