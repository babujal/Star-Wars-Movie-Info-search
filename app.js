const $ = (id) => {return document.getElementById(id)}
const getElByClass = (elClass) => {return document.querySelector(elClass)}
window.onload = (e) => { 
    const taggleLoading = () => {
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
                        if ((titleInArray.includes(placeHolderVal.toLowerCase())) || (titleInArray.includes(getElByClass('.imgWrap').innerText))) {
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
        //bellow call the function for loading bar
        taggleLoading()
        //bellow calling the fetch data function
        fetchData()
        //bellow removes opening text when a new search is done so isn't x2
        getElByClass('.opening').remove()
    })

    //Assign a value to the place holder for the event listener in the cards
    const asignValue = (param) => {
        const img1 = getElByClass(param)
        const img1Text = img1.innerText
        const userInput1 = document.querySelector('#title')
        return userInput1.value = img1Text
        taggleLoading()
        fetchData()
        getElByClass('.opening').remove()
    }
    //To call function outside of event listener
    const callFunc = () => {
        taggleLoading()
        fetchData()
        getElByClass('.opening').remove()
    }
    //Event listener for the cards
    document.querySelector('.imgWrap1').addEventListener('click', () => {
        asignValue('.imgWrap1')
        callFunc()
    })
    document.querySelector('.imgWrap2').addEventListener('click', () => {
        asignValue('.imgWrap2')
        callFunc()
    })
    document.querySelector('.imgWrap3').addEventListener('click', () => {
        asignValue('.imgWrap3')
        callFunc()
    })
    document.querySelector('.imgWrap4').addEventListener('click', () => {
        asignValue('.imgWrap4')
        callFunc()
    })
    document.querySelector('.imgWrap5').addEventListener('click', () => {
        asignValue('.imgWrap5')
        callFunc()
    })
    document.querySelector('.imgWrap6').addEventListener('click', () => {
        asignValue('.imgWrap6')
        callFunc()
    })
}

