const {nextISSTimesForMyLocation} = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (let i = 0; i < 5; i++) {
      console.log("Next pass at " + new Date(passTimes[i].risetime + new Date().getTime()).toString() + " for " + passTimes[i].duration + " seconds!");
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
