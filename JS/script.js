// const fib = (num) => {
//   let array = [0, 1];
//   for (i = 2; i < num + 1; i++) {
//     array.push(array[i - 1] + array[i - 2]);
//   }
//   return array;
// };

// console.log(fib(10));
//12345678
const primeNumber = (num) => {
  let result = false;
  for (let i = 2; i <= num; i++) {
    if (num / i == 0 && (i == 1 || i == num)) {
      result = true;
    } else {
      result = false;
    }
  }

  return result;
};

console.log(primeNumber(2));

console.log(4 % 2);
