/*Building a Triangle Exercise
Create 2 functions to make an asterick triangle
*/

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}


function buildTriangle(rows) {
  var line = "";
  for(var i = 1; i <= rows; i++) {
    line += makeLine(i); 
  }
  return line;
}

console.log(buildTriangle(10));