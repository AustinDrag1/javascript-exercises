const palindromes = function ( letters ) {

    // Remove whitespace and some punctuation
    letters = letters.replace(/(\.|,|\ |\!)/g,"").toLowerCase();

    // console.log(letters);

    // Do the compares
    const len = letters.length;
    const stop = letters.length % 2;
    const minChecks = len / 2 - stop;

    // console.log(len);
    // console.log(stop);
    // console.log(minChecks);

    for( let i = 0; i < minChecks; i++ )
    {
        // console.log("compare");
        // console.log(letters.charAt(i));
        // console.log(letters.charAt(len - i - 1));

        if( letters.charAt(i) !== letters.charAt(len - i - 1) )
        {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
