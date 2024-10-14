async function getNightcrawler(){
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=nightcrawler&limit=1&ts=1&apikey=eed80ca7412bb4d9fb5325f1f50453d0&hash=3104267868a886eae2f5db79822449d8`)
    const marveldata = await response.json()
    return marveldata
}

document.addEventListener('DOMContentLoaded', async()=>{
    const nightcrawlerdata = await getNightcrawler()
    console.log(nightcrawlerdata.data.results[0].name)
})

//-------------------------------------------------------------------------------------------------------------


