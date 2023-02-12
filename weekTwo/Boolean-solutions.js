/** 1)
 * 
 * 
 *Movie Rating Explanation:

We have defined two variables goodMovieThreshold and greatMovieThreshold to store the minimum rating required for a movie to be considered good or great respectively.Then, we use these thresholds to check if the movieRating is greater than or equal to them, and store the result in two new constants isGoodMovie and isGreatMovie.
Finally, we use console.log to print the result of both checks.
Note: You can replace the value of movieRating with any other value to see how the results change. **/
var movieRating = 9;
var goodMovieThreshold = 7;
var greatMovieThreshold = 8;

var isGoodMovie = movieRating >= goodMovieThreshold;
var isGreatMovie = movieRating >= greatMovieThreshold;

console.log(`Did I watch a good movie? ${isGoodMovie}`);
console.log(`Did I watch a great movie? ${isGreatMovie}`);

/** 2)
 * Shopping Spree:

We have defined three constants money, itemCost, and storeOpen to store the amount of money we have, the cost of the items we want to buy, and whether the stores are open or not respectively.
Then, we use the boolean operator && to check if both conditions are true, i.e., if money is greater than or equal to itemCost and if storeOpen is true. The result of this check is stored in the constant canBuyItems.
Finally, we use console.log to print the result of the check.
Note: You can replace the values of money, itemCost, and storeOpen with other values to see how the results change. */

const money = 100;
const itemCost = 50;
const storeOpen = true;

const canBuyItems = money >= itemCost && storeOpen;

console.log(`Can I buy all the items I want? ${canBuyItems}`);


/** 3)
 * Lunchtime?:

We have defined three constants currentTime, lunchStart, and lunchEnd to store the current time, the start time for lunch, and the end time for lunch respectively.
Then, we use the boolean operator && to check if both conditions are true, i.e., if currentTime is greater than or equal to lunchStart and less than lunchEnd. The result of this check is stored in the constant isLunchTime.
Finally, we use console.log to print the result of the check.
Note: You can replace the value of currentTime with any other value to see how the result changes.
*/
var time = 11;
var isLunchTime = time >= 12 && time <= 13;
console.log(isLunchTime);
/**
 * 
 * Explanation:

In this code, we have declared a variable time and assigned it a value of 11.
Then, we declared another variable lunchtime which will hold the result of the condition to check if the current time is between 12 PM and 1 PM.
The condition is time >= 12 && time <= 13, which uses the greater than or equal to operator (>=) and the less than or equal to operator (<=) to check if the value of time is between 12 and 13. The && operator is used to ensure that both conditions are met (i.e. the time must be greater than or equal to 12 and less than or equal to 13).
Finally, we use console.log to print the result of the condition to the console.
 */



/** 4)
 * Bonus Question:
 * 
let a = 5;
let b = 3;
let c = 4;
let d = 2;

console.log((a > b) || (b > d && c > d));