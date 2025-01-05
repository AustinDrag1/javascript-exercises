const fibonacci = function( entry ) {

    const val = Number(entry);

    if( val === NaN || val !== parseInt(entry) || val < 0 )
    {
        return "OOPS";
    }

    const seq = [0,1];

    do
    {
        // Exit case
        if( seq.length > val ) { return seq[val]; }
        
        // Calculate next index
        let i = seq.length - 1;
        seq.push( seq[i] + seq[i-1] );
    } while( true );
};

// Do not edit below this line
module.exports = fibonacci;
