function fibonacci(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    let p1 = 0;
    let p2 = 1;
    let current;
  
    for (let i = 2; i <= n; i++) {
      current = p1 + p2;
      p1 = p2;
      p2 = current;
    }
    return current;
  }
  
  // Test cases
  console.log(fibonacci(4));   // this will print the fibonacci of the number: 3
  console.log(fibonacci(7));   // this will print the fibonacci of the number: 13
  console.log(fibonacci(43));  // this will print the fibonacci of the number: Result for n = 43 
  console.log(fibonacci(101)); // this will print the fibonacci of the number: Result for n = 101
  console.log(fibonacci(227)); // this will print the fibonacci of the number: Result for n = 227
  console.log(fibonacci(491)); // this will print the fibonacci of the number: Result for n = 491
  console.log(fibonacci(881)); // this will print the fibonacci of the number: Result for n = 881
  