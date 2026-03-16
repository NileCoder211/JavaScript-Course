// Mistake 1 - Looping with Promises

const ids = ["1", "2", "3", "4"];

const fetchData = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const loopFetches = () => {
  for (let i = 0; i < ids.length; i++) {
    console.log(`*** Fetching details of ${ids[i]} ***`);
    const response = fetchData(ids[i]);
    response.then((response) => {
      response.json().then((data) => {
        console.log(
          `
                    Name: ${data?.name}
                    Company:${data?.company?.name}
                    Address: ${data?.address?.city}
                    `,
        );
      });
    });
  }
};

loopFetches();


/* 
Nothing is wrong with using a for loop with Promises or async code. The behavior you're seeing is simply because fetch() is
 asynchronous in JavaScript.
The loop runs synchronously, but the network requests complete later, so the logs appear in two phases.

Let’s break it down.

1️⃣ What your loop actually does

Your code:

for (let i = 0; i < ids.length; i++) {
  console.log(`*** Fetching details of ${ids[i]} ***`);
  const response = fetchData(ids[i]);
  response.then(...)
}

Important points:

fetch() returns a Promise immediately

The loop does not wait for the Promise to resolve

The loop finishes before any API response arrives

So the timeline looks like this:

Start loop
↓
fetch(1) started
fetch(2) started
fetch(3) started
fetch(4) started
Loop finished
↓
responses start arriving
2️⃣ Why the output looks like this

Your output:

*** Fetching details of 1 ***
*** Fetching details of 2 ***
*** Fetching details of 3 ***
*** Fetching details of 4 ***

These run immediately because they are synchronous.

Then the network responses arrive:

Name: Leanne Graham
Name: Ervin Howell
Name: Patricia Lebsack
Name: Clementine Bauch

Those appear later because they are inside .then() callbacks.

3️⃣ Visualizing the event loop

Execution order:

Call loopFetches()

FOR LOOP STARTS
│
├─ console.log(1)
├─ start fetch(1)
│
├─ console.log(2)
├─ start fetch(2)
│
├─ console.log(3)
├─ start fetch(3)
│
├─ console.log(4)
├─ start fetch(4)
│
FOR LOOP ENDS
│
└─ wait for network responses

Promises resolve later
4️⃣ Important misconception

Many developers expect this:

Fetching 1
User 1 data

Fetching 2
User 2 data

But your code does parallel requests, not sequential ones.
 */





const loopFetchesAsync = async () => {
    for (let i = 0; i < ids.length; i++) {
        console.log(`=== Fetching details of ${ids[i]} ===`);
        const response = await fetchData(ids[i]);
        const data = await response.json();
        console.log(
            `
                Name: ${data?.name}
                Company:${data?.company?.name}
                Address: ${data?.address?.city}
            `
        );
    }
};

loopFetchesAsync();

/* 
Now the flow becomes:

Fetching 1
User 1 data

Fetching 2
User 2 data

Fetching 3
User 3 data
6️⃣ Why developers avoid await in loops sometimes

Sequential requests are slower.

Example:

If each request takes 1 second

Sequential:

1s + 1s + 1s + 1s = 4 seconds

Parallel:

1 second total

So parallel is often better.
 */




const loopAll = async () => {
  const responses = await Promise.allSettled(ids.map((id) => fetchData(id)));
  const data = await Promise.allSettled(
    responses.map((response) => response.value.json()),
  );
  console.log(data);
  data.map((userInfo) => {
    const user = userInfo.value;
    console.log(`*** Fetching details of ${user?.name} ***`);
    console.log(
      `
                Name: ${user?.name}
                Company:${user?.company?.name}
                Address: ${user?.address?.city}
            `,
    );
  });
};

loopAll();

