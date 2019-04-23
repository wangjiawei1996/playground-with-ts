var username: string = 'wangjiawei'

function test(a: string,b: string,c: string = 'jaiwei'){
  console.log(a);
  console.log(b);
  console.log(c);
}
test('xxxx', 'yyy', 'qqq')