// function array (person: string) {
//   return 'hello,' + person;
// }
// var user = ['1', '2', '3'];
// document.body.innerHTML = array(user);
var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleInitial) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function array(person) {
    return 'hello,' + person.firstName + '' + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = array(user);
