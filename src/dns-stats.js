const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  domains.forEach((element) => {
    element = element.split('.').reverse();
    element.forEach((elem, index, array) => {
      if (!result[array.slice(0, index + 1)]) {
        result[array.slice(0, index + 1)] = 1;
      } else {
        result[array.slice(0, index + 1)] = result[array.slice(0, index + 1)] + 1;
      }
    });
  });
  Object.keys(result).forEach((elem, index) => {
    if (index > 0) {
      let renameElem = elem.replace(/,/g, '.');
      result['.' + renameElem] = result[elem];
      delete result[elem];
    } else {
      result['.' + elem] = result[elem];
      delete result[elem];
    }
  });
  return result;
}

module.exports = {
  getDNSStats
};
