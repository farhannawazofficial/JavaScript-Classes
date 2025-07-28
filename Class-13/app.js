

// // genreate the 1 number
// let randomNumber = Math.floor((Math.random() * 6) + 1)
// console.log (randomNumber)

// // Math.random()
// // Math.round()
// // Math.floor()
// // Math.ceil()
 

// function convertToFahrenheit() {
//   let celsiusInput = document.getElementById("celsius").value;
//   let celsius = parseFloat(celsiusInput);

//   if (isNaN(celsius)) {
//     document.getElementById("result").innerText = "Please enter a valid number.";
//     return;
//   }

//   let fahrenheit = (celsius * 9/5) + 32;
//   document.getElementById("result").innerText = 
//     `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
// }


function generateOTP() {
  let otp = Math.floor(1000 + Math.random() * 9000);
  console.log("Your OTP is:", otp);
  return otp;
}

generateOTP();
