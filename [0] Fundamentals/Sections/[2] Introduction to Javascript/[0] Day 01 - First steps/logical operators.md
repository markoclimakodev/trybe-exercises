# Logical operators
Boolean values can be either "true" or "false". They will be extremely important for constructing logic when developing our applications.
The next tool we will learn for our work are logical operators. They are not only used in programming, but in the study of logic itself and in everyday life. The main functionality of these operators is to determine the logic between two values or two variables.
In the JavaScript language, there are three main logical operators: &&, ||, and !. We can refer to them as "AND", "OR", and "NOT", respectively."

<br>

# AND operator
The "AND" operator (or && in JavaScript) is binary, which means it requires two elements to work correctly and returns true if both operands are true, and false otherwise.

```javascript 
let food = 'grilled bread';
let drink = 'coffee';

if (drink === 'coffee' && food === 'grilled bread') {
console.log('Thank you very much for the meal :)');
} else {
console.log('I think there was a mistake with my order');
}
```
<br>

# OR operator
The "OR" operator (or || in JavaScript) is binary, which means it requires two elements to work correctly and returns true  if at least one of the operations are true, and false if both operations is false;

```javascript 
let age = 17;
let hasLicense = true;

if (age >= 18 || hasLicense) {
  console.log("You can legally drive!");
} else {
  console.log("You cannot legally drive.");
}
```
<br>

# NOT operator
The "NOT" operator (or || in JavaScript) is a unary operator, is used to invert a boolean value, if a variable has the value true, applying the ! operator to it will make it false. And if a variable has the value false, applying the ! operator to it will make it true.

```javascript 
let isSunny = true;
let isRainy = !isSunny; // isRainy now has the value false

```

# Operator Precedence

Another important point to understand is the precedence of operators. The operator precedence determines how operators are analyzed in relation to each other. Operators with higher precedence become operands of operators with lower precedence, meaning that the lower-precedence operator works with the result of the higher-precedence operator.

Consider the following code:
```javascript 
console.log(10 + 5 * 5); // 10 + 25
```
In this code, first the multiplication 5 * 5 is performed, whose result is 25. Then, the sum of the result of this multiplication with 10 is performed, that is, 25 + 10.

Just like in math, multiplication is performed first and then addition. Therefore, the output of this code is 35.