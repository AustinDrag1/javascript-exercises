const sumAll = function( num1, num2 ) {

    // Error conditions
    let notInts = !Number.isInteger(num1) || !Number.isInteger(num2);
    let negative = num1 < 0 || num2 < 0;

    if( notInts || negative )
    {
        return "ERROR";
    }

    // Loop from little to small
    let lilNum = Math.min(num1, num2);
    let bigNum = Math.max(num1, num2);

    result = 0;
    for( let i = lilNum; i < bigNum + 1; i++ )
    {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
