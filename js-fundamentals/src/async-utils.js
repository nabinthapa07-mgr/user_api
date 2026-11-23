// 1. Sleep: Wait for a specified time
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// 2. Retry: Try executing a function again if it fails
export async function retry(fn, { retries = 3, delayMs = 100 } = {}) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn(attempt);
    } catch (err) {
      lastError = err;

      if (attempt < retries) {
        await sleep(delayMs * 2 ** attempt);
      }
    }
  }

  throw lastError;
}

// 3. withTimeout: Reject if a task takes too long
export function withTimeout(promise, ms) {
  let timer;

  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => {
      reject(new Error(`Timed out after ${ms}ms`));
    }, ms);
  });

  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

// 4. Pool: Run multiple tasks with limited concurrency
export async function pool(tasks, limit = 2) {
  const results = new Array(tasks.length);
  let next = 0;

  async function worker() {
    while (next < tasks.length) {
      const i = next++;
      results[i] = await tasks[i]();
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, tasks.length) }, worker),
  );

  return results;
}
