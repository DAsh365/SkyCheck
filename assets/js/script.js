var searchBtn = document.getElementById("searchBtn");
var priceListEL = document.getElementById("priceListEl");
var firstPrice = document.createElement("li");
var flight = document.getElementById("flight");
var depart = document.getElementById("departure");
var arrival = document.getElementById("arrival");
var layover = document.getElementById("stops");
var totalTime = document.getElementById("travelTime");
var requestedDeparture = document.getElementById('departureInput').value.trim()
var requestedArrival = document.getElementById('arrivalInput').value.trim()


var capitals = {
Montgomery, Alabama: 'MGM',
Juneau, Alaska: 'JNU',
Phoenix, Arizona: 'PHX',
LittleRock, Arkansas: 'LIT',
Sacramento, California: 'SAC',
Denver, Colorado: 'DEN',
Hartford, Connecticut: 'HFD',
Dover, Delaware: 'DOV',
Tallahassee, Florida: 'TLH',
Atlanta, Georgia: 'ATL',
Honolulu, Hawaii: 'HNL',
Boise, Idaho: 'BOI',
Springfield, Illinois: 'SPI',
Indianapolis, Indiana: 'IND',
DesMoines, Iowa: 'DSM',
Topeka, Kansas: 'TOP',
Frankfort, Kentucky: 'FFT',
BatonRouge, Louisiana: 'BTR',
Augusta, Maine: 'AUG',
Annapolis, Maryland: 'ANN',
Boston, Massachusetts: 'BOS',
Lansing, Michigan: 'LAN',
StPaul, Minnesota: 'STP',
Jackson, Mississippi: 'JAN',
JeffersonCity, Missouri: 'JEF',
Helena, Montana: 'HLN',
Lincoln, Nebraska: 'LNK',
CarsonCity, Nevada: 'CSN',
Concord, NewHampshire: 'CON',
Trenton, NewJersey: 'TRE',
SantaFe, NewMexico: 'SAF',
Albany, NewYork: 'ALB',
Raleigh, NorthCarolina: 'RDU',
Bismarck, NorthDakota: 'BIS',
Columbus, Ohio: 'CMH',
OklahomaCity, Oklahoma: 'OKC',
Salem, Oregon: 'SLE',
Harrisburg, Pennsylvania: 'MDT',
Providence, RhodeIsland: 'PVD',
Columbia, SouthCarolina: 'CAE',
Pierre, SouthDakota: 'PIR',
Nashville, Tennessee: 'BNA',
Austin, Texas: 'AUS',
SaltLakeCity, Utah: 'SLC',
Montpelier, Vermont: 'MPV',
Richmond, Virginia: 'RIC',
Olympia, Washington: 'OLY',
Charleston, WestVirginia: 'CRW',
Madison, Wisconsin: 'MSN',
Cheyenne, Wyoming: 'CYS'
}
// Uses the search button (from HTML id 'searchBtn') to start a function
function search(event) {
  console.log("Button was clicked!");
  event.preventDefault();
  firstPrice.appendChild(price);
  flight.append(flightNumber);
  depart.append(departAirport);
  arrival.append(arriveAirport);
  layover.append(stops);
}

searchBtn.addEventListener("click", search);

//const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=DEN&destinationAirportCode=AUS&date=2023-10-05&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate=2023-10-11&pageNumber=1&currencyCode=USD';
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

  console.log(
    `Price: ${price} \n Stops: ${stops} \n Departure: ${departAirport} \n Arrival: ${arriveAirport} \n Flight Number: ${flightNumber} \n Carrier: ${carrier} \n Departure Time: ${departTime} \n Arrival Time ${arrivalTime}`
  );
}
