# Switch and Case

In switch/case, you put what should be analyzed inside the switch, and then create conditionals with the case. See the following example:

```javascript
// In this example, the "switch/case" statement will print in the console the classification
// of movies that can be watched according to people's age range.

let ageRange = 'adult';

switch (ageRange) {
  case 'adolescent':
    console.log('Check the movie rating');
    break;

  case 'adult':
    console.log('Adults are classified to watch any movie');
    break;

  case 'elderly':
    console.log('Elderly people are classified to watch any movie');
    break;

  default:
    // Note that it is not necessary to use the break statement after the default. Since all the code
    // has already been executed, it is not necessary to interrupt its operation.
    console.log('Can only watch movies rated for all ages');
}
```


