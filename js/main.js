//Recuperer l'addresse IP

// keys
const weatherKey = "07d06524f38e4601a78223627222301"
const unsplashKey = "qhk0xx7XagH1GYxZtFDMnPYWRPKpkf59UaYdoxj-vkA"
// keys

const body = document.querySelector('body')
const firstView = document.querySelector('.firstView')
const searchCity = document.querySelector('.searchCity')
const searchButton = document.querySelector('.searchButton')

fetch('https://ipwhois.app/json/')   
    .then(response => response.json())
    .then(response => {
        let address = response.ip
        searchCity.addEventListener('keydown', (event) => event.key === 'Enter' && searchButton.click());
        searchButton.addEventListener('click', () => {
            localStorage.setItem('locate', searchCity.value)
            //address = localStorage.getItem('locate'); 
        });
        var City = ""
        if (localStorage.getItem('locate') === null){
            City = address
        }else{
            City = localStorage.getItem('locate');
        }

        fetch('https://api.weatherapi.com/v1/current.json?key=' + weatherKey + '&q=' + City + '&aqi=no')
            .then(response => response.json())
            .then(data => {
                

                const cityName = document.createElement('div')

                const degArroundMe = document.createElement('div')

                const degCity = document.createElement('h1')

                const degCard = document.createElement('div')
                const degLogo = document.createElement('img')
                const degInfo = document.createElement('p')

                const buttonChange = document.createElement('div')
                const textButton = document.createElement('p')
                



                cityName.classList.add('cityName')
                const locationName = data.location.name
                degCity.innerHTML = locationName
                cityName.appendChild(degCity)
                firstView.appendChild(cityName)
                


                degArroundMe.id = 'degArroundMe'
                const locationCountry = data.location.country
                degCard.classList.add('degCard')
                degLogo.src = data.current.condition.icon
                degInfo.innerHTML = data.current.temp_c +'℃'
                degCard.appendChild(degLogo)
                degCard.appendChild(degInfo)
                degArroundMe.appendChild(degCard)
                firstView.appendChild(degArroundMe)



                textButton.innerHTML = 'Click here to change the background !'
                textButton.classList.add('textButton')
                buttonChange.appendChild(textButton)
                buttonChange.classList.add('changeButton')
                firstView.appendChild(buttonChange)


                fetch('https://api.unsplash.com/search/photos/?client_id=' + unsplashKey + '&page=1&per_page=5&orientation=landscape&query=' + locationName + ' ' + locationCountry)
                
                    .then(response => response.json())
                    .then(dataUnsplash => {

                        const n = Math.floor(Math.random() * dataUnsplash.results.length)

                        const color = dataUnsplash.results[n].color

                        searchCity.style.backgroundColor = color
                        searchButton.style.backgroundColor = color
                        
                        
                        body.style.backgroundColor = color
                        degCard.style.backgroundColor = color
                        body.style.backgroundImage = 'url(' + dataUnsplash.results[n].urls.raw + ')' 
                        degInfo.style.color = color
                        degCity.style.color = color
                        cityName.style.backgroundColor = color
                        textButton.style.color = color
                        buttonChange.style.backgroundColor = color

                        buttonChange.addEventListener('click', (event) => {
                            fetch('https://api.unsplash.com/search/photos/?client_id=' + unsplashKey + '&page=1&per_page=5&orientation=landscape&query=' + locationName + ' ' + locationCountry)
                            .then(response => response.json())
                            .then(dataUnsplash => {
                                
                                const n = Math.floor(Math.random() * dataUnsplash.results.length)

                                const color = dataUnsplash.results[n].color

                                searchCity.style.backgroundColor = color
                                searchButton.style.backgroundColor = color
                                
                                
                                body.style.backgroundColor = color
                                degCard.style.backgroundColor = color
                                body.style.backgroundImage = 'url(' + dataUnsplash.results[n].urls.raw + ')' 
                                degInfo.style.color = color
                                degCity.style.color = color
                                cityName.style.backgroundColor = color
                                textButton.style.color = color
                                buttonChange.style.backgroundColor = color


                                })
                        })
                    })
            })
    })


