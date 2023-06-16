#!/usr/bin/node

const { argv } = require('process');
const request = require('request');

const endPoint = `https://swapi-api.alx-tools.com/api/films/${argv[2]}`;

request(endPoint, (err, res) => {
  err ? console.log(err) : console.log(JSON.parse(res.body).title);
});
