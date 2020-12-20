// Assigning 0 to a place in memory
let myBankBalance = 0

myBankBalance = myBankBalance + 50 // 0 + 50 = 50
myBankBalance = myBankBalance + 100 // 50 + 100 = 150
myBankBalance = myBankBalance + 25 // 150 + 25 = 175

console.log("Your balance is: " + myBankBalance)
console.log('Your balance is: ' + myBankBalance)
console.log(`Your balance is: ${myBankBalance}`) // Do this!!


//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = `Clown`
let myFutureCity = `Toronto`
let annualSalary = 100000
let monthlySalary = annualSalary / 12
let companyName = `Laughs-R-Us`

// console.log("You will be a " + jobTitle + " in Y, making $N for Z.")

console.log(`You will be a ${jobTitle} in ${myFutureCity}, making $${annualSalary} ($${monthlySalary} per month) for ${companyName}.`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let curYear = 2020
let birthDay = 1986

console.log(`They are ${curYear - birthDay} years old.`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let curAge = 34
let maxAge = 150
let amtDaily = 5

console.log(`You will need ${(maxAge - curAge) * amtDaily} to last you until the ripe old age of ${maxAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

// Values
let radius = 5
let pi = Math.PI

// Computations
let cir = 2 * pi * radius
let area = pi * radius ** 2 

// 2 * Pi * r
console.log(`The circumference is ${cir}cm.`)

// Pi * r ** 2
console.log(`The area is ${area}cm.`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 38
let fahrenheitTemp = 100

console.log(`${fahrenheitTemp}°F is ${celsiusTemp}°C.`)
