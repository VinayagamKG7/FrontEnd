// Task 1

let userName = "Vinayagam";

console.log("Original Name:", userName);

userName = "kvinayak";

console.log("Updated Name:", userName);

// Task 2
if (true) {
    let message = "Hello";
    console.log(message); // Works
}

// console.log(message); // Error

// Task 3
const courseName = "JavaScript";

console.log(courseName);

// courseName = "HTML"; // Error

console.log(courseName);

// Task 4 
const arr_func = () => {
    console.log('Welcome To JavaScript')
}
arr_func()

// Task 5 
const showHero = name => {
    console.log("Hero Name :", name)
}

showHero("Vijay")

// Task 6 
const addFunc = (a, b) => {
    return a + b
}

let result = addFunc(20, 30)
console.log(result)

// Task 7

let hero = "Dhanush";

console.log(` My Favorite Hero is ${hero}`)

// Task 8 
let name2 = "Vinayagam";
let course_tech = "MERN";
let city = "Chennai";

console.log(`My name is ${name2}, I am studying ${course_tech}, and I live in ${city}.`);

// Task 9
let heroes = ["Vijay", "Ajith", "Suriya"];

let [hero1, hero2] = heroes;

console.log(hero1);
console.log(hero2);

// Task 10 

let obj = {
    name: "Vinayagam",
    course: "MERN",
    city: "Chennai"
}

let { name, course } = obj;
console.log(name, course)

// Task 11 
let courses_list = ["HTML", "CSS", "JavaScript"];

let newCourses = [...courses_list, "React"];

console.log(newCourses);

// Task 12

let array1 = ["Vijay", "Ajith"];
let array2 = ["Suriya", "SK"];

let mergedArray = [...array1, ...array2];

console.log(mergedArray);

// Task 13

let student = {
    name: "Vinayagam",
    city: "Chennai"
};

let newStudent = {
    ...student,
    course: "MERN"
};

console.log(newStudent);


// Task 15
const sum = (...nums) => {
    let total = 0;

    nums.forEach((item) => {
        total += item;
    })
    return total
}

let res_tot = sum(10, 20, 30, 40, 50)
console.log(res_tot)

// Task 17

let heroes1 = ["Vijay", "Ajith"];

let heroes2 = ["Suriya", "SK"];

let combined_hero = [...heroes1, ...heroes2]


const displayHero = (heros_combined) => {
    heros_combined.forEach((element) => {
        console.log(element)
    })
}

displayHero(combined_hero)

// Movie collection calculator

const calculateTotal = (...collections) => {
    let total_collection = 0 ;

    collections.forEach( (elem) => {
        total_collection += elem ;
    } )

    console.log( `Total Collection : ${total_collection}` ) ;
}

calculateTotal(500,800,300,700)


