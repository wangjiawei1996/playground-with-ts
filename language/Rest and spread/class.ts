class Person {
  constructor(name:string) {
    console.log('hahah')
  }
  name;
  eat() {
    console.log('i am eating')
  }
}
class Employee extends Person{
  constructor(name: string, code:string) {
    super(name)
    console.log('xixi')
    this.code = code
  }

  code: string;
  work() {
    super.eat();
    this.dowork();
  }
  private dowork() {
    console.log('i am workinh')
  }
}
var workrs : Array<Person> = [];
workrs[0] = new Person('123');
workrs[1] = new Employee('123','2')
var e1 = new Employee('123', '1')
var p1 = new Person("22323")
p1.eat();

