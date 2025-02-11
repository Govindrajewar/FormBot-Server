/** 2. Minimize the Sum of Selected Elements
Given an array of N positive integers, select K elements such that their sum is minimized.
Input Format:
N K
N space-separated integers (array)
Test Cases:
Input:
5 3
4 2 7 1 5
Output:
7
Input:
6 2
10 20 30 5 8 3
Output:
8
Input:
4 2
9 12 7 4
Output:
11
 */

function calculateSumOfSmallestElements(N, K, positiveInteger) {
  if (N !== positiveInteger.length) {
    console.log("Invalid positive integer or length");
  }

  let sortedArray = positiveInteger.sort((a, b) => a - b);

  let sum = 0;
  for (let num = 0; num < K; num++) {
    sum = sortedArray[num] + sum;
  }

  console.log("Sum of %d smallest elements: ", K, sum);
}

// Test case 1
let N1 = 5,
  K1 = 3;
let positiveInteger1 = [4, 2, 7, 1, 5];
calculateSumOfSmallestElements(N1, K1, positiveInteger1);

// Test case 2
let N2 = 6,
  K2 = 2;
let positiveInteger2 = [10, 20, 30, 5, 8, 3];
calculateSumOfSmallestElements(N2, K2, positiveInteger2);

// Test case 3
let N3 = 4,
  K3 = 2;
let positiveInteger3 = [9, 12, 7, 4];
calculateSumOfSmallestElements(N3, K3, positiveInteger3);
