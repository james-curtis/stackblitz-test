
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}
var list1 = list(1, 2, 3); // [1, 2, 3]


const array = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 5]

console.dir(Symbol)
