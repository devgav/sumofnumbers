const arr = [1, 2, 3, 4];
function sumFor() {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
}

console.log(sumFor());

function sumWhile() {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

console.log(sumWhile());

function sumRecursion(theArr) {
  if (theArr.length === 1) {
    return theArr[0];
  }
  return theArr[0] + sumRecursion(theArr.slice(1));
}

console.log(sumRecursion(arr));

function sumTheSimpleWay() {
  return _.reduce(arr, (element, n) => n + element);
}

console.log(sumTheSimpleWay());


