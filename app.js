const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0) {
  console.log("plz write down a number");
} else if (age < 18) {
  console.log("you cannot drink");
} else if (18 <= age && age <= 50) {
  console.log("you can drink");
} else if (age >= 50 && age <= 80) {
  console.log("it would be dangerous to drink");
} else {
  console.log("never drink");
}
