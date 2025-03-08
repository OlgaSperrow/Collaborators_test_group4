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

