
/*
 * File Name: profile.js
 * Author: Kent Adrian
 * Subject: IT103 - Programming 1
 * Week 2: Variables and Data Types
 */

// Declare variables with different data types.
let studentName = "Kent Adrian";
let age = 25;
let isEnrolled = true;
let midtermGrade;
let scholarship = null;
let course = "BSIT1M";

// Display each variable and its data type.
console.log("STUDENT PROFILE DATA");
console.log(studentName, "-", typeof studentName);
console.log(age, "-", typeof age);
console.log(isEnrolled, "-", typeof isEnrolled);
console.log(midtermGrade, "-", typeof midtermGrade);
console.log(scholarship, "-", typeof scholarship);
console.log(course, "-", typeof course);

// Add 10 to a string without converting it.
let scoreText = "85";

console.log("\nSTRING WITHOUT CONVERSION");
console.log("Score + 10:", scoreText + 10);

// Convert the string into a number before adding.
console.log("\nSTRING WITH NUMBER CONVERSION");
console.log("Score + 10:", Number(scoreText) + 10);

// Create a sentence using a template literal.
console.log("\nSTUDENT INFORMATION");

let message = `My name is ${studentName}, I am ${age} years old, and my course is ${course}.`;

console.log(message);
