import { test } from "node:test";
import assert from "node:assert/strict";

import { makeCounter, memoize } from "../src/closures.js";
import { TaskQueue } from "../src/task-queue.js";

// Test 1: Counter closure
test("makeCounter increments and decrements correctly", () => {
  const counter = makeCounter(5);

  assert.equal(counter.value, 5);
  assert.equal(counter.inc(), 6);
  assert.equal(counter.inc(), 7);
  assert.equal(counter.dec(), 6);
  assert.equal(counter.value, 6);
});

// Test 2: Memoization
test("memoize caches previously calculated results", () => {
  let calls = 0;

  const square = memoize((n) => {
    calls++;
    return n * n;
  });

  assert.equal(square(5), 25);
  assert.equal(square(5), 25);
  assert.equal(square(6), 36);

  assert.equal(calls, 2);
});

// Test 3: TaskQueue
test("TaskQueue executes tasks in order and clears queue", async () => {
  const queue = new TaskQueue("Test Queue");

  queue.push(async () => "First");
  queue.push(async () => "Second");
  queue.push(async () => "Third");

  assert.equal(queue.size, 3);

  const results = await queue.runAll();

  assert.deepEqual(results, ["First", "Second", "Third"]);

  assert.equal(queue.size, 0);
});
