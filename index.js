// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers() {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// study why this happens, array with functions as elements

// function createFareMultiplier() {
//     const fareDoubler = (fare) => {
//         return  fare * 3
//     }
//     const fareTripler = (fare) => {
//         return fare * 3
//     }
// }
//faredoubler
//Declare var using const and assign function 

const fareDoubler = createFareMultiplier(2)

function createFareMultiplier(multiplyBy) {
    if (multiplyBy === '2') {
        return function fareDoubler(fare) {
            return fare * 2
        }
    } else if (multiplyBy === '3') {
        return function fareTripler(fare) {
            return fare * 3
        }
    }
}

// function selectDifferentDrivers(drivers, fnName) {
//     if (drivers === returnLastTwoDrivers){
//         return returnLastTwoDrivers
//     } else {
//         return returnFirstTwoDrivers
//     };
// }