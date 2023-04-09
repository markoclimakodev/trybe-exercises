# While
Unlike for, while executes the iteration with only one condition. As long as this condition is true,<br>
 the scope content of while is fulfilled, and when a false condition is found, the block is terminated. <br>
 For example:
 ```javascript
let counter = 0;
while(counter !== 5) {
  counter += 1;
}
 ```
 In this case, the while loop will be executed until the condition is no longer true,that is, <br> until the counter variable reaches the value 5.
 If the initial value were 6, it would enter <br> an infinite loop and could even crash the computer.