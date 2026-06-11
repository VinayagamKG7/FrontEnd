// Task 1 

let tamil = 80;
let english = 75;
let maths = 94;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Tamil Marks:", tamil);
console.log("English Marks:", english);
console.log("Maths Marks:", maths);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


// Task 2 
let basicSalary = 50000;
let bonus = 4000;

let grossSalary = basicSalary + bonus;

console.log("Basic Salary:", basicSalary);
console.log("Bonus:", bonus);
console.log("Gross Salary:", grossSalary);

// Task 3 
let productPrice = 230;
let quantity = 14;

let total_amount = productPrice * quantity;
console.log(total_amount);

// Task 4

let totalBill = 2500;
let friendsCount = 5;

let amountPerPerson = totalBill / friendsCount;

console.log("Total Bill:", totalBill);
console.log("Number of Friends:", friendsCount);
console.log("Amount Per Person:", amountPerPerson);

// Task 5
let num = 25;

let remainder = num % 2;

console.log("Number:", num);
console.log("Remainder:", remainder);

// Task 6
let side = 7;

let area = side ** 2;

console.log("Side:", side);
console.log("Area of Square:", area);

// Task 7
let bank_balance = 10000
let deposit = 2000;

bank_balance += deposit;
console.log("Bank Balance: ", bank_balance);

// Task 8
let balance = 5000;

balance -= 1000;

console.log("Remaining Balance:", balance);

// Task 9
let stock = 10;

stock *= 5;

console.log("Updated Stock:", stock);

// Task 10
let price = 2000;

price /= 2;

console.log("Price after discount:", price);

// Task 11
let username1 = "admin";

let username2 = "admin";

console.log(username1 == username2);
console.log(username1 === username2);

// Task 12

let age = 18;

console.log("age > 18 :", age > 18);
console.log("age < 18 :", age < 18);
console.log("age >= 18 :", age >= 18);
console.log("age <= 18 :", age <= 18);

// Task 13

let price1 = 1000;
let price2 = 1500;

let result = price1 != price2;

console.log("Are prices different?", result);

// Task 14
let mark = 85;
let hasCertificate = true;

let isEligible = mark >= 85 && hasCertificate;

console.log("College Admission Eligible:", isEligible);

// Taks 15
let isAdmin = false;
let isHR = true;
let isBlocked = false;

let hasAccess = (isAdmin || isHR) && !isBlocked;

console.log("Company Access Granted:", hasAccess);


// Final Task
// Student Details
let studentName = "Vinayagam";

let mark1 = 80;
let mark2 = 75;
let mark3 = 90;

console.log("Student Name:", studentName);

// Arithmetic Operators
let total = mark1 + mark2 + mark3;
console.log("Total Marks:", total);

let difference = mark1 - mark2;
console.log("Difference:", difference);

let product = mark1 * 2;
console.log("Product:", product);

let average = total / 3;
console.log("Average:", average);

let remainder1 = total % 2;
console.log("Remainder:", remainder);

let square = mark1 ** 2;
console.log("Square of Mark1:", square);

// Assignment Operators
let updatedMark = mark1;

updatedMark += 5;
console.log("After += :", updatedMark);

updatedMark -= 5;
console.log("After -= :", updatedMark);

updatedMark *= 2;
console.log("After *= :", updatedMark);

updatedMark /= 2;
console.log("After /= :", updatedMark);

console.log("mark1 == mark2 :", mark1 == mark2);
console.log("mark1 === mark2 :", mark1 === mark2);
console.log("mark1 != mark2 :", mark1 != mark2);

console.log("mark1 > mark2 :", mark1 > mark2);
console.log("mark1 < mark2 :", mark1 < mark2);

console.log("mark1 >= mark2 :", mark1 >= mark2);
console.log("mark1 <= mark2 :", mark1 <= mark2);


let pass1 = mark1 >= 35;
let pass2 = mark2 >= 35;
let pass3 = mark3 >= 35;

console.log("All Passed:", pass1 && pass2 && pass3);
console.log("At Least One Passed:", pass1 || pass2 || pass3);
console.log("Not Passed in Mark1:", !pass1);


