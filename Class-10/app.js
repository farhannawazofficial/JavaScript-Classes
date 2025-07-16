// // Strick Loop
// // let h1 = document.getElementById("heading");
// let firstName = ["Farhan", "Zaheer", "Ali", "Ahmad"]
// let lastName = ["Khan" , "Ali", "Nawaz", "Eahman"]
// for (let i = 0; i <= firstName.length; i++) {
//     for (let j = 0; j <= lastName.length; j++) {
//         // h1.innerHTML = firstName[i] + " " + lastName[j]
//         console.log(firstName[i] + " " + lastName[j])

//     }
// }



// let person = "Farhan";
// let rounds = 5;

// let outputDiv = document.getElementById("output");

// for (let i = 1; i <= rounds; i++) {
//   let roundTitle = document.createElement("h3");
//   roundTitle.textContent = "Round " + i;
//   outputDiv.appendChild(roundTitle);

//   let water = document.createElement("p");
//   water.textContent = person + " drank 2 glasses of water";
//   outputDiv.appendChild(water);

//   let pushups = document.createElement("p");
//   pushups.textContent = person + " did 10 pushups";
//   outputDiv.appendChild(pushups);

//   let squats = document.createElement("p");
//   squats.textContent = person + " did 5 squats";
//   outputDiv.appendChild(squats);
// }


// let person = "Farhan";
// let rounds = 5;

// for (let i = 1; i <= rounds; i++) {
//   console.log("Round " + i);
//   console.log(person + " drank 2 glasses of water");
//   console.log(person + " did 10 pushups");
//   console.log(person + " did 5 squats");
//   console.log("------------------------------");
// }



let size = 5;

for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + "* ";
  }
  console.log(row, i);
}
