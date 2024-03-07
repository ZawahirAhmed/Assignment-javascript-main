

////////////////////////QUESTION///////////////////01////////////////////////////


var cityName = prompt("Enter city name: ");
if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}


////////////////////////QUESTION///////////////////////02////////////////////////

var gender = prompt("Enter your gender: ");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}

////////////////////////QUESTION/////////////////////////03/////////////////////


var signalColor = prompt("Enter the color of the road traffic signal: ").toLowerCase();

if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
} else {
    alert("Invalid signal color");
}

////////////////////////QUESTION/////////////////////////04/////////////////////



var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres): "));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}


////////////////////////QUESTION/////////////////////////////05/////////////////



var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
 

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
} 


////////////////////////QUESTION///////////////////////////06///////////////////



var English = parseInt(prompt("Enter marks obtained in English : "));
var Urdu = parseInt(prompt("Enter marks obtained in Urdu : "));
var Math = parseInt(prompt("Enter marks obtained in Math : "));
var totalMarks = parseInt(prompt("Enter total marks: "));
var obtainedMarks = English + Urdu + Math;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "Satisfactory";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Average";
} else {
    grade = "Fail";
    remarks = "Needs Improvement";
}

////////////////////////QUESTION///////////////////////////07///////////////////



alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + obtainedMarks + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade + "\nRemarks: " + remarks);

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, try again!");
}



///////////////////////////////////////////////////////////////////////Ending


////////////////////////QUESTION///////////////////01////////////////////////////


var cityName = prompt("Enter city name: ");
if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}


////////////////////////QUESTION///////////////////////02////////////////////////

var gender = prompt("Enter your gender: ");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}

////////////////////////QUESTION/////////////////////////03/////////////////////


var signalColor = prompt("Enter the color of the road traffic signal: ").toLowerCase();

if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to move");
} else if (signalColor === "green") {
    alert("Move now");
} else {
    alert("Invalid signal color");
}

////////////////////////QUESTION/////////////////////////04/////////////////////



var remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres): "));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}


////////////////////////QUESTION/////////////////////////////05/////////////////



var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
 

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
} 


////////////////////////QUESTION///////////////////////////06///////////////////



var English = parseInt(prompt("Enter marks obtained in English : "));
var Urdu = parseInt(prompt("Enter marks obtained in Urdu : "));
var Math = parseInt(prompt("Enter marks obtained in Math : "));
var totalMarks = parseInt(prompt("Enter total marks: "));
var obtainedMarks = English + Urdu + Math;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "Satisfactory";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Average";
} else {
    grade = "Fail";
    remarks = "Needs Improvement";
}

////////////////////////QUESTION///////////////////////////07///////////////////



alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + obtainedMarks + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade + "\nRemarks: " + remarks);

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, try again!");
}



///////////////////////////////////////////////////////////////////////Ending
