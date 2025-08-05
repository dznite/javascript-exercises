// const sumAll = function() {

// };

let sumAll = function(a, b){
    let sum = b;
    for (i=b;i>a;i--){
        sum += (i-1)
    };
    return sum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
