// Problem 3

var target = 600851475143;

function getPrimes(max) {
  var sieve = [], i, j, primes = [];
  for (var i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

var primes = getPrimes(60085147);

var primeFactors = [];

for (var i = 0; i < primes.length; i++) {
  if (target % primes[i] === 0)
    console.log(primes[i]);
}

//console.log(primeFactors);