// variales for using JS to dynamically create HTML elements
var searchBtn = document.getElementById("searchBtn");
var priceListEL = document.getElementById("priceListEl");
var firstPrice = document.getElementById("price1")
var flight = document.getElementById("flight");
var depart = document.getElementById("departure");
var arrival = document.getElementById("arrival");
var carrierID = document.getElementById("carrier")
var totalTime = document.getElementById("travelTime");
var requestedDeparture = document.getElementById('departureInput');
var requestedArrival = document.getElementById('arrivalInput');
var startDate = document.getElementById('startDate')
var endDate = document.getElementById('endDate')
var startDateValue = startDate.textContent.valueOf(startDate)
var endDateValue = endDate.textContent.valueOf(endDate)
function convertDate(dateStr){
    var splitDateStr = dateStr.split('/')
    return `${splitDateStr[2]}-${splitDateStr[0]}-${splitDateStr[1]}`
}
// Uses the search button (from HTML id 'searchBtn') to start a function
function search(event) {
event.preventDefault();
// gets the data from options value in HTML and stores it in a variable
var departCities = requestedDeparture.options[requestedDeparture.selectedIndex]
var arriveCities = requestedArrival.options[requestedArrival.selectedIndex]
// creates a new variable for the value of each options in HTML
var departCitiesValue = departCities.value
var arriveCitiesValue = arriveCities.value
var startDateVal = startDate.value
var endDateVal = endDate.value
// console.log("Button was clicked!");
//console.log(convertDate(startDateVal))
//console.log(departCitiesValue, arriveCitiesValue)
//console.log(startDateVal, endDateVal);

//need to convert startDate and endDate val to YYYY-MM-DD
 const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode='+departCitiesValue+'&destinationAirportCode='+arriveCitiesValue+'&date='+convertDate(startDateVal)+'&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate='+convertDate(endDateVal)+'&pageNumber=1&currencyCode=USD';
 const options = {
method: "GET",
 headers: {
    "X-RapidAPI-Key": "4a7c629552msh892e823be07a36dp17eb0bjsne09b5fee98d5",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
};
console.log(url)
fetch(url, options)
  .then(function (res) {
    console.log(res)
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
  /*
var cityNames = [
  {"acronym":  "MGM", 
  "word": 'Montgomery, Alabama'},
  {"acronym":  "JNU", 
  "word": 'Juneau, Alaska'},
  {"acronym":  "PHX", 
  "word": 'Phoenix, Arizona'},
  {"acronym":  "LIT", 
  "word": 'Little Rock, Arkansas'},
  {"acronym":  "SAC", 
  "word": 'Sacramento, California'},
  {"acronym":  "DEN", 
  "word": 'Denver, Colorado'},
  {"acronym":  "HFD", 
  "word": 'Hartford, Connecticut'},
  {"acronym":  "DOV", 
  "word": 'Dover, Delaware'},
  {"acronym":  "TLH", 
  "word": 'Tallahassee, Florida'},
  {"acronym":  "ATL", 
  "word": 'Atlanta, Georgia'},
  {"acronym":  "HNL", 
  "word": 'Honolulu, Hawaii'},
  {"acronym":  "BOI", 
  "word": 'Boise, Idaho'},
  {"acronym":  "SPI", 
  "word": 'Springfield, Illinois'},
  {"acronym":  "IND", 
  "word": 'Indianapolis, Indiana'},
  {"acronym":  "DSM", 
  "word": 'Des Moines, Iowa'},
  {"acronym":  "TOP", 
  "word": 'Topeka, Kansas'},
  {"acronym":  "FFT", 
  "word": 'Frankfort, Kentucky'},
  {"acronym":  "BTR", 
  "word": 'Baton Rouge, Louisiana'},
  {"acronym":  "AUG", 
  "word": 'Augusta, Maine'},
  {"acronym":  "ANN", 
  "word": 'Annapolis, Maryland'},
  {"acronym":  "BOS", 
  "word": 'Boston, Massachusetts'},
  {"acronym":  "LAN", 
  "word": 'Lansing, Michigan'},
  {"acronym":  "STP", 
  "word": 'StPaul, Minnesota'},
  {"acronym":  "JAN", 
  "word": 'Jackson, Mississippi'},
  {"acronym":  "JEF", 
  "word": 'Jefferson City, Missouri'},
  {"acronym":  "HLN", 
  "word": 'Helena, Montana'},
  {"acronym":  "LNK", 
  "word": 'Lincoln, Nebraska'},
  {"acronym":  "CSN", 
  "word": 'Carson City, Nevada'},
  {"acronym":  "CON", 
  "word": 'Concord, New Hampshire'},
  {"acronym":  "TRE", 
  "word": 'Trenton, New Jersey'},
  {"acronym":  "SAF", 
  "word": 'Santa Fe, New Mexico'},
  {"acronym":  "ALB", 
  "word": 'Albany, New York'},
  {"acronym":  "RDU", 
  "word": 'Raleigh, North Carolina'},
  {"acronym":  "BIS", 
  "word": 'Bismarck, North Dakota,'},
  {"acronym":  "CMH", 
  "word": 'Columbus, Ohio'},
  {"acronym":  "OKC", 
  "word": 'Oklahoma City, Oklahoma'},
  {"acronym":  "SLE", 
  "word": 'Salem, Oregon'},
  {"acronym":  "MDT", 
  "word": 'Harrisburg, Pennsylvania'},
  {"acronym":  "PVD", 
  "word": 'Providence, Rhode Island'},
  {"acronym":  "CAE", 
  "word": 'Columbia, South Carolina'},
  {"acronym":  "BNA", 
  "word": 'Nashville, Tennessee'},
  {"acronym":  "AUS", 
  "word": 'Austin, Texas'},
  {"acronym":  "SLC", 
  "word": 'Salt Lake City, Utah'},
  {"acronym":  "MPV", 
  "word": 'Montpelier, Vermont'},
  {"acronym":  "RIC", 
  "word": 'Richmond, Virginia'},
  {"acronym":  "OLY", 
  "word": 'Olympia, Washington'},
  {"acronym":  "CRW", 
  "word": 'Charleston, West Virginia'},
  {"acronym":  "MSN", 
  "word": 'Madison, Wisconsin'}
]
if (departCitiesValue = cityNames.acronym) {
  cityNames.acronym[selectedIndex] = cityNames.word[selectedIndex]
} */
// renders each bit of data from API to HTML
  firstPrice.append(price);
  flight.append(flightNumber);
  depart.append(departAirport);
  arrival.append(arriveAirport);
  carrierID.append(carrier);

  // console.log(
   // `Price: ${price} \n Stops: ${stops} \n Departure: ${departAirport} \n Arrival: ${arriveAirport} \n Flight Number: ${flightNumber} \n Carrier: ${carrier} \n Departure Time: ${departTime} \n Arrival Time ${arrivalTime}`
 // );
}
searchBtn.addEventListener("click", search);