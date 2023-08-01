/// JAVASCRIPT CONDITIONALS ///

// How If , Else If And Else Works //

// when user is subscription is true //

let subscribe = true 
let loggedIn =  true 


if (subscribe === true) {
    console.log('show the video');
}

// when user is logged in but has not subscribed or set to false //

else if (loggedIn === true) {
    console.log('Tell user to upgrade their subscription');
} 

// when user subscription and loggedIn is false //

else {
console.log('Tell user to log into their account ');
}


/// Example 2 ///

let cash = 60;
let price = 40;
// this is how to calculate the x amount to be added or to be taken us change //
// by using backtis(`${})

let difference = cash-price

if (cash > price) {
    console.log(`You paid extra , here's your ${difference} dollar change`);
}

else if (cash === price) {
    console.log("Print receipt,you paid exact amount. Thank You");
}

else {
    console.log(`No enough money,you own ${difference * -1} amount `);
}

// / Logical Operator /// {&& AND ||} HOW TO USE THEM ///

// This For && //

let money = 50
let amount =30
let isStoreOpen = true

if (money >= amount && isStoreOpen === true){
    console.log(`Print The Receipt`);
}

// This For || //

let carPrice = 100
let cashAmount = 150
let isStoreOpened = false

if (cashAmount >= carPrice || isStoreOpened === false) {
    console.log(`Print The Receipt`);
}

/// HOW FALSY AND TRUTHY VALUE WORKS ///

// under falsy //

let tomatoes = 15
let cashOnYou = 20
let isShopOpen = false

if ("") {
    console.log(`true`);
}

else{
    console.log(`falsy value`);
}


// under truthy //

let haircut = 10
let cashOnMe = 20
let barberingShopIsOpen = true 

if ("o"){
    console.log(`truthy value`);
}

else{
    console.log(`falsy values`);
}

// How to check weather your values are truthy or falsy //
// under falsy //
let val = "";
if (val){
    console.log(`truthy val`);
}

else{
console.log(`falsy val`);
}

// under truthy //

let value = "o";

if (value) {
    console.log(`truthy`);
}

else{
    console.log(`falsy`);
}


/// TERNARY OPERATORS ///

//  A shortcut for an if else statement //
// EG1//

let hot = true

hot? console.log(`weather is hot outside`): console.log(`weather is cold`);

//EG2//

let subscribed = true
let loggedInn = true
let str = subscribed && loggedInn ?
`show the video` : `hide the video`
console.log(str); 





































// let cash = 50 
// let price = 40
// let isStoreOpen = true 

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
// console.log(str);