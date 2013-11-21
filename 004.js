// Largest palindrome of 3 digit numbers
// Problem 4

var products = [];

for (var i = 100; i<1000; i++) {
  for (var j = 100; j<1000; j++) {
    var result = i * j;
    if (palindrome(result)) {
      products.push(result);
    }
  }
}

function palindrome(number) {
  number = number.toString();
  var x = 0;
  var y = number.length - 1;
  while (x < y) {
    if (number[x] === number[y]) {
      x++;
      y--;
    } else {
      return false;
    }
  }
  return true;
}

var maxValue = Math.max.apply(Math, products);
console.log(maxValue);