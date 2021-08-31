let name = 'Troy Coffindaffer';
const numberOfStates = 50;
let isTrue = true;

let resultOfAdding = 5 + 4;
let compairingValues = 5 > 4;
let multiplyingValues = 231 * 4;

// Single line comment

/* Multiline Comment
let resultOfAdding = 5 + 4;
let compairingValues = 5 > 4;
let multiplyingValues = 231 * 4; */

function sayHello() {
  alert('Hello World!');
}

sayHello();

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);