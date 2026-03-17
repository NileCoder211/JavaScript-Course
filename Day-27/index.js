// JavaScript is Synchronous
// There can be async behaviors
// - With Browser APIs/Web APIs - setTimeout, setInterval
// - With Promises
// - With Event Handlers

// Event Loop
// - Call Stack
// - Web APIs
/* 
1. Timer APIs
setTimeout() → run code after a delay
setInterval() → run code repeatedly
2. DOM API (Document Object Model)
Used to interact with HTML
document.querySelector("h1").textContent = "Changed!";
. Fetch API (network requests)
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));
  4. Event API
Handle user actions
button.addEventListener("click", () => {
  console.log("Clicked!");
});
5. Storage APIs:
localStorage
sessionStorage
localStorage.setItem("name", "Alex");


 */
// - Callback Queue:
/* 
What is the Callback Queue?

The Callback Queue (also called the task queue or microtask queue) is a place where callback functions wait before they are executed.

These callbacks come from Web APIs like:
setTimeout()
setInterval()
DOM events (clicks, input)
fetch() (after response)

🔹 How it fits into the Event Loop

JavaScript has:
Call Stack → where code runs
Web APIs → handle async tasks (timers, events)
Callback Queue → holds finished callbacks
Event Loop → moves callbacks to the stack
 */
// - MicroTask Queue/Job Queue:
// - Event Loop:

// ======== Callback Queue ==========
function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  f2();
}

main();

//  ========= EXPLANATION =========
/* 
🔹 Step-by-Step Execution

✅ Step 1: Global Execution Starts
f1, f2, and main are defined (stored in memory)
Nothing runs yet

✅ Step 2: main() is called
main goes into the Call Stack

✅ Step 3: Inside main
1. console.log("main")
Executes immediately
👉 Output: "main"
2. setTimeout(f1, 0)
Sent to Web APIs (browser)
Timer starts (0 ms, but still async)
main continues executing (does NOT wait)
3. f2() is called
Goes into Call Stack
Executes immediately
👉 Output:" f2"

✅ Step 4: main() finishes
Removed from Call Stack
Now stack is empty

✅ Step 5: Timer finishes
f1 is moved to Callback Queue

✅ Step 6: Event Loop checks
Call Stack is empty ✅
Moves f1 from Callback Queue → Call Stack

✅ Step 7: f1() executes
👉 Output: "f1"

🔹 Final Output
"main"
"f2"
"f1"

🔹 Key Concepts You Just Saw
1. setTimeout(..., 0) is NOT immediate
Even with 0ms, it:
Goes to Web APIs
Then to Callback Queue
Waits for Call Stack to be empty

2. Synchronous vs Asynchronous
console.log, f2() → synchronous (run immediately)
setTimeout → asynchronous

3. Execution Priority
Order is:
Call Stack (sync code)
Microtasks (Promises)
Callback Queue (setTimeout)

🔹 Simple Mental Model

Think:

“Anything inside setTimeout runs later, after all normal code finishes.” 
*/

//    ===========  MicroTask Queue/Job Queue =========

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");
  setTimeout(f1, 0);
  new Promise((resolve, reject) => {
    resolve("I am a promise!");
  }).then((resolve) => console.log(resolve));
  f2();
}
main();

