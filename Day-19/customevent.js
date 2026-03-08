console.log("Custom Events");

// Step 1: Create a Custom Event

   const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username: "John",
        role: "admin"
    },
   })



// Step 2: Listen to the Custom Event
document.addEventListener("userLoggedIn", (e) =>{
    console.log(`User Login Detected: ${e.detail.username}`)
})


// Step 3: Dispatching the Custom Event

document.dispatchEvent(myEvent);
/* 
Dispatching a custom event” means manually creating an event and sending (triggering) it on an element so that any listeners for 
that event will run.
Normally, the browser dispatches events automatically (like "click" when you click).
With custom events, you dispatch them yourself in JavaScript.

When dispatchEvent() runs, it fires the event and all listeners for "userLoggedIn" execute.
That’s what dispatching means:
Sending the event into the DOM so it can be handled.
 */



// ====== User logged in custom event

function loginUser(username) {
    const event = new CustomEvent("userLoggedIn", {
        detail: {username}
    });
    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", (e)=>{
    const user = e.detail.username;
    document.getElementById("welcome").textContent = `Welcome, ${user}`;
})