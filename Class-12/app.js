window.onload = function() {
    let disMonth = ["jan", "feb", "mar", "apr", "may", "jun"];
    let userBirthMonth = prompt("Enter your Birthday month");

    userBirthMonth = userBirthMonth.toLowerCase().slice(0, 3);
    let birthMonth = false;

    let p = document.getElementById("text");
    for (let i = 0; i < disMonth.length; i++) {
        if (disMonth[i] === userBirthMonth) { // Fixed comparison logic
            birthMonth = true;
            break;
        }
    }

    if (birthMonth) {
        p.innerHTML = "You are eligible for the birthday discount!";
    }
    else {
        p.innerHTML = "Sorry apny paida hony mei dair krdi";
    }
};




