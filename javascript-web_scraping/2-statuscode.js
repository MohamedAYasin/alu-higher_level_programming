#!/usr/bin/node

const { argv } = require('process');
const request = require('request');

request(argv[2], (err, res) => {
  err ? console.log(err) : console.log('code: ' + res.statusCode);
});
