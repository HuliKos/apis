// const { default: axios } = require("axios");

function buttonClick (evt) {
    evt.preventDefault();
    console.log(`button clicked`)
}

let buttonClicked = document.querySelector('button')
buttonClicked.addEventListener('click',buttonClick)

const callback () =>{
    let {residents} = planets

    for(i=0; i<residents.length; i++)
    
    console.log(residents[i])
} 

const getAlderaan = () => axios.get('https://swapi.dev/api/planets/?search=alderaan').then(callback)