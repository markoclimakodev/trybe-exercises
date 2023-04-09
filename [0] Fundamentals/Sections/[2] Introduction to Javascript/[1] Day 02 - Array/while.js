
let data = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', data);
let data2 = Math.ceil(Math.random() * 6);

while (data !== data2) {
  data2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', data2);
}
