const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let newNumber = n.toString().split('');
  for (let i = 0; i < n.toString().length; i++) {
    let num = [...newNumber];
    num.splice(i, 1);
    let result = num.join('');
    if (+result > maxNumber) {
      maxNumber = +result;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
