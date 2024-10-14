async function getNightcrawler(marvelname){
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${marvelname}&limit=1&ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
    const marveldata = await response.json()
    return marveldata
}

document.addEventListener('DOMContentLoaded', async ()=>{
    const nightcrawlerdata = await getNightcrawler('nightcrawler')
    const NcElement = document.getElementById("character")
    NcElement.innerHTML = `
    <h2>${nightcrawlerdata.data.results[0].name}</h2>
    <img src = ${nightcrawlerdata.data.results[0].thumbnail.path}.jpg>
    <h3>Issues featuring Nightcrawler</h3>
    <ul>
        <li>${nightcrawlerdata.data.results[0].comics.items[0].name}</li>
        <li>${nightcrawlerdata.data.results[0].comics.items[1].name}</li>
        <li>${nightcrawlerdata.data.results[0].comics.items[2].name}</li>
    </ul>`
})

//------------------------------------------------------------------------------

let counter = 10

const timefunc = setInterval(function(){
    timer = document.getElementById("timer")
    counter--
    timer.innerHTML = `Time: ${counter}`
    if (counter === 0){
        timer.innerHTML = `Time's up!`
        clearInterval(timefunc)
    }
},1000)

/* ^^^ Could you show me how I should have used setTimeout here instead? */

setTimeout(function(){
    alert('Whatcha doin')
}, 5000)

let notif = setInterval(function(){
    let sign = prompt("Should I be dismissed?");
        if (sign.toLowerCase() === "yes") {
            clearInterval(notif)
        }
    }, 6000)

/* ^^^ Did I do this right? I wasn't sure what it meant to make it stop after user dismisses notification*/




