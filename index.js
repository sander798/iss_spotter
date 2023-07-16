const {nextISSTimesForMyLocation} = require("./iss");

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
*/

/*fetchCoordsByIP("198.166.104.82", (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('Returned coordinates:' , coords);
  return coords;
});
*/

/*fetchISSFlyOverTimes({ latitude: 53.544389, longitude: -113.4909267 }, (error, times) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('Returned times:' , times);
  return times;
});
*/

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  //console.log(passTimes);
  //return passTimes;
  
  for (let i = 0; i < 5; i++) {
    console.log("Next pass at " + new Date(passTimes[i].risetime + new Date().getTime()).toString() + " for " + passTimes[i].duration + " seconds!");
  }
});