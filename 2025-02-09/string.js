let str = "This is non-mutable string";
// console.log(str);

let splitString = str.split(" ");
// console.log(splitString);

let longestWord = (str) => {
  str = str.split(" ");
  let longestWordString = "";
  str.forEach((word) => {
    if (word.length > longestWordString.length) {
      longestWordString = word;
    }
  });
  console.log("longestWordString: ", longestWordString);
};

// longestWord(str);

let fruits = ["mango", "banana", "apple", "guava", "watermelon"];
let nums = [12, 51, 63, 32, 150];

// console.log(fruits.sort());
// console.log(fruits.sort().reverse());

// console.log(nums.sort((a, b) => a - b));
// console.log(nums.sort((a, b) => b - a));

// console.log(fruits);

// slice return the new array
// console.log(fruits.slice(0, 2));

// splice mutates the original array & return the new array
// console.log(fruits.splice(0, 2, "tomato", "potato"));

// console.log(fruits)

// console.log(fruits);

let alphabets = [];

let splittedString = str.toLowerCase().split("");

for (let alphabet of splittedString) {
  if (alphabets.includes(alphabet) || alphabet == "-" || alphabet == " ") {
    continue;
  }
  alphabets.push(alphabet);
}

// console.log(alphabets);
// console.log(alphabets.length);

// or we can use Set():
let uniqueAlphabets = new Set();

for (let alphabet of alphabets) {
  if (uniqueAlphabets.has(alphabet)) {
    continue;
  }
  uniqueAlphabets.add(alphabet);
}

// console.log([...uniqueAlphabets]);
// console.log(uniqueAlphabets.size);