/* 
Let’s walk through your code line by line, explaining what it does and why it’s written that way in JavaScript.

Your code is designed to fetch multiple users in parallel and handle errors safely using the Promise.allSettled API.

1️⃣ Function declaration
const loopAll = async () => {
What it does

Creates an async arrow function named loopAll.

Why

async allows you to use await.

await lets you write asynchronous code that looks synchronous.

Without async, you could not use await.

2️⃣ Start multiple fetch requests in parallel
const responses = await Promise.allSettled(ids.map((id) => fetchData(id)));
What happens step-by-step
Step 1: ids.map(...)
ids.map((id) => fetchData(id))

Transforms this array:

["1","2","3","4"]

into:

[
 fetchData("1"),
 fetchData("2"),
 fetchData("3"),
 fetchData("4")
]

Each fetchData(id) returns a Promise from fetch().

So now we have an array of Promises.

Step 2: Promise.allSettled(...)
Promise.allSettled([...])

This waits for all promises to finish, whether they:

succeed

fail

Example result:

[
 { status: "fulfilled", value: Response },
 { status: "fulfilled", value: Response },
 { status: "fulfilled", value: Response },
 { status: "fulfilled", value: Response }
]
Why use allSettled instead of Promise.all?

Because:

Promise.all()

❌ fails immediately if one request fails

But:

Promise.allSettled()

✅ waits for all results, even if some fail.

Step 3: await
await Promise.allSettled(...)

This pauses execution until all fetch requests complete.

So responses becomes an array like:

[
 { status: "fulfilled", value: Response },
 { status: "fulfilled", value: Response },
 { status: "fulfilled", value: Response },
 { status: "fulfilled", value: Response }
]

Each value contains a Response object from fetch.

3️⃣ Convert responses into JSON
const data = await Promise.allSettled(
    responses.map((response) => response.value.json())
);
Why this step exists

fetch() returns a Response object, not the actual JSON data.

You must call:

response.json()

to extract the JSON.

Step-by-step
Step 1: map responses
responses.map((response) => response.value.json())

This converts:

Response

into:

Promise<JSON>

So we again get an array of promises.

Example:

[
 Promise,
 Promise,
 Promise,
 Promise
]
Step 2: wait for all JSON conversions
await Promise.allSettled(...)

Now we wait until all JSON parsing is complete.

Result:

[
 { status: "fulfilled", value: user1 },
 { status: "fulfilled", value: user2 },
 { status: "fulfilled", value: user3 },
 { status: "fulfilled", value: user4 }
]
4️⃣ Log the raw results
console.log(data);

This prints the array of results:

[
 {status:"fulfilled", value:{...user1}},
 {status:"fulfilled", value:{...user2}},
 {status:"fulfilled", value:{...user3}},
 {status:"fulfilled", value:{...user4}}
]

Useful for debugging.

5️⃣ Loop through the results
data.map((userInfo) => {

Iterates over each item in the data array.

Each userInfo looks like:

{
 status: "fulfilled",
 value: { name: "...", company: {...}, address: {...} }
}
6️⃣ Extract the actual user
const user = userInfo.value;

Because the structure is:

{ status, value }

The real user object is inside value.

Example:

user = {
 name: "Leanne Graham",
 company: {...},
 address: {...}
}
7️⃣ Optional chaining usage
user?.name

Uses the Optional Chaining operator.

Why?

If user is undefined (e.g. request failed):

Without optional chaining:

user.name

❌ throws error

With optional chaining:

user?.name

✅ safely returns undefined.

8️⃣ Logging user info
console.log(`*** Fetching details of ${user?.name} ***`);

Displays a heading.

console.log(`
Name: ${user?.name}
Company:${user?.company?.name}
Address: ${user?.address?.city}
`);

Prints the formatted user data.

Example output:

Name: Leanne Graham
Company: Romaguera-Crona
Address: Gwenborough
9️⃣ Run the function
loopAll();

Calls the async function and starts the process.

🔎 Why the code is written this way

This pattern solves two major async problems:

1️⃣ Parallel requests

All fetches start at the same time, making the program faster.

2️⃣ Error tolerance

Using:

Promise.allSettled()

means:

one failed request doesn't stop the others

🧠 Final execution flow
Start function
↓
Create 4 fetch promises
↓
Wait for all requests (allSettled)
↓
Convert responses to JSON
↓
Wait for JSON parsing
↓
Loop through results
↓
Print user info

✅ Key idea

Your code performs two parallel phases:

1️⃣ fetch all responses
2️⃣ convert them all to JSON

Both handled safely with Promise.allSettled().
 */



// Mistake 2 - Promise Chain vs. No Chain

// Chain
const ten = new Promise((resolve, reject) => {
    resolve(10);
});

ten.then((result) => {
    // returns 20
    return result + 10;
})
    .then((result) => {
        // returns 200
        return result * 10;
    })
    .then((result) => {
        // returns 190
        return result - 10;
    })
    .then((result) => {
        // logs 190 in console
        console.log(result);
    });

// No Chain
ten.then((result) => {
    // returns 20
    return result + 10;
});
ten.then((result) => {
    // returns 100
    return result * 10;
});
ten.then((result) => {
    // returns 0
    return result - 10;
});
ten.then((result) => {
    // logs 10 in the console.
    console.log(result);
});



// Mistake 3 - (Not)Handling Errors with Promises

const oddEven = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("Even");
        } else {
            reject(new Error("Odd"));
        }
    });
};

oddEven(10).then((result) => {
    console.log(result);
});

oddEven(11)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err.message);
    });


    
// Mistake 4 - Missing a function in .then() handler

const hello = Promise.resolve("Hello");
hello.then("World").then((result) => console.log(result));
// this return "hello" instead of "world" since world is never passed as callback function to .then() handler method
// According to the Promise specification:
// If the argument passed to .then() is not a function, it is ignored.
// JavaScript internally treats it like this: hello.then(undefined)
// 4️⃣ What .then(undefined) means:
// If no handler is provided, the Promise passes the value through unchanged.
// So this: hello.then(undefined)
// acts like:
// value => value
// So "Hello" continues unchanged.
 hello.then(() => "World").then((result) => console.log(result));// this print "World"




 
// Mistake 5 - Using Promises for Synchronous Operations
const cache = {
    "tapas@email.com": {
        name: "Tapas Adhikary",
        org: "tapaScript",
    },
};

const getDataV1 = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFromCache = cache[email];
            if (!userFromCache) {
                // Make the call to fetch user data
                // update cache
                console.log("Make the call and update cache");
            } else {
                console.log(`User details ${JSON.stringify(userFromCache)}`);
            }
        }, 2000);
    });
};

getDataV1("tapas@email.com");

const getDataV2 = (email) => {
    const userFromCache = cache[email];
    if (userFromCache) {
        console.log(`User details ${JSON.stringify(userFromCache)}`);
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Make the call and update cache");
            }, 2000);
        });
    }
};

getDataV2("tapas@email.com");

// Mistake 6 - Using unnecessary try-catch with promises

// Redundant try-catch
new Promise((resolve, reject) => {
    try {
        const value = getValue();
        // do something with value
        resolve(value);
    } catch (e) {
        reject(e);
    }
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Better Way
new Promise((resolve, reject) => {
    const value = getValue();
    // do something with value
    resolve(value);
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error));