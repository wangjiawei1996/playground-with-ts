var myArr = [1, 2, 3, 4]
myArr.desc = 'four number';

// myArr.forEach(value => console.log(value));
// for (var n in myArr) {
//   console.log(n)
// }
for (var n of myArr) {
  if (n > 2) break;
  console.log(n)
}