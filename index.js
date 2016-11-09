'use strict';

const express = require('express');
const fs = require('fs');

const app = express();

/**
 * Router module
 * @module get/routers
 */

exports.routers = (path, app) => {
	if (typeof (app) === 'function' && ((app) instanceof express) === false) {
		/** Read the directory (routes) in Express app */
		fs.readdirSync(path).forEach((file) => {
			const filePath = path + '/' + file;
			const stats = fs.statSync(filePath);
			if (stats.isFile()) {
				require(filePath)(app);
				// Middlewares are used by routes and are not routes itself
			} else if (stats.isDirectory() && file !== 'middlewares') {
				routers(filePath, app);
			}
		});
	}
}