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
                const locationName = data.location.name
                console.log(locationName)
                const locationCountry = data.location.country
                console.log(locationCountry)
                fetch('https://api.unsplash.com/search/photos?client_id=' + unsplashKey + '&page=1&query=' + locationCountry + ' ' + locationName)
                    .then(response => response.json())
                    .then(dataUnsplash => {
                        
                        console.log(dataUnsplash.results)
                        if (dataUnsplash.results){
                            
                        }


                        const n = Math.floor(Math.random() * dataUnsplash.results.length)
                        console.log(n)
                        body.style.backgroundImage = 'url(' + dataUnsplash.results[n].urls.regular + ')' 
                    })
            })
    })