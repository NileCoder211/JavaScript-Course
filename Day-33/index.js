console.log("Day 33 of Learning JS: Map, WeakMap, Set WeakSet");

// Map in JavaScript
// Map is a collection of key value pairs

// ========== ADVANTAGES OF MAP COMPARE TO OBJECT ==============
// 1: Key can be of any data type(unlike object whose key can only be a string)
// 2: Map remembers the original order in which the element were added to it(unlike object which sometimes doesn't)

//  ====== How to create Map =====

//   const map = new Map()// the "new" keyword gives the instance of a map
// console.log(map)// map has prototype of Map. And the Map's prototype is none other than object

// ======== How to Initiate a Map ====

{
  /*
const map = new Map([
    ['name', 'John'],
    ['type', 'YT'],
    ['owner', 'Tapas']
]);

console.log(map); this will gives three value key pairs with the size = 3 since the map has only three value key pairs
*/
}

// ==== How to add values to a Map =====

// How to Add values to a Map

// set(key, value)

// create a map

const map = new Map();

map.set("name", "Mike");
map.set("type", "YT");
map.set("owner", "Tapas Mike");
map.set("owner", "ts"); // the "ts" will replace "Tapas Mike" since the last one key will always override the first one if they are similar

console.log(map);

// How to Get values from a Map

// get(key)
console.log("Type is", map.get("type")); // Type is YT

// ========= Map Keys =====
// map keys can be of any data type

const funMap = new Map();

funMap.set(550, "My House Number");
funMap.set(true, "Yes, I love Learning");

let obj = { name: "Khorado" };
funMap.set(obj, true);

console.log(funMap);

// create and empty object
const funObj = {};

funObj[550] = "My House Number";

console.log(funObj[550] === funObj["550"]); // true since JavaScript automatically converts the key 550 into a string "550".
console.log(funMap.get(550) === funMap.get("550")); // false since The key is stored as a number, not converted.

// ============ Properties and Methods in Map ===========

// 1: ===== CRUD METHODS ======
const newMap = new Map();
newMap.set(1, "one");
newMap.set("name", "Khorado");
newMap.set(true, "yes");

// A: ✅ set(key, value) - Adds or updates a value.
console.log(newMap.set(1, "ONE")); // updates existing key
console.log(newMap.set(2, "two")); // adds new key

// B: 🔍 get(key) - Retrieves a value.
newMap.get(1); // "ONE"
newMap.get("name"); // "Khorado"
newMap.get(999); // undefined since it does not exist

// C: ❓ has(key) - Checks if a key exists.
newMap.has(1); // true
newMap.has("1"); // false (type matters!)

// D: ❌ delete(key) - Removes a key.

newMap.delete(1); // true (removed)
newMap.delete(5); // false (not found)

// E: 🧹 clear() - Removes everything.

newMap.clear();
console.log(map.size); // 0

// F: 📏 Size property -  Returns number of entries.

const mapNumber = new Map();
map.set("a", 1);
map.set("b", 2);

console.log(mapNumber.size); // 2 👉 It’s a property, not a function (no parentheses).

//=========== 2: MapIterator: keys(), values(), and entries() =======

const ageMap = new Map([
  ["Jack", 20],
  ["Alan", 34],
  ["Bill", 10],
  ["Sam", 9],
]);

// A: key() - Get all the keys

console.log(ageMap.keys()); // this gives all the keys {'Jack', 'Alan', 'Bill', 'Sam'}
const mapIterator = ageMap.keys();

mapIterator.forEach((item) => {
  // throw forEach() we can loop through it and retrieve the actual keys without strings
  console.log(item);
});

// B: key() - Get all the values

console.log(ageMap.values()); // this gives values in mapIterator {20, 34, 10, 9}
const mapValues = ageMap.values();
mapValues.forEach((value) => {
  console.log(value); // 20, 34, 10, 9
});

// C: entries()- Returns [key, value] pairs.
console.log(ageMap.entries()); // returns key-value pairs
const mapEntries = ageMap.entries();
mapEntries.forEach((entry) => {
  console.log(entry); // this will return all keys with their values
});

// ====== We Can also Retrieve keys and values without using key(), values() and entries
// 1: forEach()
ageMap.forEach((value, key) => {
  console.log(`${key} is ${value} years old!`);
});

// 2: for of loop
for (const [key, value] of ageMap) {
  console.log(`${key} is ${value} years old!`);
}

// Convert an Object into a Map

const address = {
  Tapas: "Bangalore",
  James: "Huston",
  Silver: "Usa",
};

const addressMap = new Map(Object.entries(address));
console.log(addressMap);

// Convert a Map into an Object

const newAddress = Object.fromEntries(addressMap);
console.log(newAddress);

// Convert a Map into an Array

const oldMap = new Map();
map.set("milk", 200);
map.set("tea", 300);
map.set("coffee", 500);

console.log(Array.from(map)); // here we use from() method

console.log([...map]); // here we use spread operator

//  ====== WHY MAP INSTEAD OF PLAIN OBJECT
// 1: You need non-string keys - Objects force keys into strings, Maps don’t.
// 2: . You care about key type- Map does not override like object
// 3. Frequent add/remove operations
// Map is optimized for dynamic data.
// Objects can be slower and less predictable for heavy mutations.
// 4. You need reliable iteration order
// Maps preserve insertion order consistently.
// Objects mostly preserve order nowadays—but with quirks for numeric keys.
// 5. You want built-in utilities
// Maps come with clean APIs:
// map.size
// map.clear()
// map.has()
//  Instead of:
//  Object.keys(obj).length

