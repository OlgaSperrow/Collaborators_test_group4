
function groupByParity(arr) {
  return arr.reduce(
    (acc, element) => {
      const currentEl = element % 2 === 0 ? "even" : "odd";
      acc[currentEl].push(element);
      return acc;
    },
    { even: [], odd: [] }
  );
}
console.log(groupByParity([1, 2, 3, 4, 5, 6]));

// { even: [2, 4, 6], odd: [1, 3, 5] }

 
