let age = 20
if (age > 18) {
    console.log('Eligible to vote')
}
else {
    console.log('Not eligible to vote')
}

// Task 2
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome User")
}
else {
    console.log('Please Login')
}

// Task 3

let num = 15;
if (num % 2 == 0) {
    console.log("Even Number")
}
else {
    console.log('Odd number')
}

// Task 4
let num1 = -10;

if (num1 > 0) {
    console.log("Positive")
}
else {
    console.log("Negative")
}

// Task 5

let mark2 = 40;

if (mark2 >= 35) {
    console.log("Passs...")
}
else {
    console.log("Fail")
}

// Task 6 
let mark = 85;

if (mark >= 90) {
    console.log("A Grade");
}
else if (mark >= 75) {
    console.log("B Grade");
}
else if (mark >= 50) {
    console.log("C Grade");
}
else {
    console.log("Fail");
}

// Task 7
let a = 50;
let b = 100;

if (a > b) {
    console.log(a + " is larger");
}
else {
    console.log(b + " is larger");
}

// Task 8
let balance = 5000;
let amount = 2000;

if (amount <= balance) {
    console.log("Withdraw Success");
}
else {
    console.log("Insufficient Balance");
}

// Task 9
let role = "admin";

switch (role) {
    case "admin":
        console.log("Admin Panel");
        break;

    case "trainer":
        console.log("Trainer Panel");
        break;

    case "student":
        console.log("Student Panel");
        break;

    default:
        console.log("Invalid Role");
}

// Task 10
let day = 3;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log('Thurdsday')
        break;
    case 5:
        console.log("friday")
        break;

    default:
        console.log("Invalid")
        break;
}

// Task 11

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 12
for (let i = 1; i <= 10; i++) {
    console.log(` 5 * ${i} = ${5 * i}`);
}

// Task 13
for (let j = 1; j <= 10; j++) {
    if (j % 2 == 0) {
        console.log(j)
    }
}
