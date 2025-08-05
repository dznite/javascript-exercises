// const reverseString = function() {

// };

function reverseString(string){
    let arr = string.split('');
    arr.reverse();
    let result = arr.join('');
    return result;
}

console.log(reverseString('hello'));


// Do not edit below this line
module.exports = reverseString;
