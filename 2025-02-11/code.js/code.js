/*
input: This is Govind.
output: sihT si .dnivoG
Amit Kumar
5:49 PM
condition:
1. do not use any inbuilt function like join, split or reverse.
2. Time complexity should be O(n)

*/

let str = "This is Govind.";

let reversedString = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedString = reversedString + str[i];

}

console.log("reversedString: ", reversedString);
