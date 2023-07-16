const request = require('request-promise-native');

const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json");
};

/*
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function(body) {
  const IP = JSON.parse(body).ip;
  return request("http://ipwho.is/" + IP);
};

const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  return request("https://iss-flyover.herokuapp.com/json/?lat=" + latitude + "&lon=" + longitude);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  //.error(error => console.log(error));
    .then(body => fetchCoordsByIP(body))
    .then(body => fetchISSFlyOverTimes(body))
    .then((body) => {
    //console.log(body);
      const {response} = JSON.parse(body);
      return response;
    });
};

module.exports = {nextISSTimesForMyLocation};