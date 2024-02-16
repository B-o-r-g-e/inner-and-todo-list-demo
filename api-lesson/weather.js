const img = document.querySelector('.weather-icon')
const state = document.querySelector('.state')
const country = document.querySelector('.country')
const weatherContainer = document.querySelector('.weather-condition')
const feelsLike = document.querySelector('.feels-like')

async function getWeather() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=8864366c27ee44c9bfd21149241502&q=Lagos&aqi=no', {mode: "cors"})
        const weatherData = await response.json()

        state.innerHTML = weatherData.location.region
        country.innerHTML = weatherData.location.country
        img.src = weatherData.current.condition.icon
        weatherContainer.innerHTML = `${weatherData.current.temp_c}&deg;`
        feelsLike.innerHTML = `${weatherData.current.feelslike_c}&deg;`

        console.log(weatherData)
    } catch (e) {
        alert(e)
    }
}

getWeather()