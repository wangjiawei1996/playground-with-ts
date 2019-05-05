// interface IPerson {
//   name: String;
//   age: Number;
// }
// class Person {
//   constructor(config: IPerson) {

//   }
// }

// var p1 = new Person({
//   name: 'zhangsan',
//   age: 18
// }) 
interface Animal {
  eat()
}
class Sheep implements Animal {
  eat() {
    console.log(' i eat grass')
  }
}
class Tiger implements Animal {
  eat() {
    console.log('i eat meat')
  }
}