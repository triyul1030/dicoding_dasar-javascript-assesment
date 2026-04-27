function factorial(n) {
  if (n < 0) {
    console.error("Factorial is not defined for negative integers.");
    return undefined;
  }
  if (n === 0 || n=== 1) {
    return 1;
  }
  return n * factorial(n -1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
