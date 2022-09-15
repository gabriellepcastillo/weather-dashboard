var apiKey = "13a124723cdd7273a7635357a4c2de64"

var austin = document.querySelector(".austin")
var chicago = document.querySelector(".chicago")
var sanFran = document.querySelector(".sanfran")
var newYork = document.querySelector(".newyork")
var seattle = document.querySelector(".seattle")
var orlando = document.querySelector(".orlando")
var denver = document.querySelector(".denver")
var atlanta = document.querySelector(".atlanta")

var forcast = document.querySelector(".dailyForcast")
var currentWeatherEl = document.querySelector(".currentWeather")
var userFormEl = document.querySelector("#user-form")
var repoContainerEl = document.querySelector("#repos-container")
var cityBtn = document.getElementById("city-buttons")
var searchBtn = document.querySelector(".btn")
var userInput = document.getElementById("userInput")

// temp, wind, humidity

var getCurrentWeather = (userSearch)=> {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${apiKey}&units=imperial`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
        var lon = data.coord.lon
        var lat = data.coord.lat
        getOneCall(lon,lat)
        
    })
    userInput.innerHTML = "--" + userFormEl.value + "--"
}

var displayWeather = function(data,city) {
    //js to append in here
    const card = document.createElement("div")
    card.setAttribute("class","card")
    const cardHeader = document.createElement("div")
    cardHeader.setAttribute("class","cardTitle")
    const cardTitle = document.createElement("h3")
    cardTitle.textContent = city
    const span = document.createElement("span")
    const icon = document.createElement("img")
    icon.setAttribute("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
    const cardBody = document.createElement("div")
    cardBody.setAttribute("class", "cardContent")
    const content = document.createElement("div")
    content.setAttribute("class", "content")
    const temp = document.createElement("p")
    const humidity = document.createElement("p")
    const wind = document.createElement("p")
    const uvi = document.createElement("p")
    temp.textContent = `Temperature: ${data.temp} F`
    humidity.textContent = `Humidity: ${data.humidity}`
    wind.textContent = `Wind Speed: ${data.wind_speed}`
    uvi.textContent = `UV Index: ${data.uvi}`

    span.append(icon)
    cardTitle.append(span)
    cardHeader.append(cardTitle)
    content.append(temp,humidity,wind,uvi)
    cardBody.append(content)
    card.append(cardHeader,cardBody)
    currentWeatherEl.append(card)
}

var displayForecast = function(data) {
    var forecastDays = 5
    for (let i = 0; i< forecastDays; i++) {
        
    }
}

var getOneCall = (lon,lat)=> {
    var url= `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
        displayWeather(data.current)
        displayForecast(data.daily)
    })
    //displayForecast
}

var getAustin = (buttonSearch) => {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=13a124723cdd7273a7635357a4c2de64`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
    })
}
var getChicago = (buttonSearch) => {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=13a124723cdd7273a7635357a4c2de64`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
    })
}
var getSeattle = (buttonSearch) => {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=13a124723cdd7273a7635357a4c2de64`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
    })
}
var getOrlando = (buttonSearch) => {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=13a124723cdd7273a7635357a4c2de64`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
    })
}
var getDenver = (buttonSearch) => {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=13a124723cdd7273a7635357a4c2de64`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
    })
}
var getAtlanta = (buttonSearch) => {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=13a124723cdd7273a7635357a4c2de64`
    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        console.log(data)
    })
}


// https://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&appid=${apiKey}&units=metric` 
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=${apiKey}&units=metric`

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    var userSearch = userInput.value 
    console.log(userSearch)
    getCurrentWeather(userSearch)
})
austin.addEventListener("click", (e)=> {
    e.preventDefault()
    //var = cityBtn.value
    console.log("Austin")
    getAustin()
})
orlando.addEventListener("click", (e)=> {
    e.preventDefault()
    //var = cityBtn.value
    console.log("Orlando")
    getOrlando()
})
denver.addEventListener("click", (e)=> {
    e.preventDefault()
    //var = cityBtn.value
    console.log("Denver")
    getDenver()
})
seattle.addEventListener("click", (e)=> {
    e.preventDefault()
    //var = cityBtn.value
    console.log("Seattle")
    getSeattle()
})
atlanta.addEventListener("click", (e)=> {
    e.preventDefault()
    //var = cityBtn.value
    console.log("Atlanta")
    getAtlanta()
})
chicago.addEventListener("click", (e)=> {
    e.preventDefault()
    //var = cityBtn.value
    console.log("Chicago")
    getChicago()
})