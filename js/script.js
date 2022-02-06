// single line comment
/* multi line comment
multi line comment*/
console.log('sewit');
console.log('my favorite food is salmon');
let words= "supercalifragilisticexpialidocious";
console.log(words.length);
let anyNum= 123;
console.log(anyNum);
let bigNum= BigInt(123456);
console.log(bigNum);
typeof(bigNum); 
let firstName= prompt("write your first name");

let splitedName= firstName.split('');
let reversedName= splitedName.reverse();
let joinedName= reversedName.join('');
alert(joinedName);
let numOne= prompt();
let numTwo= prompt();
let firstNum= parseInt(numOne);
let secondNum= parseInt(numTwo);
alert(firstName+secondNum);
// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday
let firstName2= prompt('what is your firstname?');
let lastName= prompt('what is your lastname?');
console.log(firstName2);
alert(lastName);
let birthDay= prompt('when is your birthday?');
confirm(birthDay);
alert(birthDay);