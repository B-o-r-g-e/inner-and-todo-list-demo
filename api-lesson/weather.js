async function getWeather(location) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=8864366c27ee44c9bfd21149241502&q=${location}&aqi=no`,
            {mode: "cors"}
        )
        const weatherData = await response.json()
        const condition = weatherData.current.condition.text

        // const wholeContent = document.querySelector('.whole-content')
        const container = document.querySelector('.container')
        const containers = document.querySelector('.containers')
        const img = document.querySelector('.weather-icon')
        const state = document.querySelector('.state')
        const country = document.querySelector('.country')
        const weatherContainer = document.querySelector('.weather-condition')
        const feelsLike = document.querySelector('.feels-like')
        const cons = document.querySelector('.condition')
        const innerPart = document.querySelector('.inner-part')

        state.innerHTML = weatherData.location.region
        country.innerHTML = weatherData.location.country
        img.src = weatherData.current.condition.icon
        weatherContainer.innerHTML = `${weatherData.current.temp_c}&deg;`
        feelsLike.innerHTML = `${weatherData.current.feelslike_c}&deg;`
        cons.innerHTML = condition

        if (condition === 'Overcast') {
            container.style.backgroundImage = `url('weather-asset/overcast.jpeg')`
        } else if (condition === 'Partly cloudy') {
            container.style.backgroundImage = `url('weather-asset/partly.jpeg')`
        } else if (condition === 'Sunny') {
            container.style.backgroundImage = `url('weather-asset/sunny.jpeg')`
        } else if (condition === 'Snow' || condition === 'Light snow') {
            container.style.backgroundImage = `url('weather-asset/snow.jpeg')`
        } else if (condition === 'Clear sky') {
            container.style.backgroundImage = `url('weather-asset/clear.jpeg')`
        } else if (condition === 'fog') {
            container.style.backgroundImage = `url('weather-asset/fogsky.jpeg')`
        } else if (condition === 'Heavy rain') {
            container.style.backgroundImage = `url('weather-asset/heavy.jpeg')`
        } else if (condition === 'Mist') {
            container.style.backgroundImage = `url('weather-asset/mist.jpeg')`
        } else if (condition === 'Rain') {
            container.style.backgroundImage = `url('weather-asset/rain.jpeg')`
        } else {
            container.style.backgroundImage = `url("weather-asset/Storm.jpeg")`
        }

        containers.addEventListener('click', () => {
            container.style.display = 'none'
            innerPart.style.display = 'flex'
        })

        fullWeather(location)
    } catch (e) {
        alert(e)
    }
}

async function fullWeather(location) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=8864366c27ee44c9bfd21149241502&q=${location}&aqi=yes`,
            {mode: "cors"}
        )
        const weatherData = await response.json()
        const weatherImage = document.querySelector('.wi')
        const temperature = document.querySelector('.temp')
        const realFeels = document.querySelector('.real-fils')
        const partlySunny = document.querySelector('.partly-sunny')
        const shade = document.querySelector('.shade')
        const wind = document.querySelector('.wind')
        const windGusts = document.querySelector('.wind-gusts')
        const color = document.querySelector('.color')
        const innerPart = document.querySelector('.inner-part')
        const container = document.querySelector('.container')

        weatherImage.src = weatherData.current.condition.icon
        temperature.innerHTML = `${weatherData.current.temp_c}&deg;`
        realFeels.innerHTML = `${weatherData.current.feelslike_c}&deg;`
        partlySunny.innerHTML = weatherData.current.condition.text
        shade.innerHTML = `${weatherData.current.feelslike_c}&deg;`
        wind.innerHTML = `${weatherData.current.wind_dir} ${weatherData.current.wind_kph} Km/h`
        windGusts.innerHTML = `${weatherData.current.gust_kph} Km/h`

        function calcColor() {
            const AQI = weatherData.current.air_quality.pm10
            if (AQI <= 50) {
                color.textContent = `Good`
            } else if (AQI >= 51 && AQI <= 100) {
                color.textContent = `Moderate`
            } else if (AQI >= 101 && AQI <= 300) {
                color.textContent = `Poor`
            } else {
                color.textContent = 'Hazardous'
            }
        }

        innerPart.addEventListener('click', () => {
            innerPart.style.display = 'none'
            container.style.display = 'block'
        })

        calcColor()
        getTime()

    } catch (e) {
        alert(e)
    }



}

function getTime() {
    const time = document.querySelector('.time')
    const now = new Date()

    let hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const meridian = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridian}`;

    time.innerHTML = `${formattedTime}`

    setInterval(getTime, 1000);
}

function getValue() {
    const submitButton = document.querySelector('.submit')
    const searchInput = document.getElementById('searchInput').value

    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        var sentenceCase = searchInput.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
            return c.toUpperCase();
        });
        console.log(searchInput)
    })
}



getWeather('Lagos')
getValue()
// fullWeather()