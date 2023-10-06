var searchBtn = document.getElementById('searchBtn');


// Uses the search button (from HTML id 'searchBtn') to start a function
function search(event) {
    console.log('Button was clicked!')
    event.preventDefault();
    }

    searchBtn.addEventListener('click', search);

    //const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=DEN&destinationAirportCode=AUS&date=2023-10-05&itineraryType=ONE_WAY&sortOrder=PRICE&numAdults=1&numSeniors=0&classOfService=ECONOMY&returnDate=2023-10-11&pageNumber=1&currencyCode=USD';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '32f2355e22msh06cc94cd6adf337p1b96abjsnb61d184ee648',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
      }
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