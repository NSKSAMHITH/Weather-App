import { API_KEY, BASE_URL } from './constant.js'

const temperatureField = document.querySelector(".temperature")
const weatherConditionField = document.querySelector(".weather_condition p:last-child")
const locationField = document.querySelector(".location ")
const dateField = document.querySelector(".time ")
const searchField = document.querySelector(".search_field")
const searchButton = document.querySelector(".search_button")


const form = document.querySelector('form')

//call searchForLocation method when submitting the location
form.addEventListener('submit', searchForLocation)

let target = ''

const fetch_results = async (targetLocation) => {
    let url = `${BASE_URL}/current.json?key=${API_KEY}&q=${targetLocation}&aqi=no`;

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    
    //Fetching all the needed values
    let temperature = data.current.temp_f

    let locationName = data.location.name

    let time = data.location.localtime

    let weatherCondition = data.current.condition.text

    updateDetails(temperature, locationName, time, weatherCondition)
}

function searchForLocation(e){
    e.preventDefault()
    target = searchField.value

    fetch_results(target)
}


function updateDetails(temperature, locationName, time, weatherCondition){
    temperatureField.innerText = `${temperature}°F`
    locationField.innerText = `Location: ${locationName}`
    dateField.innerText = `Time: ${time}`
    weatherConditionField.innerText = `Weather Condition: ${weatherCondition}`

}




fetch_results(target || 'Tempe')




