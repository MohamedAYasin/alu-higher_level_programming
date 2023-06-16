#!/usr/bin/node

const { argv } = require('process');
const request = require('request');
const fs = require('fs');
const url = argv[2];
const file = argv[3];

request(url, async (err, res) => {
  err
    ? console.log(err)
    : await fs.writeFile(file, res.body, (err) => {
      if (err) console.log(err);
    });
});
