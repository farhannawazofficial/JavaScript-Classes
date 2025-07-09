// let num1 = +prompt("enter your first number");
// let num2 = +prompt("enter your secound number");
// let h1 = document.getElementById("heading-1")
// if (num1 === 0) {
//     h1.innerHTML = "Your have enter Zero"
// } 
// else if (num2 === 0) {
//     h1.innerHTML = "Your have enter Zero"
// }
// else if (num1 > num2) {
//     h1.innerHTML = num1
// }
// else {
//     h1.innerHTML = num2
// }


// Nadra Example

// let checkAge = 18
// let docCheck = "Father CNIC"

// if (checkAge === 18 && docCheck === "Father CNIC") {
//     console.log("yor are eligiable")
// }
// else {
//     console.log("Your are not eligiable")
// }



// let card = prompt("enter card name")
// let employe = +prompt("enter a year in your card")
// let h1 = document.getElementById("heading-1")
// if (employe === 2025 && card === "farhan") {
//     h1.innerHTML = "You are present"
// }
// else{
//     h1.innerHTML = "Renew the id card"
// }



// let a = 12;
// let b = 75;d
// let c = 63;

// let h1 = document.getElementById("heading-1");

// if (a > b && a > c) {
//     h1.innerHTML = "The greatest number is: " + a;
// } else if (b > a && b > c) {
//     h1.innerHTML = "The greatest number is: " + b;
// } else if (c > a && c > b) {
//     h1.innerHTML = "The greatest number is: " + c;
// } else {
//     h1.innerHTML = "Do number same hay";
// }


// let city = ["Karachi", "Multan", "Islamabad", "Pashware" ]
// // city.push("farhan")
// // city.unshift("ali")
// // city.pop()
// // city.shift()
// // city.splice(2,2)

// console.log(city.indexOf("Islamabad"))
// console.log(city)


let students = ["Ali", "Farhan", "Ahmed"];



let h1 = document.getElementById("heading-1");

if (students.indexOf("Ali") !== -1) {
    h1.innerHTML = "Student found: " ;
} else {
    h1.innerHTML = "Student does not exist.";
}

