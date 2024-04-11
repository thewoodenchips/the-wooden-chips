const cityList = [
    "Newport News",
    "Norfolk",
    "Chesapeake",
    "Virginia Beach",
    "Portsmouth",
    "Suffolk",
    "Hampton"
  ];

  const finished = [];


function jsonGen() {
  for (const city of cityList) {
    finished.push({
      location: `${city}, VA`,
    });
  }
  // console.log(finished);
  return JSON.stringify(finished);
}



console.log(jsonGen())
