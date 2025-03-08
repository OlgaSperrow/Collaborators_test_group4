
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const arr = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(arr));
  