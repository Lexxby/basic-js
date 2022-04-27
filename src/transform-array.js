const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/*arr*/) {
  // try {
  //   if (Array.isArray(arr)) {
  //     let newArray = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       if (typeof arr[i] === 'number') {
  //         newArray.push(arr[i]);
  //       }
  //       if (arr[i] === '--double-next') {
  //         newArray.push(arr[i + 1]);
  //         newArray.push(arr[i + 1]);
  //         i++;
  //       }
  //       if (arr[i] === '--discard-prev') {
  //         i = i - 1;
  //       }
  //       if (typeof arr[i] === 'boolean') {
  //         newArray.push(arr[i]);
  //       }
  //     }
  //     return newArray;
  //   } else if (arr.length === 0) {
  //     return arr;
  //   }
  // } catch (error) {
  //   if (arr === '' || arr === undefined || arr === null || !Array.isArray(arr)) {
  //     throw new Error("'arr' parameter must be an instance of the Array!");
  //   }
  // }
}

module.exports = {
  transform
};
