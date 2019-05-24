module.exports = function map(arr, fn) {
  var newArr = [];
  arr.forEach(function(item, itemIndex) {
    newArr.push(fn(item, itemIndex, arr));
  });
  return newArr;
};
