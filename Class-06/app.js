// let addedStudent = "fivthStudent"

// let student = {
//     firstStudent: "ali",
//     secoundStudent: "Ahmad",
//     thirdStudent: "Raza",
//     forthStudent: "syed",
// }
// let newStudent = (student[addedStudent], "Farhan", student)
// console.log(student[addedStudent], "Farhan", student)



//funcations
// function cook (){
//     console.log("Your Baryani is Ready")
// }
// cook()

// function sum (num1, num2){
//     console.log(num1 + num2)
// }
// sum(2,5)
// sum(7,5)

// enter your user data
// function sum (num1, num2){
//     console.log(num1 + num2)
// };

// let userinput1 = +prompt("enter Your first Number")
// let userinput2 = +prompt("enter Your secound Number")

// sum(userinput1, userinput2)

//taks
// function data (firstNmae, secoundName, ){
//     console.log("Welcome " + firstNmae, secoundName + "!")
// }
// let userinput1 = prompt("enter your first name")
// let userinput2 = prompt("enter your secound name")
// data(userinput1, userinput2)


// function userData (){
//     return "wellcome"
// }
// let data = userData()
// console.log(data)


// function greet(userName){
//     return "Welcome " + userName + "!"
// }
// function welcome(name){
//     let message = greet(name)
//     document.write(message)
//     console.log(message)
// }
// welcome("Farhan")


// function sum(num1, num2){
//     return  num1 + num2 
//     // return ("Addition is "+ num1 + num2 + "!")

// }
// function longsum(numdata1,numdata2){
//     let addition = sum(numdata1,numdata2)
//     console.log(addition)
// }
// let newlongsum1 = +prompt("Enter Your First Number")
// let newlongsum2 = +prompt("Enter Your Secound Number")
// longsum(newlongsum1, newlongsum2)


function topping  (toppings){
    return toppings + "topping"
}
function pizza (base, topping1,toping2){
    let Topping = topping1;
    let Topping2 = toping2;
    let fullTopping = Topping + " " + Topping2;
    let prompt = topping(fullTopping)
    return "Your " + base + " Pizza with" + prompt;
}
console.log(pizza("chieese Crust ", " Pepperoni" , " Mushrooms "))

