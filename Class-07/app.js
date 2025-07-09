// let h1 = document.getElementById("change-text");
// h1.interHTML = "Changed"
//  console.log(h1)


// function addPara (){
//     let number1 = +prompt("Enter your first Number");
//     let number2 = +prompt("Enter Your Secound Number");
//     let sum = number1 + number2
//     let p = document.getElementById("para")
//     let show = p.innerHTML = "Added Your is " + sum
//     console.log(show)  
// }

// let age = +prompt("enter your age")

// if (age>=18) {
//     console.log("Your eligliable for CNIC")
    
// }
// else{
//     console.log("Your are a child")
// }

let h1 = document.getElementById("change-text")
let userNmae = prompt("Enter your User Name")

if (userNmae === "Talal") {
    h1.innerHTML = "WelCome Talal Mangment Potal !"
    // console.log("WelCome Talal Teacher Potal !")
    
}
else if (userNmae === "Wajid"){
    h1.innerHTML = "WelCome Wajid Mangment Potal !"
//    console.log("WelCome Wajid Mangment Potal !")
}
else if (userNmae === "Aftab"){
    h1.innerHTML = "WelCome Aftab Mangment Potal !"
//    console.log("WelCome Aftab Recp Potal !")
}

else if (userNmae ){
    h1.innerHTML = "WelCome Student Potal ! !"
//    console.log("WelCome Student Potal !")
}
else{
    console.log("Wrong Username")
}


let requird = "Islam"
let userRegligon = prompt("Enter Your Reglion ")
let h2 = document.getElementById("headingh2")
if(userRegligon !== requird){
    h2.innerHTML= "your are not allowed"
    // console.log("your are not allowed")
}
else{
    h2.innerHTML= "your got the visa"
    // console.log("your got the visa")
}