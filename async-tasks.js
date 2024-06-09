/**
 * Run basic async task where all async operations are called in a waterfall way.
 * @param cb Callback to call when operation is finished.
 */
export async function runAsyncTask(cb) {
  await generateAsyncOperation();
  await generateAsyncOperation();
  await generateAsyncOperation();
  cb();
}

/**
 * Run smart async task where all async operations are called concurrently.
 * @param cb Callback to call when task is finished.
 */
export async function runSmartAsyncTask(cb) {
  await Promise.all(new Array(3).fill().map(() => generateAsyncOperation()));
  cb();
}

function generateAsyncOperation() {
  return new Promise(resolve => {
    setTimeout(() => {
      for (let i = 0; i < 50000000; i++) { }

      resolve();
    }, 1000);
  });
}
