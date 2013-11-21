// Even Fibonacci numbers
// Problem 2

var fibSequence = [1, 2];
var newNum = 1 + 2;

while (newNum < 4000000) {
  fibSequence.push(newNum);
  var lastValue = fibSequence.length - 1;
  newNum = fibSequence[lastValue] + fibSequence[lastValue - 1];
}

var evenFib = fibSequence.map(function (value) {
  if (value % 2 === 0) {
    return value;
  }
});

var evenFibProper = [];
for (var i = 0; i < evenFib.length; i++) {
  if (evenFib[i]) evenFibProper.push(evenFib[i]);
}

var total = evenFibProper.reduce(function (prev, current, index, array) {
  return prev + current;
});

console.log(evenFibProper);
console.log('---------\n' + total);