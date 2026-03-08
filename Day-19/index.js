console.log("Day 19: Events in JS")

// === What is an Event(browser)
// An Event is just a signal that something happened in the browser


// ====== Event Handling in markup (INSIDE HTML) ======
{


    function handleClick(){
        console.log("Button Clicked with hello")
    }

}

// ====== Event Handling in Script (INSIDE JavaScript) ======
{

    const myBtn2Elem = document.getElementById("myBtn2");

    myBtn2Elem.onclick = function(){
      console.log("my button 2 clicked");
   }

    myBtn2Elem.onclick = function (){
       console.log("my button 2 clicked again");
    }

    // The issue here is that the second function will always overwrite the first one

 //   myBtn2Elem.onclick = function () {handleClick("Hola");}

}


// addEventListener and removeEventListener
// addEventListener takes two parameters: type of event and callback function that handle the event
// When you pass an anonymous function or arrow function directly into removeEventListener, the event listener doesn’t get removed 
// because removeEventListener requires the exact same function reference that was originally passed to addEventListener.
// JavaScript compares functions by reference, not by their code.
// 🔎 What’s Actually Happening
//Every time you write an anonymous or arrow function inline, you create a new function object in memory.
// So even if the code looks identical, it's not the same function.

{
    const countBtnElem = document.getElementById("countBtn");

    let counter = 0;
    const handleCount = function(){
        console.log("Counter", counter++)
    }
   
       countBtnElem.addEventListener("click", handleCount);
     countBtnElem.removeEventListener("click", handleCount);// this will only remove handleCount but not greetMe since it was not passed
   
    // Adding Multiple functions to one event listener

    const greetMe = function(){
        console.log("Thank You")
    }
      countBtnElem.addEventListener("click", greetMe);
   
}


// DOM Content Loaded
// DOMContentLoaded is type of event listener that listen whether the dom content is loaded or not
// and it works well addEventListener


// this code will not run
document.onDOMContentLoaded = function (){
    console.log("DOM Content Loaded...");
}

// this code will run
document.addEventListener("DOMContentLoaded", ()=>{
      console.log("DOM Content Loaded...");
})



//    ======  ANATOMY OF EVENT OBJECT  =======

{
    const searchElem = document.getElementById("search-id");

    function handleChange(event){
        console.log("Target:", event.target);// this gives the target element in the UI( which is input in this case)
        console.log("Target Name:", event.target.name);// this gives the name of the target element(which is search)
        console.log("Target Value:", event.target.value);// this gives the exact value in the target element(like hello)
        console.log("Event Type:", event.type);// the type of event is change event
        console.log("Current Target:", event.currentTarget);// this gives the current target element. and currentTarget is the element in which eventlistener is attached to
        console.log(this)
        // inside of the handler function, the "this" keyword will always return the element on which eventListener is attached to
    }
    searchElem.addEventListener("change", handleChange)
}



//  ======= Event Bubbling, Capturing and Delegation  =========

// 1.Event Bubbling
// In event bubbling, the event starts from the target element and bubble up through its ancestors
// the Flow is: Child -> Parent -> GrandParent -> Document

document.getElementById("grandParent").addEventListener("click", ()=>{
    console.log("Grandparent Clicked")
});

document.getElementById("parent").addEventListener("click", ()=>{
    console.log("Parent Clicked")
});

document.getElementById("child").addEventListener("click", ()=>{
    console.log("Child Clicked")
});



// 2.Event Capturing
// In event capturing, the event flows from the outmost ancestor dow to the target element.it happens before the actual target handles the event.

{

    document.getElementById("grandParent").addEventListener("click", () => {
      console.log(" Captured at Grandparent ");
    },
     true // this enable capturing
);

    document.getElementById("parent").addEventListener(
      "click",
      () => {
        console.log("Captured at Parent ");
      },
      true, // this enable capturing
    );

    document.getElementById("child").addEventListener(
      "click",
      () => {
        console.log("Captured at Child ");
      },
      true, // this enable capturing
    );

}



// 3.Event Delegation -it is a technique where you add a single event handler to a parent element, instead of adding individual event listeners to all its children.
{
  document.getElementById("itemList").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log(`You clicked on ${event.target.textContent}`);
    }
  });

  /* 
  It has to be "LI" (uppercase) because the DOM returns tagName in uppercase for HTML elements.
In browsers, event.target.tagName always returns the tag name in all caps, regardless of how it appears in your HTML.
So even if your HTML looks like this: 
<li>Apples</li> 
When accessed through JavaScript:
event.target.tagName
It returns:
"LI"
Not "li".
Why this happens
In HTML documents, the DOM normalizes element tag names to uppercase. So:
<div> → "DIV"
<p> → "P"
<li> → "LI"
That’s just how the browser represents them internally.
   */
}



// ====== Stop Propagation =======

{
  document.getElementById("father").addEventListener("click", ()=>{
    console.log("Parent clicked");
  });

  document.getElementById("son").addEventListener("click", (event)=>{
    event.stopPropagation();
    console.log("Child clicked");
  });
}



//    ====== EVENT DEFAULTS ======
// here we use preventDefault() method
/* 
  document.getElementById("website").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Default link behavior prevented");
  });

  document.getElementById("loginForm").addEventListener("click", (e) => {
        e.preventDefault();
    console.log("Form submission prevented");
  });
 */





  // ===== CUSTOM EVENTS ======