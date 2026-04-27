function fibonacci(n) {
  if (n < 0) {
    console.error("Fibonacci sequence index cannot be negative.");
    return [];
  }
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  const prevSequence = fibonacci(n -1);
  const nextFibonacciNumber = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];

  return [...prevSequence, nextFibonacciNumber];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
