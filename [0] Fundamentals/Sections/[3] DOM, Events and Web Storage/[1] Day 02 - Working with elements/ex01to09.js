const body = document.querySelector('body');
const h1 = document.createElement('h1');

h1.innerText = 'TrybeTrip - Agência de Viagens';
h1.classList.add('title')
body.appendChild(h1);

const main = document.createElement('main');
main.classList.add('main-content');
body.appendChild(main);

const classNames = {
  leftContent: 'left-content',
  centerContent: 'center-content',
  rightContent: 'right-content'
}
const getMain = document.querySelector('.main-content');

for (let className in classNames) {
  const section = document.createElement('section');
  section.classList.add(`${classNames[className]}`);
  getMain.appendChild(section)

}

const getCenterSection = document.querySelector('.center-content');
const p = document.createElement('p');
p.innerText = "Agoda hire me";
getCenterSection.appendChild(p)

const getLeftSection = document.querySelector('.left-content');
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.classList.add('small-image')

getLeftSection.appendChild(img)

const geRightSection = document.querySelector('.right-content');
geRightSection.style = 'margin-right: auto'

const ul = document.createElement('ul');

const fullNumber = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];

for (number of fullNumber) {
  let li= document.createElement('li');
  li.innerText = number.toUpperCase()
  ul.appendChild(li)
}

geRightSection.appendChild(ul);

for(let index = 0; index < 3; index += 1) {
  let h3 = document.createElement('h3');
  h3.classList.add('description')
  getMain.appendChild(h3)
}

getMain.removeChild(getLeftSection);

getCenterSection.parentNode.style.background = 'green'

const getUl = document.querySelector('ul');
getUl.lastChild.remove()
getUl.lastElementChild.remove()

