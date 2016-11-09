'use strict';

const express = require('express');

const loader = require('routes-getter');

const app = express();

const port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);	
app.set('view engine', 'ejs');

loader.routers(__dirname + '/routes', app);

app.listen(port, () => {
	console.log("Server is listening on port ", port);
});
