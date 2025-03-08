function filterPrimes(arr) {
    return arr.filter((e) => {
      if (e < 2) return false;
      for (let i = 2; i < e; i++) {
        if (e % i === 0) return false;
      }
      return true;
    });
  }
  
  console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  
