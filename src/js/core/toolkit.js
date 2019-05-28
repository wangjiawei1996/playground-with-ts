 const matrixToolkit = {
  makeRow(v=0) {
    const array = new Array(9);
    array.fill(v)
    return array
  },
  makeMatrix(v=0) {
    return Array.from({length: 9}, () => this.makeRow(v))
  },
  shuffle(array) {
    const endIndex = array.length - 2;
    for(let i = 0; i <= endIndex; i++) {
      const j = i + Math.floor(Math.random() * (array.length - i));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  },
  /**
   * 检查指定位置是否可以填写 n
   */
  checkFileable() {
    return true
  }
 };
 /**
  * 宫坐标系工具
  */
 const boxToolit = {

 };
 // 工具集
 module.exports = class Toolkit {
   /**
    * 矩阵和数据相关的数据
    */
   static get matrix() {
     return matrixToolkit;
   }
   /**
    * 宫坐标系相关的工具
    */
   static get box() {
     return boxToolit;
   }
 }