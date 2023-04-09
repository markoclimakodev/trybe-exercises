/**
 5 🚀 Use if/else to write a code that defines three variables with the values of the three interior angles of a triangle.

Return true if the angles represent the angles of a triangle and false otherwise. If any angle is invalid, you should return an error message.
 */

let angleA = 60;
let angleB = 60;
let angleC = 60;

if (angleA + angleB + angleC === 180) {
  console.log(true);
} else {
  console.log('Angles do not form a triangle');
}