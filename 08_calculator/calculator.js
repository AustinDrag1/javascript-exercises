const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
	return nums.reduce( (total, num) => total += num, 0 );
};

const multiply = function(nums) {

  let total = 1;

  for( let i = 0; i < nums.length; i++ )
  {
    total *= nums[i];
  }

  return total;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {

  let total = 1;

  for( let i = 1; i <= x; i++ )
  {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
