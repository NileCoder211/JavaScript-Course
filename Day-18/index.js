console.log("Welcome to day 18: Dom Manipulation")


// ======== CREATING ELEMENTS DYNAMICALLY   ========
{
const pElem = document.createElement("p")

pElem.innerText = "This is a text added dynamically."

document.body.appendChild(pElem);

}


// ===== INSERTING ELEMENTS DYNAMICALLY  ======

// 1.Inserting elements before the other existing element using insertBefore() method
{
const span = document.createElement("span");
span.innerText = "I am a Span";
const pElem = document.querySelector("p")
document.body.insertBefore(span, pElem)

}
// 2. inserting elements after an existing element using nextSibling() method

{
  const span = document.createElement("span");
  span.innerText = "I am a Span added after p element";
  const pElem = document.querySelector("p");
  document.body.insertBefore(span, pElem.nextElementSibling);

}

///  ====== MODIFYING CONTENT =======

// using innerText, innerHTML and textContent

{
    // using innerHTML
    const pElem = document.querySelector("p");
    pElem.innerHTML = "<u> Hello</u> How are you?"

    // Using textContent

    const divElem = document.querySelector("div");

    console.log("Inner Text", divElem.innerText); // this result to undefined(no value shown) since the text display is none
    // therefore the innerText method consider the CSS Visibility in an html
    console.log("Inner Content", divElem.textContent);// this will print Test me despite its display property has a value of none
    // therefore textContent method doesn't consider the CSS Visibility. As long as it exist in html document, it will show it
}



// ===== REMOVING/REPLACING ELEMENTS FROM DOM ======

{
  let list = document.getElementById("myList");
  console.log(list.children); // this return a HTMLCollection which is array-like

  const itemToREmove = list.children[0]; // to get the element that i want to remove
  list.removeChild(itemToREmove); // A will no longer exist

  document.getElementById("removeMe").remove(); // this will remove the this div

  // ==== REMOVING EVERYTHING =====

  // list.innerText = ""; // this remove everything
 //  list.textContent = ""; // this remove everything
 // list.replaceChildren() - this remove everything if no parameters passed. 
 // if there parameters passed to it, the values passed will replace the existing elements

 let pElem = document.querySelector("p");
 pElem = "This is the text that replaced all the items in the list"
 // list.replaceChildren(pElem)
}



//  ======= READ, WRITE AND REMOVE ATTRIBUTES ====
{
  // 1.Reading attributes
  const imgElem = document.querySelector("img");
  console.log(imgElem.getAttribute("src")); //someImage.png
  console.log(imgElem.getAttribute("alt")); // Some Image


  // 2. write/modify attributes

  imgElem.setAttribute("src", "banner.png")
  imgElem.setAttribute("alt", "banner image")

  //3.remove attribute

  imgElem.removeAttribute("height");

  // 4. checks whether an attribute exists or not

  imgElem.hasAttribute("src") // true
  imgElem.hasAttribute("height") // false

}



// ===== TRAVERSING/NAVIGATING DOM ======

{
  // ======= parentElement and parentNode =====
  const span = document.getElementById("text");

  console.log("Parent Element", span.parentElement); // p tag
  console.log("Parent Node", span.parentNode); // p tag

  console.log("GrandParent Element", span.parentElement.parentElement);// div tag
  console.log("GrandParent Node", span.parentNode.parentNode); // div tag
// you can use any of these (parentElement and parentNode) since they return the same thing

  // ======= children and childNode ======
  // children return a HTMLCollection
  // childNodes return a NodeList irrespective of the types of the node(textNode, commentNode)

  const mainElem = document.getElementById("main-id");

  console.log("Children", mainElem.children); // p tag
  console.log("Child Nodes", mainElem.childNodes);// all the nodes


  // ===== firstChild and firstElementChild =====
  console.log("First child", mainElem.firstChild) // #text which means new line(\n) or enter
  console.log("First Element child", mainElem.firstElementChild) // p.tag

  // ===== lastChild and lastElementChild ======
  console.log("Last child", mainElem.lastChild) // #text which means new line(\n) or enter (this is the last line)
  console.log("Last Element child", mainElem.lastElementChild) // p.tag(this is the last element child)


  // nextSibling
  // nextElementSibling
  // previousSibling
  // previousElementSibling

}


// ======= MANIPULATING STYLES =======

{
  const pElem = document.getElementById("p-id");
  pElem.style.backgroundColor="pink"
  // in the object course we learned that if the property is having a special character, you cannot read the property value using 
  // dot notation (.), therefore we have to pass that string to the square bracket [""]
}



// ====== Manipulating styles  =====

{
//   ==== Using className
  const mainDivElem = document.getElementById("main-id");
  console.log(mainDivElem.className);// this return the class(es) in that div
  // classname property gives the current class name. and it is compromised as well

  mainDivElem.className = "secondary-class"


  // =====   Using classList   ======
  // it helps you to remove classes by toggling

 console.log( mainDivElem.classList)// this return DOMTokenList which is array-like an array with its methods
 // such methods include: add(), contains(), entries(), forEach(), item(), key(), remove(), replace(), supports(), toString(), toggle(),
// values(), symbol()


  mainDivElem.classList.add("test")
  mainDivElem.classList.remove("layout")
  mainDivElem.classList.replace("main-class", "secondary-class")
  console.log(mainDivElem.classList.contains("test")) // this checks whether a certain class exist. and it return true since test was added earlier
  mainDivElem.classList.toggle("test") // checks whether a certain class exist. if it exists, it then remove it but if it doesn't exist it add it
}

// === Controlling Visibility =====

{
  // display : none - the element gets hidden in the webpage but it still exist in the  DOM
  // visibility: hidden - the element gets hidden but the space still exists in the web page
  // opacity : 0-1 - works the same as visibility
}   


//      ======= PROJECTS ========

// 1. Toggle Project

function toggleParagraph(){
  const para = document.getElementById("myParagraph");
  para.classList.toggle("hidden")
}


//2. Task Manager

{

  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value;
    if (task.trim() === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    // Completion Button
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.style.marginLeft = "5px"
    completeBtn.onclick = function () {
      li.classList.toggle("completed")
    }
    li.appendChild(completeBtn);


    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
  }


}
