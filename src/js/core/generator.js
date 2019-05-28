// 生成数独解决方案的方法
const Toolkit = require('./toolkit')
class Generator {
  generator() {
    this.matrix = Toolkit.matrix.makeMatrix();
    // TUDO方法
    for (let n = 1;n <= 9; n++) {
      this.fillNumber(n);
    }
  }
  fillNumber(n) {
    this.fillRow(n, 0)
  }
  fillRow(n, rowIndex) {
    if (rowIndex > 8) {
      return true;
    }
    const row = this.matrix[rowIndex];
    for(let i = 0;i < 9;i++) {
      const colIndex = i;
      // 如果这个位置有值，跳过
      if (row[rowIndex]) {
        continue;
      }
      // 检查这个位置是否可以填 n
      if (!Toolkit.matrix.checkFileable()) {
        continue;
      }
      row[rowIndex] = n;
      // 去下一行填写 n,如果没有填进去，就继续寻找当前行的下一个位置
      if(!this.fillRow(n, rowIndex + 1)) {
        row[colIndex] = 0;
        continue
      }
      return true;
    }
    return false;
  }
}