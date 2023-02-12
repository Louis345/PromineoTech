//Question 1

// Declare variables for the amount of money you have and the cost of a soda
var money = 4;
var costOfSoda = 2;

// Use an if statement to check if there is enough money to buy a soda
if (money >= costOfSoda) {
    console.log("I can buy a soda!");
} else {
    console.log("I need to earn some more money!");
}


//Question 2
/**
In this example,
 we have a variable age which is assigned the value 20 and another variable ticketPrice which is assigned the value 10. Then, we have an if-else statement which checks if the value of age is greater than or equal to 18. If the condition is true, then the message You are old enough to buy a ticket, it costs 10 dollars is logged to the console using console.log(). On the other hand, if the condition is false, the message You are not old enough to buy a ticket, you need to be 18 or older is logged to the console.
*/
let age = 20;
let ticketPrice = 10;

if (age >= 18) {
    console.log(`You are old enough to buy a ticket, it costs ${ticketPrice} dollars.`);
} else {
    console.log(`You are not old enough to buy a ticket, you need to be 18 or older.`);
}


//Question 3
/**The switch statement is used to determine the value of flavorName based on the value of flavorNumber.
The case statements are used to compare the value of flavorNumber to the various options (1, 2, 3, 4).
When a match is found, the corresponding flavor name is assigned to flavorName and the break statement is used to exit the switch statement.
If none of the cases match, the code in the default block will be executed, which sets flavorName to "Invalid Flavor Number".
Finally, the value of flavorName is logged to the console using console.log().

*/
var flavorNumber = 2;
var flavorName;

switch (flavorNumber) {
    case 1:
        flavorName = "Vanilla";
        break;
    case 2:
        flavorName = "Chocolate";
        break;
    case 3:
        flavorName = "Strawberry";
        break;
    case 4:
        flavorName = "Mint Chocolate Chip";
        break;
    default:
        flavorName = "Invalid Flavor Number";
}

console.log(flavorName);


//Question 4
/**
 * In this solution, we use an if/else if statement to compare the value of the 
 * my
 * Snack variable to different strings representing different snacks. 
 * If the value of mySnack is equal to "pizza", the first console.log statement will run. 
 * If not, the program will move on to the next else if statement and compare mySnack to "sandwich". 
 * If the value of mySnack is equal to "sandwich", the second console.log statement will run. 
 * This process continues until a match is found, or the else statement runs because no matches were found.
*/

let mySnack = "pizza";

if (mySnack === "pizza") {
    console.log("Yummy! Pizza is my favorite snack!");
} else if (mySnack === "sandwich") {
    console.log("A classic choice! I love sandwiches!");
} else if (mySnack === "apple") {
    console.log("Healthy choice! Apples are delicious.");
} else {
    console.log("Hmm, I'm not sure what that snack is.");
}

//Question 5
/**
 * 
 * 
 *  First, we declare two variables num1 and num2 with the values 7 and 9 respectively.
Then, we use an if-else statement to compare the values of num1 and num2.
If num1 is smaller than num2, num1 will be logged to the console.
If num2 is smaller than num1, num2 will be logged to the console.
If num1 and num2 are equal, the message "num1 is equal to num2" will be logged to the console.
   */
let num1 = 7;
let num2 = 9;

if (num1 < num2) {
    console.log(num1);
} else if (num2 < num1) {
    console.log(num2);
} else {
    console.log("num1 is equal to num2");
}
