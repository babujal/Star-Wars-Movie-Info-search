const $ = (id) => {return document.getElementById(id)}
const getElByClass = (elClass) => {return document.querySelector(elClass)}
window.onload = (e) => { 
    const tagleLoading = () => {
        const barDiv = document.querySelector('.barDiv')
        const loading = document.createElement('div')
        loading.id = 'loadingBar'
        barDiv.appendChild(loading)
        const collectingText = document.querySelector('#loadingBar')
        collectingText.innerText = 'colecting data'
    } 

    const fetchData = () =>  {
        const endPoint = "https://swapi.dev/api/films/"
        fetch(endPoint)
            .then((response) => {
                // If the request wasn't ok it will throw an error specify bellow
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json()
            })
            .then((data) => {
                console.log(data)
                $('loadingBar').remove()
                // All I want to do with the data goes down here
                const userInput = document.querySelector('#title')
                let placeHolderVal = userInput.value
                    for (let i = 0; i < data.results.length; i++) {
                        const arrays = data.results[i]
                        let titleInArray = arrays.title.toLowerCase()
                        if (titleInArray.includes(placeHolderVal.toLowerCase())) {
                            //Down here asign values to DOM using arrays.
                            document.querySelector('.title').innerText = arrays.title
                            document.querySelector('.episode').innerText = arrays.episode_id
                            //Here I figured that it will be better for the openiing text to be created when needed
                            const openingWrap = document.querySelector('#openingWrap')
                            const opening = document.createElement('dl')
                            opening.className = 'opening'
                            openingWrap.appendChild(opening)
                            opening.innerText = arrays.opening_crawl
                            document.querySelector('.director').innerText = arrays.director
                            document.querySelector('.producer').innerText = arrays.producer
                        }
                    }
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
        });
    }
    document.querySelector('#submit').addEventListener('click', (e) => {
        
        e.preventDefault()
        tagleLoading()
        fetchData()
        //bellow removes opening text when a new search is done so isn't x2
        getElByClass('.opening').remove()

    })
}

document.querySelector('.opening').innerText = arrays.opening_crawl