//loops

// let h1 = document.getElementById("text")
// for (let i = 0; i < 11; i++) {
//     h1.innerHTML = i
//     console.log("Hello World", i)

// }
// let loopStart = +prompt("enter Your start Number")
// let loopEnd = +prompt("enter Your end Number")

// for (let i = loopStart; i < loopEnd; i++) {
//     console.log(i)

// }


// let loopStart = +prompt("enter Your start Number")
// let loopEnd = +prompt("enter Your end Number")
// let iLaps = +prompt("which skips numers")

// for (let i = loopStart; i < loopEnd; i = i + iLaps) {
//     console.log(i)

// }


// let fruits = ["Apple", "Banana", "Pineapple"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log (fruits[i]);

// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }


let cleancitys = ["Karachi", "Islamabad", "Lahore", "Peshware"];
let userInput = prompt("enter your City")
if (cleancitys.indexOf(userInput) >= 0) {
    console.log("Your Live in a clean city")
}
else{
    console.log("you don`t live in a clean city ")
}