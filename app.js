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





































// let cash = 50 
// let price = 40
// let isStoreOpen = true 

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
// console.log(str);