# Array
 Enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
 An array is a data structure that stores a collection of elements, typically of the same data type.
 Each element in an array is identified by an index starting at 0

 ## Methods Arrays
`length`: can be used with arrays in JavaScript to get the number of elements in the array.
```javascript
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); //  3
```
`push()`: The push() method adds one or more elements to the end of an array and returns the new length of the array.
```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.push('watermelon');
console.log(fruits); //  ['apple', 'banana', 'orange', 'watermelon']
```
`shift()`: The shift() method removes the first element from an array and returns that element. This method also shifts all the other elements in the array down by one index.
```javascript
let fruits = ['apple', 'banana', 'orange'];
let removedFruit = fruits.shift();
console.log(removedFruit); //  'apple'
console.log(fruits); //  ['banana', 'orange']
```
`unshift()`: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. This method also shifts all the other elements in the array up by one index.
```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.unshift('mango', 'kiwi');
console.log(fruits); // ['mango', 'kiwi', 'apple', 'banana', 'orange']
```
`pop()`: The pop() method removes the last element from an array and returns that element.
```javascript
let fruits = ['apple', 'banana', 'orange'];
let removedFruit = fruits.pop();
console.log(removedFruit); //  'orange'
console.log(fruits); //  ['apple', 'banana']
```
`slice()`: The slice() method returns a portion of an array as a new array. The portion to be extracted is specified by passing two arguments, the starting index and the ending index (exclusive).
```javascript
let fruits = ['apple', 'banana', 'orange', 'mango'];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); //  ['banana', 'orange']
```
`splice()`: The splice() method is used to add or remove elements from an array. It takes three arguments: the index at which to start changing the array, the number of elements to remove, and the new elements to add.
```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'mango', 'kiwi');
console.log(fruits); //  ['apple', 'mango', 'kiwi', 'orange']
```
`split()`: method is used to split a string into an array of substrings based on a specified separator.
```javascript
let phrase = "The quick brown fox jumps over the lazy dog";
let words = phrase.split(" ");
console.log(words); //  ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
```
`join()`: method is used to create a new string by concatenating all the elements in an array, separated by a specified separator.
```javascript
let fruits = ["apple", "banana", "orange"];
let fruitString = fruits.join(", ");
console.log(fruitString); //  "apple, banana, orange"

```
`indexOf()`: method is used to find the index of the first occurrence of a specified value in an array. If the value is not found, it returns -1.
```javascript
let fruits = ["apple", "banana", "orange"];
let index1 = fruits.indexOf("mango");
let index2 = fruits.indexOf("banana");
console.log(index); //  -1
console.log(index2); //  1

```
## 🚀 To practice
- Get the value 'Services' from the menu array.
- Retrieve the index of the value 'Portfolio' from the menu array.
- Add the value 'Contact' to the end of the menu array.
```javascript
let menu = ['Home', 'Services', 'Portfolio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu[3];

menu.push('Contact')

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu);
```