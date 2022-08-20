// Code your solution here
function findMatching(drivers, characteristic) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === characteristic.toLowerCase() })
  }
  
  function fuzzyMatch(drivers, characteristic) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, characteristic.length) === characteristic.toLowerCase() })
  }
  
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }