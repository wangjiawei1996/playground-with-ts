// function array (person: string) {
//   return 'hello,' + person;
// }
// var user = ['1', '2', '3'];
// document.body.innerHTML = array(user);
class Student {
  fullName: string;
  constructor(public firstName,public lastName,public middleInitial) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function array(person: Person) {
  return 'hello,' + person.firstName + '' + person.lastName
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = array(user);