const wholeContent = document.querySelector('.whole-content')
const img = document.querySelector('.weather-icon')
const state = document.querySelector('.state')
const country = document.querySelector('.country')
const weatherContainer = document.querySelector('.weather-condition')
const feelsLike = document.querySelector('.feels-like')
const cons = document.querySelector('.condition')

async function getWeather() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=8864366c27ee44c9bfd21149241502&q=China&aqi=no', {mode: "cors"})
        const weatherData = await response.json()
        const condition = weatherData.current.condition.text

        state.innerHTML = weatherData.location.region
        country.innerHTML = weatherData.location.country
        img.src = weatherData.current.condition.icon
        weatherContainer.innerHTML = `${weatherData.current.temp_c}&deg;`
        feelsLike.innerHTML = `${weatherData.current.feelslike_c}&deg;`
        cons.innerHTML = condition

        if (condition === 'Overcast') {
            wholeContent.style.backgroundImage = `url('weather-asset/overcast.jpeg')`
        }else if (condition === 'Partly cloudy') {
            wholeContent.style.backgroundImage = `url('weather-asset/partly.jpeg')`
        } else if (condition === 'Sunny') {
            wholeContent.style.backgroundImage = `url('weather-asset/sunny.jpeg')`
        }

        console.log(weatherData)
        console.log(condition)
    } catch (e) {
        alert(e)
    }
}

getWeather()