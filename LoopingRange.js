const range = function(start, end, step){
  let array = [];
  if(start === null || end === null || step === null || start > end || step <= 0){
    return array;
  }
  for (let i = start; i <= end; i += step) {
    array.push(i);
  }
  return array;
};
console.log(range(10,0,1));