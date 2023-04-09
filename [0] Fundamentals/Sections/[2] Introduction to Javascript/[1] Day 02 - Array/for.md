# For

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

# Syntax
```javascript
//  initialization | condition | increment/ decrement
for (let index = 0; index < 5 >; index += 1)
 console.log(index);
 // code to be executed while the condition is true
```

Although it is a language feature, the use of the increment operator (`++`) is not recommended. The biggest problem is that, although its main use is to generate a side effect, this operator always returns a value. In addition, the expressions (`++x`) and (`x++`), although easily confused because they use the same operator and have the same side effect, return different values.
Taking this into consideration, the use of this operator can generate confusion and cause unexpected bugs. Therefore, since `+= 1` completely replaces `++`, the exclusive use of `+= 1` is recommended.

## 🚀 To practice
Use the for loop to print the elements of the groceryList array with console.log():
```javascript
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index <groceryList.length; index += 1) {
  console.log(groceryList[index]);
}
```