#!/usr/bin/env node
// @ts-check
const expUa = require('express-useragent');
const isBot = require('isbot');

if (process.argv.length < 2) {
  process.exit(1);
}

const userAgent = process.argv.pop();
const parsed = expUa.UserAgent().parse(userAgent);
// types are wrong, one of these libraries sometimes returns strings, like "Google" for isBot
parsed.isBot = !!(parsed.isBot || isBot(userAgent));
console.log(JSON.stringify(parsed, null, 2));
