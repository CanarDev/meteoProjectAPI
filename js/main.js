//Recuperer l'addresse IP
const options = {
    method: 'post',
    headers: {
        Accept: 'application/json'
    }
};
const weatherKey = "07d06524f38e4601a78223627222301"
const unsplashKey = "qhk0xx7XagH1GYxZtFDMnPYWRPKpkf59UaYdoxj-vkA"
const body = document.querySelector('body')
const degArroundMe = document.querySelector('#degArroundMe')
const firstView = document.querySelector('.firstView')

// // etch('http://ipwhois.app/json/')   
// //    .then(response => response.json())
// //    .then(response => {
// //        console.log(response)
// //        document.cookie = response.ip
// //        console.log(document.cookie)
// // )  https://devinci-online.brightspace.com/d2l/common/rpc/dataList/dataList.d2lfile?ou=6606&d2l_rh=rpc&d2l_rt=call
// 
fetch('https://ipwhois.app/json/')   
    .then(response => response.json())
    .then(response => {
        console.log(response)
        fetch('https://api.weatherapi.com/v1/current.json?key=' + weatherKey + '&q=' + response.ip + '&aqi=no')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const degLogo = document.createElement('img')
                const degInfo = document.createElement('p')
                const degCard = document.createElement('div')
                const degCity = document.createElement('h1')
                const locationName = data.location.name
                degCity.innerHTML = locationName
                console.log(locationName)
                const locationCountry = data.location.country
                console.log(locationCountry)
                degCard.classList.add('degCard')
                degLogo.src = data.current.condition.icon
                degInfo.innerHTML = data.current.temp_c +'℃'
                firstView.appendChild(degCity)
                degCard.appendChild(degLogo)
                degCard.appendChild(degInfo)
                degArroundMe.appendChild(degCard)
                const x = Math.floor(Math.random() * 8)
                fetch('https://api.unsplash.com/search/photos/?client_id=' + unsplashKey + '&page=1&per_page=5&orientation=landscape&query=' + locationName + ' ' + locationCountry)
                    .then(response => response.json())
                    .then(dataUnsplash => {
                        
                        console.log(dataUnsplash.results)
                        const n = Math.floor(Math.random() * dataUnsplash.results.length)
                        console.log(n)
                        const color = dataUnsplash.results[n].color
                        body.style.backgroundColor = color
                        degCard.style.backgroundColor = color
                        body.style.backgroundImage = 'url(' + dataUnsplash.results[n].urls.raw + ')' 
                        degInfo.style.color = color
                        degCity.style.color = color
                    })
            })
    })