// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  if (someValue >= 42) {
    return someValue - 42;
  } else if (someValue < 42) {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  if (destination >= start) {
    return (destination - start) * 264;
  } else if (start > destination) {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distanceTravelled = distanceTravelledInFeet(start, destination);
  if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
