const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // работаем отдельно с адишенем
  let myAddition;

  if (options.addition !== undefined) {
    myAddition = options.addition;

    if (options.additionRepeatTimes !== undefined) {
      if (options.additionSeparator !== undefined) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          i === 0 ? myAddition : (myAddition = myAddition + options.additionSeparator + options.addition);
        }
      } else {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          i === 0 ? myAddition : (myAddition = myAddition + '|' + options.addition);
        }
      }
    }
  }
  // END работаем отдельно с адишенем

  let result = '';
  if (options.repeatTimes !== undefined) {
    if (options.separator !== undefined) {
      // с сепаратором и повторением
      if (myAddition !== undefined) {
        //с адишеном
        for (let i = 0; i < options.repeatTimes; i++) {
          i === 0 ? (result += str + myAddition) : (result = str + myAddition + options.separator + result);
        }
      } else {
        //без адишена
        for (let i = 0; i < options.repeatTimes; i++) {
          i === 0 ? (result += str) : (result = str + options.separator + result);
        }
      }
      return result;
    } else {
      if (myAddition !== undefined) {
        for (let i = 0; i < options.repeatTimes; i++) {
          i === 0 ? (result += str + myAddition) : (result = str + myAddition + '+' + result);
        }
      } else {
        // если нет сепаратора
        for (let i = 0; i < options.repeatTimes; i++) {
          i === 0 ? (result += str) : (result = str + '+' + result);
        }
      }
      return result;
    }
  } else if (options.addition !== undefined) {
    //если нет повторителя
    result = str + options.addition;
    return result;
  }
}

module.exports = {
  repeater
};