//  ========= EXPLANATION =========
/* 
Step 1: Global Execution

Functions f1, f2, main are stored in memory

main() is called → goes into Call Stack

✅ Step 2: Inside main
1. console.log("main")

👉 Runs immediately

main
2. setTimeout(f1, 0)

Sent to Web APIs

Timer starts (async)

Will go to Callback Queue later

3. Promise is created
new Promise((resolve, reject) => {
  resolve("I am a promise!");
})

Executor runs immediately (synchronously)

resolve() is called instantly

👉 Then:

.then((resolve) => console.log(resolve));

This .then() callback goes to the Microtask Queue

4. f2() runs

👉 Output:

f2
✅ Step 3: main() finishes

Call Stack becomes empty

🔁 Now Event Loop Starts Working
🔹 Step 4: Process Microtasks FIRST

Microtask Queue has:

Promise .then() callback

👉 It runs before anything else:

I am a promise!
🔹 Step 5: Process Callback Queue

setTimeout callback (f1) is waiting

👉 It now runs:

f1
🔹 Final Output
main
f2
I am a promise!
f1
🔹 Execution Order Summary

Synchronous code runs first

Promise callbacks (Microtasks) run next

setTimeout callbacks (Callback Queue) run last

🔹 🔥 Important Rules (Memorize These)
✅ Rule 1: Call Stack runs everything synchronous first

All normal functions (console.log, f2) execute immediately

✅ Rule 2: setTimeout is always async

Even with 0ms, it goes to Web APIs → Callback Queue

✅ Rule 3: Promises go to Microtask Queue

.then(), .catch(), .finally() are microtasks

✅ Rule 4: Microtasks have higher priority

Event loop always runs:

Microtask Queue → Callback Queue
✅ Rule 5: Event Loop waits for empty Call Stack

Nothing runs until stack is completely empty

✅ Rule 6: Execution Priority Order
1. Call Stack (sync code)
2. Microtasks (Promises)
3. Callback Queue (setTimeout, setInterval)
🔹 One-Line Trick to Remember

“Sync → Promises → Timers”
 */

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}

function main() {
  console.log("main");
  setTimeout(f1, 50);
  setTimeout(f3, 30);
  new Promise((resolve, reject) => {
    resolve("Am I a promise! after f1 and f3?");
  }).then((resolve) => console.log(resolve));
  new Promise((resolve, reject) => {
    resolve("Am I a promise! after f3 and f1?");
  }).then((resolve) => console.log(resolve));

  f2();
}
main();

//  ========= EXPLANATION =========
/* 
Step-by-Step Execution
✅ Step 1: Global Execution

Functions are stored

main() is called → goes into Call Stack

🔹 Inside main()
1. console.log("main")

👉 Runs immediately

main
2. setTimeout(f1, 50)

Sent to Web APIs

Will execute after 50ms

3. setTimeout(f3, 30)

Sent to Web APIs

Will execute after 30ms

4. First Promise
resolve("Am I a promise! after f1 and f3?");

Resolves immediately (sync)

.then() goes to Microtask Queue

5. setTimeout(f3, 30) (second one)

6. Second Promise

Resolves immediately

.then() → Microtask Queue

7. f2()

👉 Runs immediately

f2
✅ Step 2: main() finishes

Call Stack is now empty

🔁 Event Loop Starts
🔹 Step 3: Run ALL Microtasks first

Microtask Queue has:

First Promise

Second Promise

👉 They execute in order they were added

Am I a promise! after f1 and f3?
Am I a promise! after f3 and f1?
🔁 Step 4: Handle Timers (Callback Queue)

Now timers depend on time + order

After ~30ms:

 f3 timer is ready

 f3 is printed

After ~50ms:
Now f1 executes
f1 is printed
🔹 Final Output
main
f2
Am I a promise! after f1 and f3?
Am I a promise! after f3 and f1?
f3
f1
🔥 Key Observations (Important!)
1. Promises IGNORE timer delays

Even though messages mention f1 and f3, they:
👉 Run before any setTimeout

2. Microtasks always run first

All .then() callbacks execute before timers

3. Timers respect delay AND order

Both setTimeout(f3, 30) run before setTimeout(f1, 50)

Same delay → FIFO order

4. Same delay ≠ same execution time exactly

But order is preserved:

First scheduled → First executed
🔹 Final Rules (Clean Version)
✅ Rule 1: Run all synchronous code first
main → f2
✅ Rule 2: Promises go to Microtask Queue
.then() → Microtask Queue
✅ Rule 3: Microtasks run completely before timers
ALL microtasks → THEN timers
✅ Rule 4: Timers go to Callback Queue
setTimeout → Web APIs → Callback Queue
✅ Rule 5: Timer execution order

Shorter delay first

Same delay → order scheduled

✅ Rule 6: Final Priority Order
1. Call Stack (sync)
2. Microtasks (Promises)
3. Timers (setTimeout)
🔹 One-Line Memory Trick

“Sync → Promises → Timers (by time, then order)”
 */

