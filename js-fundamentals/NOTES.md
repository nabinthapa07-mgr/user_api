\# Assignment 1.1: Advanced JavaScript (ES6+)



\## Part C: Event Loop Ordering Lab



\### 1. Predicted Output



Based on Node.js ES module scheduling, the expected order is:



```text

1 sync start

2 sync inside async fn (before first await)

2b sync end

4 microtask: promise.then

5 microtask: queueMicrotask

5b microtask: after await

3 nextTick

6 macrotask: setTimeout 0

7 macrotask: setImmediate

```



\### 2. Actual Output



The output observed after running `node src/event-loop.js` was:



```text

1 sync start

2 sync inside async fn (before first await)

2b sync end

4 microtask: promise.then

5 microtask: queueMicrotask

5b microtask: after await

3 nextTick

6 macrotask: setTimeout 0

7 macrotask: setImmediate

```



\### 3. Explanation of Event Loop Ordering



\- Synchronous statements execute first.

\- Promise callbacks, `queueMicrotask()` and the continuation after `await` execute as microtasks.

\- In this ES module example, `process.nextTick()` runs after the Promise microtasks because module evaluation occurs through the microtask queue.

\- Timer and immediate callbacks execute during their respective event-loop phases.

\- The relative order of `setTimeout(0)` and `setImmediate()` can vary when both are scheduled from the main module.



\### 4. Starvation Demonstration



After running `node src/starvation.js`, the output was:



```text

microtasks done

timer never fires while microtasks recurse

```



This demonstrates that recursively scheduling microtasks can delay timer callbacks until the microtask queue becomes empty.



\---



\## Part A: Short Answers



\### 1. CommonJS vs ES Modules (CJS vs ESM)



Two differences are:



1\. CommonJS uses `require()` and `module.exports`, whereas ES Modules use `import` and `export`.

2\. ES Modules support top-level `await`, whereas CommonJS does not support it directly.



\### 2. Why does await not block the thread?



The `await` keyword pauses the execution of the current asynchronous function until its Promise settles. However, it does not block the JavaScript thread. Other operations can continue executing while the Promise is pending.



\### 3. Why do microtasks run before setTimeout(0)?



After the current synchronous execution finishes, JavaScript processes the microtask queue before moving to the next event-loop task, such as a timer callback. Therefore, Promise callbacks and other microtasks normally execute before `setTimeout(0)`.



\---



\## Test Results



All six automated tests passed successfully.



| Test | Result |

|---|---|

| retry succeeds after failures | PASS |

| withTimeout rejects slow work | PASS |

| pool preserves order | PASS |

| makeCounter increments and decrements correctly | PASS |

| memoize caches previously calculated results | PASS |

| TaskQueue executes tasks in order and clears queue | PASS |



\*\*Total: 6 passed, 0 failed.\*\*

