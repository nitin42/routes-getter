'use strict';

// Sample middleware which the `routes-loader` will not recognised
exports.required = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return res.redirect('/');
	}
	next();
}
