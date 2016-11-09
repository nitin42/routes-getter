'use strict';

const chai = require('chai');
const should = require('should');
const app = require('../index');
const express = require('express');

const { routers } = app;
const { expect } = chai;

describe('Express routers are loaded', () => {
	it('should return undefined when argument is undefined', () => {
		expect(routers(undefined)).to.be.undefined;
	});

	it('should exist and be a function', () => {
		should.exist(routers);
		routers.should.be.type('function');
	});

	it('should be ok as a module', () => {
		expect(routers).to.be.ok;
	});

	it('should be extensible (new objects can be added)', () => {
		expect(routers).to.be.extensible;
	});

	it('should import as loaders in the project file', () => {
		(() => {
			routers();
		}).should.not.throw();
	});
});
