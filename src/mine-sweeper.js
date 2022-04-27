const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // let newMatrix = [...matrix];
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let y = 0; y < matrix[i].length; y++) {
  //     if (i === 0) {
  //       if (matrix[i][y]) {
  //         newMatrix[i][y] = 1;
  //       } else {
  //         if (matrix[i][y + 1]) {
  //           newMatrix[i][y] = +newMatrix[i][y] + 1;
  //         }
  //         if (matrix[i][y - 1]) {
  //           newMatrix[i][y] = +newMatrix[i][y] + 1;
  //         }
  //         if (matrix[i + 1][y]) {
  //           newMatrix[i][y] = +newMatrix[i][y] + 1;
  //         }
  //         if (matrix[i + 1][y + 1]) {
  //           newMatrix[i][y] = +newMatrix[i][y] + 1;
  //         } else {
  //           newMatrix[i][y] = +newMatrix[i][y];
  //         }
  //       }
  //     } else {
  //       if (matrix[i][y]) {
  //         newMatrix[i][y] = +matrix[i][y] + 1;
  //       }
  //       if (matrix[i - 1][y] && !matrix[i][y]) {
  //         newMatrix[i][y] = +matrix[i][y] + 1;
  //       }
  //       if (matrix[i - 1][y] && !matrix[i][y]) {
  //         newMatrix[i][y] = +matrix[i][y] + 1;
  //       }
  //       if (matrix[i - 1][y - 1] && !matrix[i][y]) {
  //         newMatrix[i][y] = +matrix[i][y] + 1;
  //       }
  //       if (matrix[i][y + 1]) {
  //         newMatrix[i][y] = +matrix[i][y] + 1;
  //       }
  //       if (matrix[i][y - 1] && !matrix[i][y]) {
  //         newMatrix[i][y] = +matrix[i][y] + 1;
  //       }
  //       if (matrix[i][y + 1] && !matrix[i][y]) {
  //         newMatrix[i][y] = +matrix[i][y] + 1;
  //       } else {
  //         newMatrix[i][y] = 1;
  //       }
  //     }
  //   }
  // }
  // return newMatrix;
  // Дорешать
}

module.exports = {
  minesweeper
};
