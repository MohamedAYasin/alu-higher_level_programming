#!/usr/bin/node

const { argv } = process;
const numArg = Number(argv[2]);

function recr (num) {
  if (!num || num === 1) return 1;

  return num * recr(num - 1);
}

const result = recr(numArg);
console.log(result);
