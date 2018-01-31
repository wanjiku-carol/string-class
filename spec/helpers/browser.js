const jsdom = require('jsdom');

require('babel-register')();

const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

documentRef = document;
