// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2, drivers.length);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => () => fare * fare;

const fareDoubler = (fare) => 2 * fare;

const fareTripler = (fare) => 3 * fare;

const selectDifferentDrivers = (drivers, callback) => {
  return callback === selectingDrivers[0]
    ? selectingDrivers[0](drivers) //  ? callback(drivers)
    : selectingDrivers[1](drivers); // : callback(drivers);
};
