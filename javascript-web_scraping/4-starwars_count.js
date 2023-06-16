#!/usr/bin/node

const { argv } = require('process');
const request = require('request');

const url = argv[2];

let count = 0;
let data;

request(url, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  data = JSON.parse(res.body).results;
  data.forEach((obj) => {
    obj.characters.forEach((character) => {
      if (character.includes('/18/')) count++;
    });
  });

  console.log(count);
});