//       ==========  Set in JavaScript =========
// A Set is a collection of unique elements
// With Set you cannot have duplicate elements but with array you can
// the key can be of ant type
// it has order collection
// it has size property which determine the number of elements

const set = new Set();
console.log(set);

const fruitSet = new Set(["🍉", "🍎", "🍈", "🍏"]);
console.log(fruitSet); //  {'🍉', '🍎', '🍈', '🍏'} instead of array, we get object because set's prototype is an object

console.log(fruitSet.size); // 4

const saladSet = new Set();

saladSet.add("🍅"); // tomato
saladSet.add("🥑"); // avocado
saladSet.add("🥕"); // carrot
saladSet.add("🥒"); // cucumber

console.log(saladSet); // Set(4) {"🍅", "🥑", "🥕", "🥒"}

saladSet.add("🥒"); // cucumber won't be added  because set does not allow duplication

console.log(saladSet);

console.log("Does the salad have a carrot?", saladSet.has("🥕")); // true: since carrot exist

console.log("Does the salad have broccoli?", saladSet.has("🥦")); // false: since there's no brocoli

saladSet.delete("🥑"); // this deletes avocado

console.log(saladSet); // 3

saladSet.clear(); // this clears everything

// How to Iterate Over a Set

const houseNos = new Set([360, 567, 101]);

const houseValues = houseNos.values(); // SetIterator of values
houseValues.forEach((value) => {
  console.log(value); // 360 567 101
});

const houseKeys = houseNos.keys(); // SetIterator of keys
houseKeys.forEach((key) => {
  console.log(key); // 360 567 101
});

console.log(houseNos.entries()); // SetIterator of the same key and value

// [[Entries]]
// 0: {360 => 360}
// 1: {567 => 567}
// 2: {101 => 101}

const houseEntries = houseNos.keys(); // SetIterator of the same keys and values as entries
houseEntries.forEach((entry) => {
  console.log(entry); // 360 567 101
});

// How to Convert a Set into an array

const houseNoArr = [...houseNos];
console.log(houseNoArr);

const mixedFruit = ["🍉", "🍎", "🍉", "🍈", "🍏", "🍎", "🍈"];

const mixedFruitSet = new Set(mixedFruit);

console.log(mixedFruitSet); // this will be a Set without duplicate vegetables

// =============== Set and Object ==============

// Create a person object
let person = {
  name: "Alex",
  age: 32,
};

// Create a set and add the object to it
const pSet = new Set();
pSet.add(person);
console.log(pSet);

// person.name = "Bob"- here it won't work since we are not doing the new  rather changing the value of the key in an object

person = {};

pSet.add(person); // this will get added since it has complete different reference even though the variable name is the same

// Set Theories
// A set "A" is a superset of "B" if: Every element in "B" exists in "A"
// A set "B" is subset of "A" if: its all elements are in "A"
// 👉 Every set is a superset of an empty set
// Every an empty set is subset of any set

const first = new Set([1, 2, 3]);
const second = new Set([3, 4, 5]);

// Union
console.log(first.union(second));

const union = new Set([...first, ...second]);

// Intersection
console.log(first.intersection(second));

const intersection = new Set([...first].filter((elem) => second.has(elem)));

// Difference
console.log(first.difference(second));

const difference = new Set([...first].filter((elem) => !second.has(elem)));

const numbers = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const the4Table = new Set([4, 8, 12, 16]);

console.log(numbers.isSupersetOf(the4Table)); // true

// ===== Determining the superset value without using isSuperSetOf() method========
function isSuperset(superset, subset) {
  for (const value of subset) {
    if (!superset.has(value)) {
      return false;
    }
  }
  return true;
}

const number = new Set([1, 2, 3, 4, 5]);
const table = new Set([2, 3]);

console.log(isSuperset(number, table)); // true
console.log(isSuperset(table, number)); // false

// ===== Determining the subset value in Modern JS USING YOUR OWN LOGIC since there is no isSubSetOf() method=======
const a = new Set([1, 2]);
const b = new Set([1, 2, 3]);

console.log(typeof a.isSubsetOf); // this return a function since it is available.
//  "function" → supported
// "undefined" → not available

function isSubset(a, b) {
  return [...a].every((value) => b.has(value));
}

console.log(isSubset(a, b))// true



// WeakMap

let user = {'name': 'tapaScript'};
//const allUsers = [user];

const uMap = new Map();
uMap.set(user, true);

user = null;

console.log(uMap);

let addr = {"country": "India"};

const wMap = new WeakMap();
wMap.set(addr, true);

addr = null;

console.log(wMap);

// set
// get
// has
// delete

const metadata = new WeakMap();

function setMetadata(el, info) {
  metadata.set(el, info);
}

function getMetadata(el) {
  return metadata.get(el);
}

const div = document.createElement('div');
setMetadata(div, { visible: true });

console.log(getMetadata(div)); // { visible: true }

// If div is removed from the DOM and dereferenced, metadata is GC'd

// add
//has
// delete

const onlineUsers = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

onlineUsers.add(user1);
onlineUsers.add(user2);
console.log(onlineUsers.has(user1));

user1 = null;

console.log(onlineUsers.has(user1));