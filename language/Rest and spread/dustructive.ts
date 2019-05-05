// function getStock() {
//   return {
//     code: 'IBM',
//     price: {
//       price1: 100,
//       price2: 200
//     }
//   }
// }

// var {code, price: {price1}} = getStock();
var array1 : [1, 2, 3, 4];
// var [, ,num1, num2] = array1;
// var [num1, num2, ...others] = array1;

// console.log(num1)
function doSomething([num1, num2, ...others]) {
  console.log(num1);
}

doSomething(array1);