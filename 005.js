// Smallest divisible number
// Problem 5

var start = 2520;

while (true) {
  start += 2;
  var total = 0;
  if (start % 3 !== 0) total++;
  if (start % 4 !== 0) total++;
  if (start % 5 !== 0) total++;
  if (start % 6 !== 0) total++;
  if (start % 7 !== 0) total++;
  if (start % 8 !== 0) total++;
  if (start % 9 !== 0) total++;
  if (start % 10 !== 0) total++;
  if (start % 11 !== 0) total++;
  if (start % 12 !== 0) total++;
  if (start % 13 !== 0) total++;
  if (start % 14 !== 0) total++;
  if (start % 15 !== 0) total++;
  if (start % 16 !== 0) total++;
  if (start % 17 !== 0) total++;
  if (start % 18 !== 0) total++;
  if (start % 19 !== 0) total++;
  if (start % 20 !== 0) total++;
  if (total === 0) {
    console.log(start);
    break;
  }
}