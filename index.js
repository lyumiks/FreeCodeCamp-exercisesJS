//Exercício 1 - "Check Your Code (Ctrl + Enter) -> Submit and go to next challenge"

console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

//Exercício 2 - Introdução de variáveis
let character;

//Exercício 3 - Valor de uma variável
let character = "Hello";

//Exercício 4 - String
let character = "Hello";

//Exercício 5 - console.log
let character = "Hello";
console.log(character);

//Exercício 6
let character = "Hello";
console.log(character);
character = "World";

//Exercício 7
let character = "Hello";
console.log(character);
character = "World";
console.log(character);

//Exercício 8 - camel case
let character = "Hello";
console.log(character);
character = "World";
console.log(character);
let secondCharacter;

//Exercício 9
let character = "Hello";
console.log(character);
character = "World";
let secondCharacter;
console.log(secondCharacter);

//Exercício 10
let character = "Hello";
console.log(character);
character = "World";
let secondCharacter;

console.log(secondCharacter);
secondCharacter = "Test";

//Exercício 11
secondCharacter = "Test";
secondCharacter = character;

//Exercício 12
let character = "Hello";
character = "Hello";

//Exercício 13
let profession = "teacher";
let age;
console.log(profession);
console.log(age);

//Exercício 14 - Excluir o código escrito -> Check Your Code (Ctrl + Enter) -> Submit and go to next challenge

//Exercício 15
let character = "Hello";
let count = "8";

//Exercício 16
let character = "Hello";
let count = 8;
console.log(count + 1);

//Exercício 17 - Operações matemáticas, teste com subtração (-), multiplicação (*) e divisão (/)
let character = "Hello";
let count = "8";
//Check Your Code (Ctrl + Enter) -> Submit and go to next challenge

//Exercício 18 - Array
let character = "Hello";
let count = 8;
let rows = [];

//Exercício 19
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

//Exercício 20
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

//Exercício 21
rows[2] = 10;
console.log(rows);

//Exercício 22 - length property
rows[rows.length - 1] = 10;

//Exercício 23 - remover o console.log e rows[rows.length - 1]

//Exercício 24
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

//Exercício 25 - Remove all of your code from the previous step

//Exercício 26
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);

//Exercício 27
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped;
rows.pop();
console.log(popped);
console.log(rows);

//Exercício 28
let pushed = rows.push("freeCodeCamp");
console.log(pushed);

//Exercício 29 - Rmove all of your .push() and .pop() calls, and your console.log statements.

//Exercício 30
let character = "Hello";
let count = 8;
let rows = [];

//Exercício 31
const character = "Hello";
const count = 8;
const rows = [];

//Exercício 32
const character = "#";
const count = 8;
const rows = [];

//Exercício 33
for ("iterator"; "condition"; "iteration") {}

//Exercício 34
for (let i = 0; "condition"; "iteration") {}

//Exercício 35
for (let i = 0; i < count; "iteration") {}

//Exercício 36
for (let i = 0; i < count; i = i + 1) {}

//Exercício 37
for (let i = 0; i < count; i = i + 1) {
  console.log(i);
}

//Exercício 38
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

//Exercício 39
let result = "";

//Exercício 40
console.log(result);

//Exercício 41
for (const row of rows) {
}

//Exercício 42
for (const row of rows) {
  result = row + result;
}

//Exercício 43
for (const row of rows) {
  result = result + "\n" + row;
}

//Exercício 44
for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

//Exercício 45
for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
  character.repeat(i);
}

//Exercício 46
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

//Exercício 47
function padRow() {}

//Exercício 48
function padRow() {}
padRow();

//Exercício 49
const call = padRow();

//Exercício 50
function padRow() {}
const call = padRow();
console.log(call);

//Exercício 51
function padRow() {
  return "Hello!";
}

//Exercício 52
function padRow(name) {
  return "Hello!";
}

//Exercício 53
function padRow(name) {
  return name;
}

//Exercício 54
const call = padRow();
padRow("name");

//Exercício 55
function addTwoNumbers(a, b) {
  return a + b;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);

//Exercício 56 - remove your addTwoNumbers function, sum variable, and log statement.

//Exercício 57
function padRow(name) {
  return character + name;
}

//Exercício 58
function padRow(name) {
  const test = "Testing";
  return character + name;
}

//Exercício 59
function padRow(name) {
  const test = "Testing";
  return test;
}
console.log();

//Exercício 60
function padRow(name) {
  const test = "Testing";
  console.log("This works!");
  return test;
  console.log("This works!");
}
