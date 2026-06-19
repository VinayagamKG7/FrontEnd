// Task 1 

let hero = "Vijay";


function showHero() {
    console.log("Inside function:", hero);
}

showHero();

if (true) {
    console.log("Inside if block:", hero);
}

for (let i = 0; i < 1; i++) {
    console.log("Inside loop:", hero);
}

// Task 2 

const movie = () => {
    let collection = 800;
    console.log("Inside function:", collection);
};

movie();
// console.log(collection);

// Task 3

if (true) {

    var actor1 = "Ajith";

    let actor2 = "Vijay";
}
console.log(actor1);
// console.log(actor2);

// Task 4 
function showMovie() {
    console.log("GOAT Movie Released");
}
showMovie();

// Task 5

const add = (a, b) => {
    console.log(a + b);
};
add(10, 20);

// Task 6 
function booking(callback) {
    callback();
}
booking(() => {
    console.log("Booking Confirmed");
});

// Task 7
setTimeout(() => {
    console.log("Movie Started!")
}, 2000)

//Task 8
function processOrder(callback) {
    console.log("Order Received");

    callback();
}

// Another function
function processOrder(callback) {
    console.log("Order Received");

    callback();
}
function deliverOrder() {
    console.log("Order Delivered");
}
processOrder(deliverOrder);

