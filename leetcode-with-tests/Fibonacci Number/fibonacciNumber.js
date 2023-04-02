export function Fibonacci(n) {
  if (n > 1) {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  } else return n;
}

// function firstHundredFibonacci() {
//   for (let fibsNumero = 0; fibsNumero < 100; fibsNumero++) {
//     debugger;
//     console.log(Fibonacci(fibsNumero));
//   }
// }

export function FibonacciNumberTests() {
  //   let num1 = 1;
  //   let num2 = 2;
  //   let num3 = 3;
  //   let num4 = 4;
  //   let num7 = 7;
  //   let num10 = 10;
  //   let num20 = 20;
  //   console.log(Fibonacci(num1));
  //   console.log(Fibonacci(num2));
  //   console.log(Fibonacci(num3));
  //   console.log(Fibonacci(num4));
  //   console.log(Fibonacci(num7));
  //   console.log(Fibonacci(num10));
  //   console.log(Fibonacci(num20));
  firstHundredFibonacci();
}
