
function removeDuplicates(arr) {
    return [...new Set(arr)];

  
  console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  





const array = [10, 15, 8, 3, 6];
//function changed original because I use copy of array
function sortByDivisors(arr) {
  return [...arr].sort((a, b) => {
    let numberA = 0;
    let numberB = 0;

    for (let i = 1; i <= a; i++) {
      if (a % i === 0) numberA++;
    }
    for (let i = 1; i <= b; i++) {
      if (b % i === 0) numberB++;
    }
    return numberA-numberB;
  });
}

const sortedArray = sortByDivisors(array);
console.log ("sorted array:", sortedArray);
console.log( "original:", array);

function mostFrequent(arr) {
  const frequent = {};
  let maxFrequent = 0;
  let mostFrequentEl = null; 

  for (const element of arr) {
    frequent[element] = (frequent[element] || 0) + 1;
    if (frequent[element] > maxFrequent) {
      maxFrequent = frequent[element];
      mostFrequentEl = element;

    }
  }
  return mostFrequentEl;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
     


  const arr = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(arr));

