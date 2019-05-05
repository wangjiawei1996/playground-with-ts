// var sum = (arg1, arg2) => arg1+arg2;

// var myArray = [1,2,3,4,5];

// console.log(myArray.filter(value => value%2 == 0));

function getStock(name:string) {
  this.name = name;
  setTimeout(() => {
    console.log(this.name)
  })
}
var stock = new getStock('123');