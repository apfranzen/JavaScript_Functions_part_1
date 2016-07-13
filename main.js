console.log('sanity check!')

//1.
function sum(num1, num2) {
  return num1 + num2;
}

sum(1, 2);

//2. Define a function called is equal that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

function isEqual(arg1, arg2) {
  if(arg1 === arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(isEqual(1, 1));
console.log(isEqual(1, 2));
console.log(isEqual(1, '1'));
console.log(isEqual('one', 'one'))

//3.
//Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
//
function discountPercentage(originalAmount, percentOff) {
  return(originalAmount*perecentOff)
  var totalDiscount = 0
}
function discountPercentage(cost, discount) {
  if (discount > 0 && discount < 100) {
    return cost * (discount / 100);
  } else {
    return "Warning";
  }
}
console.log(discountPercentage(100, 99))

//4.

function stringCapitalize(someString) {
  var arrayCaps = [];
  var arrayOfString = someString.split(" ");
  for (var i = 0; i < arrayOfString.length; i++) {
    arrayCaps.push(arrayOfString[i].charAt(0).toUpperCase() + arrayOfString[i].slice(1))
}
return arrayCaps.join(" ");
};
console.log(stringCapitalize("capitalize this string"));

//5.

function evenNumbers(num) {
  if(num < 0 || num > 100) {
    return "Please provide a number between 0 and 100";
  } else {
    for (var i = 0; i <= num; i+=2) {
      if (i % 2 === 0);
      console.log(i);
    }
  }
};
console.log(evenNumbers(75))

//6.

function oddNumbers(num){
  //check if argument is an integer
  if(!Number.isInteger(num)) {
    return false;
  //check if arugment falls between 0 and 100
  } else if (num > 100 || num < 0) {
    return false;
  }
  return true;
}

// output odd numbers
function outputOdd(num) {
  var result = [];
  if (num < 40) {
    for (var i = 1; i < 40; i+=2) {
        result.push(i);
  }
} else {
  for  (var j = 1; j < 40; j+=2) {
    result.push(j);
  }
}
  return result;
}

console.log(oddNumbers(2));
console.log(oddNumbers(2.5));
console.log(oddNumbers(3));
console.log(oddNumbers('1'));
console.log(oddNumbers('oneksddh'));
console.log(oddNumbers('100'));
