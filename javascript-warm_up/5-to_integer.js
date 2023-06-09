#!/usr/bin/node

const { argv } = process;

const numArg = Number(argv[2]);

if (!numArg) console.log('Not a number');
else {
  console.log('My number:', numArg);
}