//  ============ MULTIPLES MICROTASK QUEUE AND CALLBACK QUEUE =========
console.log("start");

setTimeout(() => {
  console.log("timeout 1");

  Promise.resolve().then(() => {
    console.log("promise inside timeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
});

setTimeout(() => {
  console.log("timeout 2");
}, 0);

console.log("end");

//  ========= EXPLANATION =========
/* 
Step-by-Step Execution
✅ Step 1: Synchronous Code (Call Stack)
console.log("start");  // runs

👉 Output:

start
setTimeout #1

Sent to Web APIs

Will go to Callback Queue

Promise 1
Promise.resolve().then(...)

Goes to Microtask Queue

setTimeout #2

Also sent to Web APIs

console.log("end")

👉 Output:

end
🔁 Step 2: Microtasks Run FIRST

👉 Microtask Queue:

promise 1

👉 Output:

promise 1
🔁 Step 3: Timers (Callback Queue)

Now we process timers in order:

✅ Timer 1 runs
console.log("timeout 1");

👉 Output:

timeout 1
⚠️ Inside Timer 1 → NEW Promise
Promise.resolve().then(() => {
  console.log("promise inside timeout");
});

👉 This goes to Microtask Queue

🔁 IMPORTANT RULE TRIGGERED HERE

👉 After a microtask (like setTimeout),
ALL microtasks must run BEFORE the next microtask

So now:

👉 Output:

promise inside timeout
🔁 Step 4: Next Timer
Timer 2 runs:
console.log("timeout 2");

👉 Output:

timeout 2
🔹 Final Output
start
end
promise 1
timeout 1
promise inside timeout
timeout 2
🔥 Why This Is Tricky

Most people think:

timeout 1
timeout 2
promise inside timeout   ❌ WRONG

But actually:

👉 Microtasks interrupt between timers

🔹 🔥 Critical Rule (Advanced)
✅ After EVERY microtask:

The engine executes ALL microtasks before moving on

🔹 Visual Flow
1. Sync → start, end
2. Microtasks → promise 1
3. Timer 1
4. Microtasks → promise inside timeout
5. Timer 2
🔹 Final Rules (Interview-Level)
✅ Rule 1

Run all synchronous code first

✅ Rule 2

Run all microtasks after sync code

✅ Rule 3

Run ONE mIcrotask (e.g., setTimeout)

✅ Rule 4 (MOST IMPORTANT)

After each mIcrotask → empty microtask queue again

✅ Rule 5

Then move to next mIcrotask

🔹 Ultimate Execution Pattern
Sync →
All Microtasks →
1 Microtask →
All Microtasks →
1 Microtask →
All Microtasks →
...
🔹 One-Line Master Rule

“After every task, JavaScript drains the microtask queue completely.”
 */

// ==========  EXERCISE 1: ===========
const tom = () => console.log("Tom");

const jerry = () => console.log("Jerry");

const cartoon = () => {
  console.log("Cartoon");

  setTimeout(tom, 5000);

  new Promise((resolve, reject) =>
    resolve("should it be right after Tom, before Jerry?"),
  ).then((resolve) => console.log(resolve));

  jerry();
};

cartoon();

// ========== EXPLANATION =========

/* 
🔹 Final Output
Cartoon
Jerry
should it be right after Tom, before Jerry?
Tom
🔥 Step-by-Step Execution
✅ Step 1: Run synchronous code first
console.log('Cartoon')

👉 Output:

Cartoon
✅ Step 2: setTimeout(tom, 5000)

Sent to Web APIs

Will run after 5 seconds

Goes later to Callback Queue

⛔ Doesn’t run now

✅ Step 3: Promise
resolve('should it be right after Tom, before Jerry?')

Resolves immediately (synchronously)

.then() goes to Microtask Queue

⛔ Doesn’t log yet

✅ Step 4: jerry()

👉 Runs immediately (still synchronous)

Jerry
✅ Step 5: Call stack is now empty

Now event loop starts working 👇

🔁 Step 6: Microtasks run FIRST

👉 Promise callback executes:

should it be right after Tom, before Jerry?
🔁 Step 7: Wait for timer (5 seconds)

After ~5 seconds:

👉 tom() runs:

Tom
🔹 ❗ Why your expectation feels wrong

You asked:

“should it be right after Tom, before Jerry?”

👉 The answer is NO, because:

🔥 Rule:

Promises (microtasks) always run before timers (macrotasks)

🔹 Actual Priority
1. Synchronous code
2. Microtasks (Promises)
3. Timers (setTimeout)
🔹 So what really happened?
Cartoon      ← sync
Jerry        ← sync
Promise      ← microtask
Tom          ← timer (after 5s)
🔹 What is undefined?

You saw:

undefined

👉 That comes from the browser console, not your code.

cartoon() returns nothing

So console shows: undefined

🔹 Key Takeaways (Super Important)
✅ 1. Promises beat timers

Even setTimeout(..., 0) runs AFTER .then()

✅ 2. Sync code always finishes first

jerry() runs before promise

✅ 3. Timers depend on delay

tom() waits 5 seconds no matter what

🔹 One-Line Rule

“Sync → Promise → Timer (no matter the delay)”
 */


// ============= How SetTimeout function ===========
/* 
why are we calling tom and doggy like thess:  setTimeout(tom, 50);  setTimeout(tom(), 50); 
  setTimeout(doggy(), 30);

Ahh this is a very important distinction—and a super common mistake.

You’re comparing:

setTimeout(tom, 50);     // ✅ correct
setTimeout(tom(), 50);   // ❌ very different
setTimeout(doggy(), 30); // ❌ same issue

Let’s break it down clearly.

🔹 1. setTimeout(tom, 50) ✅

👉 Here you are passing the function itself

You are saying:

“Hey browser, run tom after 50ms”

Nothing runs immediately

Equivalent to:
setTimeout(() => tom(), 50);

✔️ Correct usage

🔹 2. setTimeout(tom(), 50) ❌

👉 Here you are calling the function immediately

What happens:

tom() runs right away

It logs:

Tom

The return value of tom() is passed to setTimeout

Since:

const tom = () => console.log("Tom");

👉 tom() returns undefined

So this becomes:

setTimeout(undefined, 50);

⛔ Which is useless / wrong

🔹 3. setTimeout(doggy(), 30) ❌

Same issue:

doggy() runs immediately

Its return value (likely undefined) is passed to setTimeout

Nothing meaningful is scheduled

🔥 Core Difference
Code	What happens
setTimeout(tom, 50)	Pass function → runs later ✅
setTimeout(tom(), 50)	Run now → pass result ❌
🔹 Simple Analogy

Think of it like this:

✅ Correct:
setTimeout(tom, 50);

👉 “Call Tom later”

❌ Wrong:
setTimeout(tom(), 50);

👉 “Call Tom NOW, then schedule nothing”

🔹 When would you use ()?

Only when wrapping:

setTimeout(() => tom(), 50);

👉 This delays execution properly

🔹 Quick Rule (Memorize This)
Use function reference → tom
NOT function call → tom()
🔹 Bonus Interview Trap

What happens here?

setTimeout(console.log("Hi"), 1000);

👉 Output:

Hi   ← immediately

Because:

console.log("Hi") runs instantly

setTimeout(undefined, 1000) does nothing

🔹 Final Takeaway

Parentheses () = execute now
No parentheses = pass function to run later
 */