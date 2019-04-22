// var myname = 'wangjiawei';
// var getName = function() {
//   return 'wangjiawei'
// }
// console.log(`hello ${myname}`);
// console.log(`hello ${getName()}`);
function test(template, name, age) {
  console.log(template);
  console.log(name);
  console.log(age);
}
var myname = 'wangjiawei'

var getAge = function() {
  return 18
}
test `my name is ${myname},i'm ${getAge()}`