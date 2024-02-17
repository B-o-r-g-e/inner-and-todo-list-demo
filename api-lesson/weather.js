const img = document.querySelector('.weather-icon')
const state = document.querySelector('.state')
const country = document.querySelector('.country')
const weatherContainer = document.querySelector('.weather-condition')
const feelsLike = document.querySelector('.feels-like')

async function getWeather() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=8864366c27ee44c9bfd21149241502&q=Washington&aqi=no', {mode: "cors"})
        const weatherData = await response.json()
        const condition = weatherData.current.condition.text

        state.innerHTML = weatherData.location.region
        country.innerHTML = weatherData.location.country
        img.src = weatherData.current.condition.icon
        weatherContainer.innerHTML = `${weatherData.current.temp_c}&deg;`
        feelsLike.innerHTML = `${weatherData.current.feelslike_c}&deg;`

        if (condition === 'Overcast') {
            console.log('done')
        }

        console.log(weatherData)
        console.log(condition)
    } catch (e) {
        alert(e)
    }
}

getWeather()