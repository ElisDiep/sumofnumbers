const testNum = [1, 1];

function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}
function sumWhile(data) {
  let size = 0;
  let sum = 0;
  while (size < data.length) {
    sum += data[size];
    size++;
  }
  return sum;
}

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testNum));
console.log(sumWhile(testNum));
console.log(sumRecursion(testNum));
console.log(sumTheSimpleWay(testNum));
