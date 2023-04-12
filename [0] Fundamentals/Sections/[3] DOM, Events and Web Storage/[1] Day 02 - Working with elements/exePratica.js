const whereAreYou = document.querySelector('#where-are-you')
whereAreYou.parentNode.style.color = 'red';

const  firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerHTML = 'Hello, Tryber'

const firstChild =document.querySelector('#parent').firstElementChild;

const firstChildWhereAreYou = whereAreYou.previousElementSibling;
const attetion = whereAreYou.nextSibling;

const thirdChildWhereAreYou = whereAreYou.nextElementSibling;

const thirdChildParent = document.querySelector('#parent').lastElementChild.previousElementSibling
console.log(thirdChildParent)
