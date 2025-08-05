// const removeFromArray = function() {
// };

// function removeFromArray(arr, ...remover){
//     remover.forEach((arg)=>{
//         let index = arr.indexOf(arg);
//         if (index >= 0){
//             arr.splice(index, 1);
//         }
//     });
//     return arr;
// }

// console.log(removeFromArray([1, 2, 3, 4], 3, 2, 5));


function removeFromArray(arr, ...args){
    return Array.filter(x => !args.includes(x));
};

console.log(removeFromArray([1,2,3,4,5,6,7,8,9], 3 ,2,4,6));



// Do not edit below this line
module.exports = removeFromArray;
