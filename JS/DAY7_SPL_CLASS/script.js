// Tasks 1
let valuesList = [1, 2, 3, 5];

for (let i = 0; i < valuesList.length - 1; i++) {
    if (valuesList[i + 1] - valuesList[i] > 1) {
        console.log(valuesList[i] + 1);
    }
}

// Task 3

let wordInput = "javascript";
let checkedChars = "";

for (let i = 0; i < wordInput.length; i++) {
    if (checkedChars.includes(wordInput[i])) {
        console.log(wordInput[i]);
        break;
    }

    checkedChars += wordInput[i];
}

// Tasks 4
let arr = [1, 0, 2, 0, 3, 4, 0];

let a = [];
let b = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        b.push(arr[i]);
    } else {
        a.push(arr[i]);
    }
}

console.log(a.concat(b));

// Tasks 5

let heroes = ["Vijay", "Ajith", "Vijay", "SK"];

let count = {};

for (let i = 0; i < heroes.length; i++) {
    if (count[heroes[i]]) {
        count[heroes[i]]++;
    } else {
        count[heroes[i]] = 1;
    }
}

for (let key in count) {
    console.log(key + " = " + count[key]);
}

// Tasks 7

let list = [1, 2, 3, 4, 5, 6];

let even = [];
let odd = [];

for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        even.push(list[i]);
    } else {
        odd.push(list[i]);
    }
}

console.log("Even:", even);
console.log("Odd:", odd);

// Tasks 8

let actors = ["Vijay", "Ajith", "Suriya", "SK"];

let first = actors.shift();

actors.push(first);

console.log(actors);

// Tasks 9
let stars = ["Vijay", "Ajith", "Suriya", "SK"];

let last = stars.pop();

stars.unshift(last);

console.log(stars);

// Tasks 10
let names = ["Vijay", "Ajith", "Sivakarthikeyan", "Dhanush"];

let long = "";
let second = "";

for (let i = 0; i < names.length; i++) {

    if (names[i].length > long.length) {
        second = long;
        long = names[i];
    }

    else if (names[i].length > second.length) {
        second = names[i];
    }
}

console.log(second);


