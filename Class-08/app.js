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



let card = prompt("enter card name")
let employe = +prompt("enter a year in your card")
let h1 = document.getElementById("heading-1")
if (employe === 2025 && card === "farhan") {
    h1.innerHTML = "You are present"
}
else{
    h1.innerHTML = "Renew the id card"
}