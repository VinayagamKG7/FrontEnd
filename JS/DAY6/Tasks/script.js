// Task 1

let hero = ["Vijay", "Ajith", "Suriya", "SK"]

for (let i = 0; i < hero.length; i++) {
    console.log(hero[i]);
}

// Task 2
let movie_collection = [200, 500, 800, 400, 600]

let high = movie_collection[0];

for (let j = 1; j < movie_collection.length; j++) {

    if (movie_collection[j] > high) {
        high = movie_collection[j];
    }
}
console.log("Highest number is :", high);


// Tasks 3 
let movie = [200, 500, 800, 400, 600]

let low = movie_collection[0];

for (let k = 1; k < movie_collection.length; k++) {

    if (movie[k] < low) {
        low = movie[k];
    }
}
console.log("Lowest number is :", low);


// Tasks 4

let collections = [200, 500, 800, 400, 600]

let total = 0;

for (let l = 0; l < collections.length; l++) {
    total += collections[l];

}
console.log("Total collections is : ", total)

// Tasks 5 

let collections_new = [200, 500, 800, 400, 600]
let new_tot = 0;

for (let m = 0; m < collections_new.length; m++) {
    new_tot += collections_new[m];

}

let avg = new_tot / collections_new.length;
console.log("The avg. Collections is : ", avg);

// Tasks 6;

let hero_names = ["Vijay", "Ajith", "Suriya", "SK"]

for (let n = hero_names.length - 1; n >= 0; n--) {
    console.log(hero_names[n]);
}

// Tasks 7

let fruits = ["Apple", "Orange", "Mango", "Banana"]
let search_for = "Mango"
for (let o = 0; o < fruits.length; o++) {
    if (fruits[o] == search_for) {
        console.log("Fruit Found! ", search_for);
        break;
    }

}

// Tasks 8

let fruits2 = ["Apple", "Mango", "Orange", "Banana"]
let count = 0;
for (let p = 0; p < fruits2.length; p++) {
    count++;
}
console.log("Total no.of Fruits in the array is: ", count)

// Tasks 9 

let new_heros = ["Vijay", "Ajith", "Sivakarthikeyan", "SK"]

let longest_name = new_heros[0];

for (let q = 1; q < new_heros.length; q++) {
    if (new_heros[q].length > longest_name.length) {
        longest_name = new_heros[q];
    }
}
console.log("The longest Name in the actors list is : ", longest_name)

// Tasks 10;
let checkPalindrome = str => {
    let result = ""

    for (let r = str.length - 1; r >= 0; r--) {
        result += str[r];
    }
    if (result == str) console.log("Palindrome");
    else console.log("It's not a palindrome");

}
checkPalindrome("APPLE");


// Task 11 

let hero_input = "vijay"
let reverse_new = ""
for (let s = hero_input.length - 1; s >= 0; s--) {
    reverse_new += hero_input[s];
}
console.log(reverse_new);


// Task 12

let hero_vowel = "suriya";
let vowel_count = 0;

for (let t = 0; t < hero_vowel.length; t++) {
    if (hero_vowel[t] == "a" || hero_vowel[t] == "e" || hero_vowel[t] == "i" || hero_vowel[t] == "o" || hero_vowel[t] == "u") {
        vowel_count++;
    }
}
console.log(vowel_count);


// Task 13 
let cm_actor = "Vijay";

let search_for_alphabet = "a";
let count_two = 0;

for (let u = 0; u < cm_actor.length; u++) {
    if (cm_actor[u] == search_for_alphabet) {
        count_two++;
    }
    else {
        continue;
    }
}
console.log("Word A count in Vijay  is: ", count_two)

// Tasks 14









