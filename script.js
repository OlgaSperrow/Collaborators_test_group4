// 1. Удаление дубликатов

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 2. Нахождение самого частого элемента

function mostFrequent(arr) {
  let prevResult = arr.reduce((acc, num) => {
    // null, undefined, '', 0, NaN, false
    // acc.num
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  // Object.keys(prevResult) // Получаем массив ключей (всегда массив строк!) объекта prevResult
  // Object.values(prevResult) // Получаем массив значений объекта prevResult
  return Math.max(...Object.values(prevResult)); // Получаем максимальное значение из массива значений объекта prevResult
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4])); // 3

// 3. Группировка чисел по чётности

function groupByParity(arr) {
  return arr.reduce(
    (acc, num) => {
      acc[num % 2 ? "odd" : "even"].push(num);
      return acc;
    },
    { even: [], odd: [] }
  );
}

console.log(groupByParity([1, 2, 3, 4, 5, 6])); // { even: [2, 4, 6], odd: [1, 3, 5] }

// 4. Фильтрация чисел, оставляя только простые
function filterPrimes(arr) {
  // TODO
  return arr.filter((num, index) => {
    if (num < 2) return false;
    // Math.pow() - возведение числа в степень  (**)    3 ** 5
    // Math.sqrt() - квадратный корень числа
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
}

console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 3, 5, 7]

// 5. Сортировка массива по количеству делителей числа

function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
}

function sortByDivisors(arr) {
  // TODO
  return [...arr].sort((a, b) => countDivisors(a) - countDivisors(b));
}

console.log(sortByDivisors([10, 15, 8, 12, 3, 6])); // [3, 10, 15, 8, 6, 12] (потому что: 3 (2 делителя), 8 (4 делителя), 6 (4 делителя), 10 (4 делителя), 15 (4 делителя))
