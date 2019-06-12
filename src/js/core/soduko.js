// 生成数独游戏
const Generator = require('./generator')
module.exports = class Sudoku {
  constructor() {
    const generator = new Generator();
    generator.generator();
    this.solutionMatrix = generator.matrix;
  }
  make(level = 5) {
    this.puzzleMatrix = this.solutionMatrix.map(row => {
      return row.map(cell => Math.random()* 9 < level ? 0 : cell)
    })
  }
}