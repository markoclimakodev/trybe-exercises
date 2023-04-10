# Functions
Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar <br> 
to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to <br> 
qualify as a function, it should take some input and return an output where there is some obvious  <br> 
relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish <br>
to call it.


## Syntax

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, { }.

```javascript
function sum(number1,number2) {
  return number1 + number2;
}
```

## Function parameters
Parameters are passed to functions by value, so if the code within the body of a function assigns a completely new  <br> 
value to a parameter that was passed to the function, `the change is not reflected globally or in the code which` <br> 
`called that function.`
When you pass an object as a parameter, if the function changes the object's properties, that change is  <br> visible outside 
 the function, as shown in the following example:
```javascript
const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar) // { make: 'Honda', model: 'Accord', year: 1998 }

function changeObject(object) {
 return object.make = 'Toyota';
}

changeObject(mycar);

console.log(mycar);  // { make: 'Toyota', model: 'Accord', year: 1998 }

```
 <blockquote style="font-size: 16px; border-left: 5px solid #2cccF3; padding: 8px;">
  <p>Functions can be defined to receive or not receive parameters.</p>
</blockquote>

<br>

# Functions – Reduction of complexities

Uncle Bob, apelido de Robert Cecil Martin, autor do livro Código Limpo, diz o seguinte sobre funções:

 <blockquote style="font-size: 16px; border-left: 5px solid #2cccF3; padding: 8px;">
  <p>"The first rule of functions is that they should be small. The second rule of functions is that they should be even smaller."</p>
</blockquote>
