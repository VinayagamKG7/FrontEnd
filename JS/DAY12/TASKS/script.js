// Task 1
const heroes = [
    "Vijay",
    "Ajith",
    "Suriya"
];

let upperNames = heroes.map(item => item.toUpperCase());

console.log(upperNames);

// Task 2 
const collections = [
    100,
    200,
    300,
    400
];

let result1 = collections.map(function (value) {
    return value * 10;
});

console.log(result1);

// Task 3

const movies = [

    "GOAT",

    "Leo",

    "Master"
];

let movies_new = movies.map((element) => {
    return `Movie : ${element}`
})
console.log(movies_new)

// Task 4 

const collections_two = [
    100,
    500,
    800,
    200,
    900
];

let result_new = collections_two.filter(function (value) {
    return value > 500;
});

console.log(result_new);

// Task 5
const marks = [35, 80, 20, 90, 45];

let pass_stu = marks.filter((ele) => {
    return ele >= 35
})
console.log(pass_stu)

// Task 6

const heroes2 = [

    "Vijay",

    "Ajith",

    "SK",

    "Suriya"
];

let new_heros = heroes2.filter((item) => {
    return item.length > 4
})
console.log(new_heros)

// Task 7

const heroes3 = [
    "Vijay",
    "Ajith",
    "Suriya"
];

let result3 = heroes3.find(name => name === "Ajith");

console.log(result3);

// Task 8
const collections4 = [
    100,
    500,
    800,
    200
];

let result4 = collections4.find(value => value > 400);

console.log(result4);

// Task 15

const collections5 = [
    100,
    200,
    300,
    400
];

let total = collections5.reduce(
    (sum, value) => sum + value
);

console.log(total);

// Task 18
const students = [

    {
        id: 1,
        name: "Vinayagam"
    },

    {
        id: 2,
        name: "Rahul"
    }
];

let new_students = students.map((item) => {
    return item.name
})
console.log(new_students)

// 
