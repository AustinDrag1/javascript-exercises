const findTheOldest = function( peeps ) {
    return find1(peeps);
};

// Find using reduce
const find1 = function( peeps ) {
    return peeps.reduce( (obj, peep) => get1(obj,peep) );
}

// Calc - calculates all but the first person's age twice unfortunately
const get1 = function( obj, peep ) {
    
    // Calc age (current)
    let yearOfDeath = obj.yearOfDeath === undefined ? new Date().getFullYear() : obj.yearOfDeath;
    const ageCurr = yearOfDeath - obj.yearOfBirth;

    // Calc age (next)
    yearOfDeath = peep.yearOfDeath === undefined ? new Date().getFullYear() : peep.yearOfDeath;
    const ageNext = yearOfDeath - peep.yearOfBirth;

    // Compare ages; return oldest
    return ageNext > ageCurr ? peep : obj;
}

// Find using other method
const find2 = function( peeps ) {

}

// Do not edit below this line
module.exports = findTheOldest;
