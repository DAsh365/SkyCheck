function getWeather(){
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=denver&appid=eeac7ee1a675ee906741eb0c85a9d7e8"
fetch(weatherUrl)
    .then(function (response){
        return response.json()

    })
    .then(function (data){
        console.log(data)
        convertor(data)
    })
    .catch(function (error){
        console.error(error)
    })
}
function convertor(temp){
    var kelvin = temp.main.temp
    var temperature = (kelvin - 273.15) * 9 / 5 + 32;
    console.log(temperature.toFixed(2))
}
getWeather()
