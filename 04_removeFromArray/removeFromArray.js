const removeFromArray = function(arr, ...args) {
    return arr.filter( arg => !args.includes(arg) );
};

// Do not edit below this line
module.exports = removeFromArray;
