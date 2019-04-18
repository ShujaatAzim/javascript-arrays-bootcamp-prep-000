var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, ele) {
  var newArr = [...arr];
  newArr.unshift(ele);
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele);
  return arr;
}

function addElementToEndOfArray(arr, ele) {
  var newArr = [...arr];
  newArr.push(ele);
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
