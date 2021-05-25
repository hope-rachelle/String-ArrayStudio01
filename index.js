const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let letters = (str.slice(0, 3));
console.log(letters);
newStr = str.slice(3, 10) + letters;


//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(str + ' minus/plus Lau equals ' + newStr);
console.log(`The orginal string ${str} and your new string ${newStr} `)


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let num = input.question('How many letters are being relocated?');

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (num != 3) {
  console.log("Error, incorrect number of letters");
}
else {
  console.log("3 is the correct answer.");
}

