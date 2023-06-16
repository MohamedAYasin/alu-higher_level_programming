#!/usr/bin/node

const fs = require('fs');
const fname = process.argv[2];

fs.readFile(fname, (err, content) => {
  err ? console.log(err) : console.log(content.toString());
}
);
