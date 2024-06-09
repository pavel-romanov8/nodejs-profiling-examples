const memoryLeak = new Map();

/**
 * Runs memory leak task in a way that all created objects are persisted in memory across the application.
 * @param cb Callback to call after the task is finished
 */
export function runMemoryLeakTask(cb) {
  for (let i = 0; i < 10000; i++) {
    const person = {
      name: `Person number ${i}`,
      age: i,
    };
    memoryLeak.set(person, `I am a person number ${i}`);
  }
  cb();
}

const smartMemoryLeak = new WeakMap();

/**
 * Runs memory leak task in a way that all created objects get garbage collected after function call ends.
 * @param cb Callback to call after the task is finished.
 */
export function runSmartMemoryLeakTask(cb) {
  for (let i = 0; i < 10000; i++) {
    const person = {
      name: `Person number ${i}`,
      age: i,
    };
    smartMemoryLeak.set(person, `I am a person number ${i}`);
  }
  cb();
}
