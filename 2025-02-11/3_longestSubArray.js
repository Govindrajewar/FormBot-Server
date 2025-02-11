/** 3. Longest Subarray with Distinct Elements
Find the longest contiguous subarray with all distinct elements in an array of size N.
Input Format:
N
N space-separated integers (array)
Test Cases:
Input:
6
1 2 3 1 4 5
Output:
5
Input:
5
5 1 2 3 2
Output:
4
Input:
8
1 1 1 2 2 3 3 4
Output:
2
*/

function findLongestContiguousArray(array_size, arr) {
  let set = new Set();
  let maxLength = 0;
  let left = 0;

  if (array_size !== arr.length) {
    console.log("Invalid input size");
    return;
  }

  for (let right = 0; right < array_size; right++) {
    while (set.has(arr[right])) {
      set.delete(arr[left]);
      left++;
    }
    set.add(arr[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  console.log(maxLength);
}

let array_size1 = 8;
let arr1 = [1, 1, 1, 2, 2, 3, 3, 4];
findLongestContiguousArray(array_size1, arr1);

let array_size2 = 5;
let arr2 = [1, 2, 3, 1, 4, 5];
findLongestContiguousArray(array_size2, arr2);
