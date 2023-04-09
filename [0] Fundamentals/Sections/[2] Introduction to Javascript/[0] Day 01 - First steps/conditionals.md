# Conditional statements
Conditional statements are used to execute different actions based on different conditions. 
There are three types of conditional statements in JavaScript:

## if statement: 
The if statement is used to execute a block of code if a specified condition is true.

```javascript
let number = 10;
if (number > 5) {
  console.log("number is greater than 5");
}
```

## if-else statement: 
The if-else statement is used to execute one block of code if a specified condition is true and another block of code if it is false.

```javascript
let number = 2;
if (number > 5) {
  console.log("number is greater than 5");
} else {
  console.log("number is less than or equal to 5");
}

```

## 🚀 To practice

Create a variable that receives a person's score in a technical challenge and assigns a value between 1 and 100 to it.

Implement logic to check if the candidate has been approved, rejected, or placed on a waiting list. Consider the following information:

- If the score is greater than or equal to 80, print "Congratulations, you are part of the approved group!"
- If the score is less than 80 and greater than or equal to 60, print "You are on our waiting list."
- If the score is less than 60, print "Unfortunately, you failed."

Create a conditional structure using if, else if, and else to create your algorithm and the logical operators that apply to each situation.

Change the value of the score to check if the conditions you have implemented work.

[ Ex: Implement logic to check if the candidate has been approved, rejected, or placed on a waiting list](ifelse.js)
