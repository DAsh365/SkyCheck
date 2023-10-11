var currentTemp = document.getElementById("temp")
var searchBtn = document.getElementById("searchBtn");

function getWeather(event){
    var citiesLatLong = [
{city: 'MGM', lat: 32.3668, lon: -86.2999},
{city: 'JNU', lat: 58.3019, lon: -134.4197},
{city: 'PHX', lat: 33.4484, lon: -112.0740},
{city: 'LIT', lat: 34.7465, lon: -92.2896},
{city: 'SAC', lat: 38.5758, lon: -121.4789},
{city: 'DEN', lat: 39.7392, lon: -104.9903},
{city: 'HFD', lat: 41.7658, lon: -72.6734},
{city: 'DOV', lat: 39.1619, lon: -75.5267},
{city: 'TLH', lat: 30.4383, lon: -84.2807},
{city: 'ATL', lat: 33.7490, lon: -84.3880},
{city: 'HNL', lat: 21.3069, lon: -157.8583},
{city: 'BOI', lat: 43.6150, lon: -116.2023},
{city: 'SPI', lat: 39.7817, lon: -89.6501},
{city: 'IND', lat: 39.7684, lon: -86.1581},
{city: 'DSM', lat: 41.5868, lon: -93.6250},
{city: 'TOP', lat: 39.0473, lon: -95.6752},
{city: 'FFT', lat: 38.2009, lon: -84.8733},
{city: 'BTR', lat: 30.4515, lon: -91.1871},
{city: 'AUG', lat: 44.3106, lon: -69.7795},
{city: 'ANN', lat: 38.9784, lon: -76.4922},
{city: 'BOS', lat: 42.3601, lon: -71.0589},
{city: 'LAN', lat: 42.7325, lon: -84.5555},
{city: 'STP', lat: 44.9504, lon: -93.1015},
{city: 'JAN', lat: 32.2988, lon: -90.1848},
{city: 'JEF', lat: 38.5767, lon: -92.1735},
{city: 'HLN', lat: 46.5898, lon: -112.0391},
{city: 'LNK', lat: 40.8136, lon: -96.7026},
{city: 'CSN', lat: 39.1638, lon: -119.7674},
{city: 'CON', lat: 43.2081, lon: -71.5375},
{city: 'TRE', lat: 40.2206, lon: -74.7693},
{city: 'SAF', lat: 35.6869, lon: -105.9378},
{city: 'ALB', lat: 42.6526, lon: -73.7562},
{city: 'RDU', lat: 35.7796, lon: -78.6382},
{city: 'BIS', lat: 46.8083, lon: -100.7837},
{city: 'CMH', lat: 39.9612, lon: -82.9988},
{city: 'OKC', lat: 35.4676, lon: -97.5164},
{city: 'SLE', lat: 44.9429, lon: -123.0351},
{city: 'MDT', lat: 40.2732, lon: -76.8867},
{city: 'PVD', lat: 41.8230, lon: -71.4187},
{city: 'CAE', lat: 34.0007, lon: -81.0348},
{city: 'PIR', lat: 44.3683, lon: -100.3506},
{city: 'BNA', lat: 36.1627, lon: -86.7816},
{city: 'AUS', lat: 30.2672, lon: -97.7431},
{city: 'SLC', lat: 40.7608, lon: -111.8910},
{city: 'MPV', lat: 44.2601, lon: -72.5754},
{city: 'RIC', lat: 37.5407, lon: -77.4360},
{city: 'OLY', lat: 47.0379, lon: -122.9007},
{city: 'CRW', lat: 38.3498, lon: -81.6326},
{city: 'MSN', lat: 43.0731, lon: -89.4012},
{city: 'CYS', lat: 41.1399, lon: -104.8202}
    ]
    event.preventDefault()
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=eeac7ee1a675ee906741eb0c85a9d7e8"
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
    currentTemp.append(temperature.toFixed(2) + '°F')
}
searchBtn.addEventListener("click", getWeather);