const parent_node = document.querySelector('#first-child').parentNode
const element_node = document.querySelector('#first-child').parentElement

const childList = document.querySelector('#parent').childNodes;


console.log('parent node',parent_node)
console.log('element node', element_node)

console.log(childList)



console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>