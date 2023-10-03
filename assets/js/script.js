var searchBtn = document.getElementById('searchBtn');

function search() {
    console.log('Button was clicked!')
    event.preventDefault();
    }
searchBtn.addEventListener('click', search);

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
  params: {
    query: 'Alabama - Montgomery, Alaska - Juneau, Arizona - Phoenix, Arkansas - Little Rock, California - Sacramento, Colorado - Denver, Connecticut - Hartford, Delaware - Dover, Florida - Tallahassee, Georgia - Atlanta, Hawaii - Honolulu, Idaho - Boise, Illinois - Springfield, Indiana - Indianapolis, Iowa - Des Moines, Kansas - Topeka, Kentucky - Frankfort, Louisiana - Baton Rouge, Maine - Augusta, Maryland - Annapolis, Massachusetts - Boston, Michigan - Lansing, Minnesota - Saint Paul, Mississippi - Jackson, Missouri - Jefferson City, Montana - Helena, Nebraska - Lincoln, Nevada - Carson City, New Hampshire - Concord, New Jersey - Trenton, New Mexico - Santa Fe, New York - Albany, North Carolina - Raleigh, North Dakota - Bismarck, Ohio - Columbus, Oklahoma - Oklahoma City, Oregon - Salem, Pennsylvania - Harrisburg, Rhode Island - Providence, South Carolina - Columbia, South Dakota - Pierre, Tennessee - Nashville, Texas - Austin, Utah - Salt Lake City, Vermont - Montpelier, Virginia - Richmond, Washington - Olympia, West Virginia - Charleston, Wisconsin - Madison, Wyoming - Cheyenne',
    lang: 'en_US',
    units: 'mi'
  },
  headers: {
    'X-RapidAPI-Key': '32f2355e22msh06cc94cd6adf337p1b96abjsnb61d184ee648',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}