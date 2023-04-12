// products selector 
const cardsParent = document.querySelector('.Allcards'),
      meatcardsParent = document.querySelector('.meatcards'),
      cheasecardsParent = document.querySelector('.cheaseCards'),
      qoziqornliCardsParent = document.querySelector('.qoziqornliCards'),
      spicyCardsParent = document.querySelector('.spicyCards')


// request
const allCards = async (resourse) => {
const request = await fetch(resourse)
const data = await request.json()
return data
}
const url = 'http://localhost:7777/barcha-pitsalar'
allCards(url)
.then(data => AllPitsa(data))


const meatCards = async(resourse) => {
  const request = await fetch(resourse)
  const data = await request.json() 
  return data
}
const url2 = 'http://localhost:7777/goshtli'
meatCards(url2)
.then(data => meatCardsRoot(data))


const cheaseCards = async (resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  
  return data
}
const url3 = 'http://localhost:7777/pishloqli'
cheaseCards(url3)
.then(data => cheaseCardsRoot(data))


const qoziqorinliCards = async(resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  return data
}
const url4 = 'http://localhost:7777/qoziqorinli'
qoziqorinliCards(url4)
.then(data => qoziqornliCardsRoot(data) )


const spicyCards = async (resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  return data
}

const url5 = 'http://localhost:7777/achchiq'
spicyCards(url5)
.then(data => spicyCardsRoot(data))


const getFormodal = async (resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  return data
} 

function itemId(id) {
  const urlModal = `http://localhost:7777/barcha-pitsalar/${id}`
  getFormodal(urlModal)
  .then(data => modalContent(data))
}


function modalContent(data) {
  const modalImg = document.querySelector('#madalImg'),
        modalTitle = document.querySelector('.modalTitle'),
        modalText = document.querySelector('.modalText'),
        modalPrice = document.querySelector('.modal-price')


        modalImg.src = data.image;
        modalPrice.textContent = data.price;
        modalText.textContent = data.description;
        modalTitle.textContent = data.title;


}

// hasbik 
let hasbik = 0; 
let currPrice = 0;


const plus = document.querySelector('.plus'),
minus = document.querySelector('.minus')
plus.addEventListener('click', () => {
  const count = document.querySelector('.sanoq')
  const modalPrice = document.querySelector('.modal-price') 
  const modalInteger = parseInt(modalPrice.textContent)
  hasbik++
  count.textContent = hasbik;

  console.log(count);

  currPrice += modalInteger
  modalPrice.textContent = currPrice.toFixed(3) + '  ' + 'UZS'
  
})
minus.addEventListener('click', () => {
  const count = document.querySelector('.sanoq')
  const modalPrice = document.querySelector('.modal-price') 
  const modalInteger = parseInt(modalPrice.textContent)
  hasbik++
  count.textContent = hasbik;

  console.log(count);

  currPrice += modalInteger
  modalPrice.textContent = currPrice.toFixed(3) + '  ' + 'UZS'
  
})



// hrml root render 
function render(htmlRoot,data) {
  data.forEach( (item,id) => {
    htmlRoot.innerHTML += `
    
    <div class="cards-item id="${item.id}">
    <div class="cards-item__img" id="${item.id}">
    <img src="${item.image}" alt="${item.title}" class="cards-item__img-image" id="${item.id}">
    </div>
    <div class="cards-item__text" id="${item.id}">
      <h4 class="cards-item__text__title" id="${item.id}">${item.title}</h4>
      <p class="cards-item__text__descr" id="${item.id}">
        ${item.description.slice(0,70) + '...'}
      </p>
    </div>
    <div class="cards-item__button" id="${item.id}">
      <b class="price" id="${item.id}">
        ${item.price}
      </b>
       <span id="${item.id}"></span>
    </div>
  </div>
    `
  });
}



document.body.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('cards-item') ||
    e.target.classList.contains('cards-item__img') ||
    e.target.classList.contains('cards-item__img-image') ||
    e.target.classList.contains('cards-item__text') ||
    e.target.classList.contains('cards-item__text__descr') ||
    e.target.classList.contains(' cards-item__button') 
    ) {
      itemId(e.target.id)
    }  
})



function AllPitsa(data){
render(cardsParent,data)
}


function meatCardsRoot(data) {
render(meatcardsParent,data)
}

function cheaseCardsRoot(data) {
  render(cheasecardsParent,data)
}


function qoziqornliCardsRoot(data) {
  render(qoziqornliCardsParent, data)
}

function spicyCardsRoot(data) {
  render(spicyCardsParent, data)
}



// tabs 
const tabs = document.querySelectorAll('.tabs-item'),
      rootItems = document.querySelectorAll('.root')
console.log(tabs,rootItems);
      tabs.forEach((item,id) =>{
        item.addEventListener('click', () => {
          rootItems.forEach((root,i) => {
            if (id === i) {

              tabs[i].classList.add('active')
              root.classList.remove('hidden')
            } else{
              tabs[i].classList.remove('active')
              root.classList.add('hidden')
            }
          })
        })
      })



// open modal
const madolField = document.querySelector('.madol-field')
document.body.addEventListener('click', (e) => {
if (
  e.target.classList.contains('cards-item') ||
  e.target.classList.contains('cards-item__img') ||
  e.target.classList.contains('cards-item__img-image') ||
  e.target.classList.contains('cards-item__text') ||
  e.target.classList.contains('cards-item__text__descr') ||
  e.target.classList.contains(' cards-item__button') 
  ) {
  madolField.classList.remove('hidden')
  const cards = document.querySelectorAll('.cards-item')
  
}
})


// close modal 
const arrowCLose  = document.querySelector('.arrow')
arrowCLose.addEventListener('click', () => {
  madolField.classList.add('hidden')

})

madolField.addEventListener('click', (e) => {
    if (e.target.classList.contains('madol-field')) {
      madolField.classList.add('hidden')
    }
})

window.addEventListener('keyup', (e) => {
  if (e.key  === 'Escape') {
    madolField.classList.add('hidden')
  }
});



const searchInput = document.querySelector('#search')


searchInput.addEventListener('input', () => {
const cardTitles = document.querySelectorAll('.cards-item__text__title')

cardTitles.forEach(title => {
  if (title.textContent.toLowerCase().includes(searchInput.value.toLowerCase().trim())) {
     title.parentElement.parentElement.classList.remove('hidden')
  }else{
    title.parentElement.parentElement.classList.add('hidden')
  }
});

});



document.body.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('cards-item') ||
    e.target.classList.contains('cards-item__img') ||
    e.target.classList.contains('cards-item__img-image') ||
    e.target.classList.contains('cards-item__text') ||
    e.target.classList.contains('cards-item__text__descr') ||
    e.target.classList.contains(' cards-item__button') 
    ) {
      console.log()
    }
});


let korzinka = document.getElementById('korzinka')
let modalkorzin = document.querySelector('.modalkorzin')
let wrapper = document.querySelector('.wrapper')

korzinka.addEventListener('click', ()=>{

  console.log("working");
  modalkorzin.classList.remove('hidden')
  madolField.classList.remove('hidden')
  wrapper.classList.add('hidden')
})

let data = 0;
document.getElementById("root").innerText = data;

function decrement(){
    data = data - 1;
    document.getElementById("root").innerText = data;
}
function increment() {
    data = data+1;
    document.getElementById("root").innerText = data;
}