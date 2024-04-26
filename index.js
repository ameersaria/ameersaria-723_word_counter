#!/usr/bin/env node
// This line is called a shebang. It tells the system this script should be executed using Node.js.
// Import the `inquirer` module, which is a command line user interface.
import inquirer from "inquirer";
// Declare a constant `answers` and assign it the result of the `inquirer.prompt` function.
// The user is asked to input a sentence.
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    },
]);
// Trim the sentence to remove any leading or trailing spaces, then split it into an array of words.
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console.
console.log(words);
// Print the word count of the sentence to the console.
console.log(`Your sentence word count is ${words.length}`);
