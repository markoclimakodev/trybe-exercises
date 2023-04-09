# for of
The for...of statement allows creating loops over iterable objects such as strings, arrays, and others.
```javascript
let numbers = [1,2,3,4,5];
for(let number of numbers) {
  console.log(number);
}  
//1
//2
//3
//4
//5
```
The `for/of` loop allows iterating over the values of properties and returns the numbers within the `'numbers'` array.
<br>
<br>

Another example.
```javascript
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// 
// "H"
// "e"
// "l"
// "l"
// "o"
```

<br>
<br>

With `for/of`, it is possible to add a value to each element of the array and return it in the following way:
```javascript
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
```
**`It's important to note that the for/of loop will not modify the array, but rather retrieve the values within it, adding 1 to the sum.`**

## 🚀 To practice
Use the for/of loop to print the elements of the names list with console.log(): 
```javascript
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
 for (let name of names) {
  console.log(name)
 }

```