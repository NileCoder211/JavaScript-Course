console.log("Introduction to DOM ....Day 17")

/* 
   === DOM Types

   1. Document- it represent the entire html page which includes html , head and body elements

   2.Node- is a generic term for any item in the DOM Tree
   it can be element, text or attribute node

   3.Element - is a specific type of node that represents HTML tags/elements

   4. NodeList- - is an array of nodes and they are in ordered list

   5.Attribute - represents attribute of a node, i.e src, alt

   6.NameNodeMap - A collection of Attr and it is not ordered list
 */


   // ==== ACCESSING THE DOM ===

   // 1.By id (This should be unique, which means you cannot have two ids)
   let titleElem = document.getElementById("heading")
   console.log(titleElem)

   // 2. By classname This can be multiples

   let infoElems = document.getElementsByClassName("info");
   console.log(infoElems)// this return HTMLCollection

   Array.from(infoElems).forEach((elem) => {
    console.log(elem);
   })

   // 3. by tag name

   let pTagElems = document.getElementsByTagName("p");
   console.log(pTagElems)

   // 4. by query Selector - it gives the first matching element node with the selector that has been passed as argument to it
    let para = document.querySelector("p.info")
    console.log(para)// this gives the first paragraph

    // 5. by querySelectorAll 
    let paras = document.querySelectorAll("p.info")
    console.log(paras)// this return nodeList


    // ========  HIGHLIGHTER APP =====

    function highlightText(){

       const elements =  document.querySelectorAll("p.info")

       elements.forEach((element) =>{
            element.style.backgroundColor = "yellow";
       })
      
    }

    
    // ==== FILTER APP ====

    function filterList (){
        const inputElem = document.getElementById("searchInput")// this gives the input element
        const input = inputElem.value; // this gives the value input

        const items = document.querySelectorAll("ul#itemList li") // this gives all the list items inside unordered list

        items.forEach((item) => {
            item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ?  "block" : "none"
        })
    }