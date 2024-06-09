/**
 * Runs CPU-intensive task with blocking the main thread.
 * @param cb Callback to call after task is finished.
 */
export function runCpuIntensiveTask(cb) {
  function fibonacciRecursive(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  fibonacciRecursive(45);
  cb();
}

/**
 * Runs CPU-intensive task in a smart way, using worker threads, without blocking the main thread.
 * @param cb Callback to call after task is finished.
 */
export function runSmartCpuIntensiveTask(cb) {
  function fibonacciIterative(n) {
    if (n <= 1) {
      return n;
    }
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }
  fibonacciIterative(45)
  cb();
}
