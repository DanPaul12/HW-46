async function getNightcrawler(marvelname){
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${marvelname}&limit=1&ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
    const marveldata = await response.json()
    return marveldata
}

document.addEventListener('DOMContentLoaded', async ()=>{
    const nightcrawlerdata = getNightcrawler('nightcrawler')
    const NcElement = document.getElementById("character")
    NcElement.innerHTML = `
    <h2>${nightcrawlerdata.data.results[0].name}</h2>`
})