# routes-getter
[![Build Status](https://travis-ci.org/nitin42/routes-getter.svg?branch=master)](https://travis-ci.org/nitin42/routes-getter)
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![dependency](https://img.shields.io/badge/dependencies-up--to--date-green.svg)]()

> ***Accessible routes in your ExpressJS application***

An easy way of working with your routes in [ExpressJS](https://expressjs.com) applications.
It walks through your routes folder and imports them to your project.

**Note** - It does not walk through the `middlewares` folder in your `routes` folder. Since they are used and shared by routes as further middlewares. 

#### Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [API](#api)

## Installation

```
npm install -g routes-getter
```

## Examples

Assuming the `src` directory to be the application folder, this is how you will define the routes

```javascript
// src/routes/index.js

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('../views/index.html');
	});
}
```
`server.js` file in your app directory.

```javascript
// src/server.js

const express = require('express');
const loader = require('routes-getter');

const app = express();

loader.routers(__dirname + '/routes', app); // Loads the routes in your application
```

Check the complete example [here](https://github.com/nitin42/routes-getter/tree/master/example)


## API

### loader.routers([options])

### options

#### path

*Required*<br>

Path to routes in your application folder.

#### app

*Required*<br>

app should be instance of **express**

## Tests

```
npm test
```

## Contributing
	
Add unit tests for any new or changed functionality.

## License

ISC



