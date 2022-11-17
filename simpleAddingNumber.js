
//using for loop method
function simpleAddingNumber(num) {
  let sum = 0;
  for (let x = 1; x <= num; x++) sum += x;

  return sum;
}
console.log(simpleAddingNumber(4));

//using the arimethic formula method
function newSimpleAddingNumber(num) {
  let n = (num * (num + 1)) / 2;
  return n;
}
console.log(newSimpleAddingNumber(8));
