// const leapYears = function() {

// };

// USE NESTED IFS

// check if 
// 1. is year divisible by 4
//     IF YES
//     2. check if divisble  by 100 and 400 
//     IF YES: return

function isLeap(year){
    if (year % 4 === 0){
        if (year % 100 === 0 && year % 400 === 0){
            return true;
        } else if (year % 100 === 0){
            return false;
        };
        return true;
    } else {
        return false;
    }
}

console.log(isLeap(1900));

// Do not edit below this line
module.exports = leapYears;
