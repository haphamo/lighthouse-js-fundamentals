/*In this challenge, we will be building a function that determines the last index of an item in an array. When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);

output is 3.
(https://web.compass.lighthouselabs.ca/activities/542)

let lastIndexOf = function(value, string, target){
  for(let i = value.length-1; i = 0; i--){
    return value;
  };

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3)
*/

function lastIndexOf (array, value) {
  var foundIndex = 0;
  var match = false;
  for (var i = (array.length - 1); i >= 0; i--) {
    if (array[i] == value) {
      foundIndex = i;
      match = true;
      break;
    }
  }
  if (match) {
    return foundIndex;
  } else {
    return -1;
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);