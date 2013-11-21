//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
//Find the sum of all the multiples of 3 or 5 below 1000.

var threes = [];
var fives = [];

for (var i = 3; i < 1000; i += 3) {
  threes.push(i);
}

for (var j = 5; j < 1000; j += 5) {
  fives.push(j);
}

function intersect(a,b) {
  result = [];
  var i = 0;
  var j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) i++;
    if (a[i] > b[j]) j++;
    if (a[i] === b[j]) {
      result.push(a[i]);
      i++;
      j++;
    }
  }
  
  return result;
}

function union(a,b) {
  var table = {};
  for (var i = 0; i < a.length; i++) {
    table[a[i]] = a[i];
  }
  for (var j = 0; j < b.length; j++) {
    table[b[j]] = b[j];
  }
  var result = [];
  for (var k in table) {
    if (table.hasOwnProperty(k)) {
      result.push(k);
    }
  }
  return result;
}

var multiples = union(threes,fives);

var total = 0;
multiples.forEach(function (value) {
  total += parseInt(value,10);
});

console.log(total);
