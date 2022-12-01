// const { default: axios } = require("axios");

// const { default: axios } = require("axios")

// const { default: axios } = require("axios");

let button = document.querySelector('button')

function buttonHandler () {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`).then(res => {
        console.log(res.data.results[0].residents)
        let {residents} = res.data.results[0]
        for (let i=0; i<residents.length; i++){
            axios.get(residents[i]).then(res =>{
                console.log(res.data.name)
                let h2 = document.createElement('h2')
                h2.textContent = res.data.name
                let body = document.querySelector('body')
                body.appendChild(h2)
            })
        }
    })
}

button.addEventListener('click',buttonHandler)