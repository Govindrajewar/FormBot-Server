/*
input: This is Govind.
output: sihT si .dnivoG
Amit Kumar
5:49 PM
condition:
1. do not use any inbuilt function like join, split or reverse.
2. Time complexity should be O(n)
*/

function reverseWords(sentence) {
  let result = "";
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char === " " || i === sentence.length - 1) {
      if (i === sentence.length - 1) word += char; // Add last character if not space
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }
      result += char === " " ? " " : ""; // Preserve spaces
      word = ""; // Reset word
    } else {
      word += char;
    }
  }

  return result;
}

// Example Usage
console.log(reverseWords("This is Govind."));

/*
// print a -> b -> c
console.log("a");

let isBPrinted = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("b");
    resolve();
  }, 1000);
});

isBPrinted.then(() => console.log("c")).catch((e) => console.log(e));
*/
