const $ = (id) => {return document.getElementById(id)}
window.onload = (e) => { 
    const tagleLoading = () => {
        const barDiv = document.querySelector('.barDiv')
        const loading = document.createElement('div')
        loading.className = 'loadingBar'
        barDiv.appendChild(loading)
        const collectingText = document.querySelector('.loadingBar')
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
                // All I want to do with the data goes down here
                const userInput = document.querySelector('#title')
                let placeHolderVal = userInput.value
                // console.log(placeHolderVal)
                const getTitles = () => {
                    let titles = []
                    for (let i = 0; i < data.results.length; i++) {
                        const arrays = data.results[i]
                        let titleInArray = arrays.title.toLowerCase()
                        titles.push(titleInArray) // is been used just to know the titles
                        if (titleInArray.includes(placeHolderVal.toLowerCase())) {
                            //Down here asign values to DOM using arrays.
                            // console.log(arrays)
                            // console.log(arrays.director)
                            document.querySelector('.title').innerText = arrays.title
                            document.querySelector('.episode').innerText = arrays.episode_id
                            document.querySelector('.opening').innerText = arrays.opening_crawl
                            document.querySelector('.director').innerText = arrays.director
                            document.querySelector('.producer').innerText = arrays.producer
                            console.log(arrays)
                        }
                    }
                    return titles
                }
                getTitles()
                // console.log(getTitles())
                // console.log(placeHolderVal)
                // console.log(getTitles())
                // console.log(data.results)
                // console.log(data.results[1])
                // if (titles.includes(placeHolderVal)) {
                //     //assing place holder to the title dot notation and use it as a key to access values in that object
                //     //the index of titles[] is the indexOF the results array of objects
                // }
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
        });
    }
    document.querySelector('#submit').addEventListener('click', (e) => {
        e.preventDefault()
        tagleLoading()
        fetchData()

    })
}