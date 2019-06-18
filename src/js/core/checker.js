// 检查数独

function checkArray (array) {
  const length = array.length;
  const marks = new Array(length);
  marks.fill(true);
  for (let i = 0; i < length - 1; i++) {
      if (!marks[i]) {
          continue;
      }
      const v = array[i];
      // 是否有效 0-无效
      if (!v) {
          marks[i] = false;
          continue;
      }

      // 是否有重复：i+1 ~ 9，是否和i位置重复
      for (let j = i + 1; j < length; j++) {
          if (v === array[j]) {
              marks[i] = marks[j] = false;
          }
          
      }
      
  }
  return marks;
}


// console.log(checkArray([1, 2, 3, 4, 4, 5, 7, 4, 9]));



const Toolkit = require('./toolkit');


// 输入：matrix，用户完成数独数据，9X9
// 处理：对matrix 行、列、宫进行检查， 并填写marks
// 输出：检查是否成功、marks
class Checker {
  constructor (matrix) {
      this._matrix = matrix;
      this._matrixMarks = Toolkit.matrix.makeMatrix(true);
  }

  get matrixMarks () {
      return this._matrixMarks;
  }

  get isSuccess () {
      return this._success;
  }

  check () {
      this.checkRows();
      this.checkCols();
      this.checkBoxes();

      // 检查是否成功
      this._success = this._matrixMarks.every(row => row.every(mark => mark));
      return this._success;
  }

  checkRows () {
      for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
          const row = this._matrix[rowIndex];
          const marks = checkArray(row);

          for (let colIndex = 0; colIndex < marks.length; colIndex++) {
              if (!marks[colIndex]) {
                  this._matrixMarks[rowIndex][colIndex] = false;
              }
              
          }
      }
  }

  checkCols () {
      for (let colIndex = 0; colIndex < 9; colIndex++) {
          const col = [];
          for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
              col[rowIndex] = this._matrix[rowIndex][colIndex];
              
          }
          const marks = checkArray(col);
          for (let rowIndex = 0; rowIndex < marks.length; rowIndex++) {
              if (!marks[rowIndex]) {
                  this._matrixMarks[rowIndex][colIndex] = false;
              }
              
          }
      }
  }

  checkBoxes () {
      for (let boxIndex = 0; boxIndex < 9; boxIndex++) {
          const box = Toolkit.box.getBoxCells(this._matrix, boxIndex);
          const marks = checkArray(box);
          
          for (let cellIndex = 0; cellIndex < marks.length; cellIndex++) {
              if (!marks[cellIndex]) {
                  const {rowIndex, colIndex} = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex)
                  this._matrixMarks[rowIndex][colIndex] = false;
              }
              
          }
      }
  }

}
module.exports = Checker;
 