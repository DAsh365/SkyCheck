// variales for using JS to dynamically create HTML elements
var searchBtn = document.getElementById("searchBtn");
var priceListEL = document.getElementById("priceListEl");
var firstPrice = document.getElementById("price1")
var flight = document.getElementById("flight");
var depart = document.getElementById("departure");
var arrival = document.getElementById("arrival");
var layover = document.getElementById("stops");
var totalTime = document.getElementById("travelTime");
var requestedDeparture = document.getElementById('departureInput')
var requestedArrival = document.getElementById('arrivalInput')

// Uses the search button (from HTML id 'searchBtn') to start a function
function search(event) {
event.preventDefault();
// gets the data from options value in HTML and stores it in a variable
var departCities = requestedDeparture.options[requestedDeparture.selectedIndex]
var arriveCities = requestedArrival.options[requestedArrival.selectedIndex]
// creates a new variable for the value of each options in HTML
var departCitiesValue = departCities.value
var arriveCitiesValue = arriveCities.value
  console.log("Button was clicked!");
  console.log(departCitiesValue, arriveCitiesValue);


// const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode='+departCitiesValue+'&destinationAirportCode='+arriveCitiesValue+'&date=2023-10-06&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate=2023-10-11&pageNumber=1&currencyCode=USD';
const options = {
method: "GET",
 headers: {
    "X-RapidAPI-Key": "32f2355e22msh06cc94cd6adf337p1b96abjsnb61d184ee648",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
};

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    getData(data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
// parses through API for specific data to be used
function getData(results) {
  var price = results.data.flights[0].purchaseLinks[0].totalPrice;

  var stops = results.data.flights[0].segments[0].legs[0].numStops;

  var departAirport =
    results.data.flights[0].segments[0].legs[0].originStationCode;

  var arriveAirport =
    results.data.flights[0].segments[0].legs[0].destinationStationCode;

  var flightNumber = results.data.flights[0].segments[0].legs[0].flightNumber;

  var carrier =
    results.data.flights[0].segments[0].legs[0].operatingCarrier.displayName;

  var departTime =
    results.data.flights[0].segments[0].legs[0].departureDateTime;

  var arrivalTime = results.data.flights[0].segments[0].legs[0].arrivalDateTime;
// renders each bit of data from API to HTML
  firstPrice.append(price);
  flight.append(flightNumber);
  depart.append(departAirport);
  arrival.append(arriveAirport);
  layover.append(stops);

  console.log(
    `Price: ${price} \n Stops: ${stops} \n Departure: ${departAirport} \n Arrival: ${arriveAirport} \n Flight Number: ${flightNumber} \n Carrier: ${carrier} \n Departure Time: ${departTime} \n Arrival Time ${arrivalTime}`
  );
}
searchBtn.addEventListener("click", search);