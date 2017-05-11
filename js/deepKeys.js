// This function handles arrays and objects
module.exports = function deepKeys(obj) {
  let keys = [];

  (function eachRecursive(obj, parent = 'root') {
    for (const k in obj) {
      if (typeof obj[k] == "object" && obj[k] !== null) {
          keys.push(`${parent} : ${k}`);
          eachRecursive(obj[k], k);
      } else {
          keys.push(`${parent} : ${k}`);
      }
    }
  })(obj);

  return keys;
}
