// Task 1 

let courses = ["HTML", "CSS", "JavaScript"];

courses.push("React");
courses.push("Node.js");

console.log(courses);

// Task 2

let courses2 = ["HTML", "CSS", "JavaScript", "React"];

let removed = courses.pop();

console.log("Removed:", removed);
console.log("Updated Array:", courses2);

// Task 3

let fruits = ["Apple", "Mango", "Orange", "Banana"];

let removedFruit = fruits.shift();

console.log("Removed Fruit:", removedFruit);
console.log("Updated Array:", fruits);

// Task 4

let actors = ["Ajith", "Suriya", "SK"];

actors.unshift("Vijay");
actors.unshift("Dhanush");

console.log(actors);

// Task 5

let courses_new = ["HTML", "CSS", "Bootstrap", "React"];

courses_new.splice(2, 1, "JavaScript");

console.log(courses_new);

// Task 6

let courses3 = ["HTML", "CSS", "JavaScript", "React", "Node"];

let newArray = courses3.slice(1, 4);

console.log(newArray);

// Task 7

let student = {

    name: "Vinayagam",

    course: "MERN",

    city: "Chennai",

    age: 22

};

for (let key in student) {
    console.log(`${key} : ${student[key]}`)
}
// Task 8 

let actors_list = [
    {
        name: "Vijay",
        movie: "GOAT"
    },

    {
        name: "Ajith",
        movie: "Vidaamuyarchi"
    },

    {
        name: "Suriya",
        movie: "Kanguva"
    }
];

for (let i = 0; i < actors_list.length; i++) {
    console.log(actors_list[i].name + " - " + actors_list[i].movie);
}

// Task 9

let actors_new = ["Vijay", "Ajith", "Suriya", "SK"];

let result_new = actors_new.join(" | ");

console.log(result_new);

// Task 10

let courses_list = ["HTML", "CSS", "JavaScript", "React"];

if (courses_list.includes("React")) {
    console.log("Course Found");
} else {
    console.log("Course Not Found");
}


