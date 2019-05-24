module.exports = function omit(obj, test) {
  var filtered = {};

  Object.keys(obj).forEach(function doFilter(keyName) {
    if (test(keyName) !== true) {
      filtered[keyName] = obj[keyName];
    }
  });

  return filtered;
};
