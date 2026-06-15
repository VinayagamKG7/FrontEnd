// Task 1
let movieCollection = ["GOAT", "Leo", "Master"];

movieCollection.push("Ghilli");

movieCollection.pop();

console.log(movieCollection);

// Task 2
let heroNames = ["Ajith", "Suriya", "SK"];

heroNames.unshift("Vijay");

heroNames.shift();

console.log(heroNames);

// Task 3

let fruitBasket = ["Apple", "Mango", "Orange"];

fruitBasket.push("Banana", "Grapes");

fruitBasket.pop();

fruitBasket.unshift("Pineapple");

fruitBasket.shift();

console.log(fruitBasket);

// Task 4
let learnerInfo = {
    name: "Vinayagam",
    course: "MERN",
    city: "Chennai"
};

// Dot notation
console.log("Student Name:", learnerInfo.name);
console.log("Course:", learnerInfo.course);
console.log("City:", learnerInfo.city);

// Bracket notation
console.log("Student Name:", learnerInfo["name"]);
console.log("Course:", learnerInfo["course"]);
console.log("City:", learnerInfo["city"]);


// Task 5

let mobileStore = [
    {
        brand: "Samsung",
        price: 20000
    },

    {
        brand: "iPhone",
        price: 80000
    },

    {
        brand: "OnePlus",
        price: 35000
    }
]
for (let i = 0; i < mobileStore.length; i++) {
    console.log(mobileStore[i].brand + " - " + mobileStore[i].price);
}

// Task 6

let cinemaData = [
    {
        movie: "GOAT",
        collection: 800
    },
    {
        movie: "Leo",
        collection: 600
    },
    {
        movie: "Master",
        collection: 500
    }
];

let totalAmount = 0;
let topCollection = cinemaData[0].collection;
let topMovie = cinemaData[0].movie;

for (let i = 0; i < cinemaData.length; i++) {
    totalAmount += cinemaData[i].collection;

    if (cinemaData[i].collection > topCollection) {
        topCollection = cinemaData[i].collection;
        topMovie = cinemaData[i].movie;
    }
}

console.log("Total Collection:", totalAmount);
console.log("Highest Collection:", topCollection);
console.log("Movie Name with Highest Collection:", topMovie);