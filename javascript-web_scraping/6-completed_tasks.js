#!/usr/bin/node

const request = require('request');

function getCompletedTasks (data, userId) {
  let count = 0;
  data
    .filter((element) => element.userId === userId)
    .forEach((task) => {
      if (task.completed) {
        count++;
      }
    });
  return count;
}

const url = process.argv[2];

const results = {};
request.get(url, (err, res) => {
  if (err) {
    throw err;
  }
  const body = res.body;
  const data = JSON.parse(body);
  data.forEach((element) => {
    if (!(element.userId in results)) {
      if (getCompletedTasks(data, element.userId) > 0) {
        results[element.userId] = getCompletedTasks(data, element.userId);
      }
    }
  });
  console.log(results);
});
