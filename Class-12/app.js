// window.onload = function() {
//     let disMonth = ["jan", "feb", "mar", "apr", "may", "jun"];
//     let userBirthMonth = prompt("Enter your Birthday month");

//     userBirthMonth = userBirthMonth.toLowerCase().slice(0, 3);
//     let birthMonth = false;

//     let p = document.getElementById("text");
//     for (let i = 0; i < disMonth.length; i++) {
//         if (disMonth[i] === userBirthMonth) { // Fixed comparison logic
//             birthMonth = true;
//             break;
//         }
//     }

//     if (birthMonth) {
//         p.innerHTML = "You are eligible for the birthday discount!";
//     }
//     else {
//         p.innerHTML = "Sorry apny paida hony mei dair krdi";
//     }
// };




let dumyText = `War is a devastating conflict that brings destruction, pain, and loss. It affects not only soldiers on the battlefield but also innocent civilians. Homes are destroyed, families are torn apart, and peace becomes a distant dream. While some fight for freedom or justice, the cost of war is always high, reminding us of the value of peace.`;

let textToBechanged = "The Second World War";

// Use regular expression with 'gi' flag to replace all occurrences (case-insensitive)
let updatedText = dumyText.replace(/war/gi, textToBechanged);

console.log(updatedText);
