#!/usr/bin/node

const { argv } = process;

const numArg = Number(argv[2]);
let size = '';
if (!numArg) console.log('Missing size');
else {
  for (let i = 0; i < numArg; i++) {
    size += 'X';
  }
  for (let i = 0; i < numArg; i++) {
    console.log(size);
  }
}
