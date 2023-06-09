#!/usr/bin/node

const { argv } = process;

const arrNum = argv.slice(2);

if (arrNum.length === 1) console.log(0);
else {
  // TURN ALL ARGS INTO NUMBER
  for (let i = 0; i < arrNum.length; i++) {
    arrNum[i] = Number(arrNum[i]);
  }

  const biggest = Math.max(...arrNum);
  let secBig = 0;

  for (let i = 0; i < arrNum.length; i++) {
    const num = Number(arrNum[i]);

    if (num !== biggest && num > secBig) secBig = num;
  }

  console.log(secBig);
}
