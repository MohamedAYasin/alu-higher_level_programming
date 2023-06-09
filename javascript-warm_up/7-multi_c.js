#!/usr/bin/node

const { argv } = process;

const numArg = Number(argv[2]);

if (!numArg) console.log('Missing number of occurrences');
else {
  for (let i = 0; i < numArg; i++) {
    console.log('C is fun');
  }
}
