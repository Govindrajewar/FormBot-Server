/*
Rohit travelled to America. On his return to India, he planned to bring some gadgets.

He has M gadgets that weigh from 1 to M. But when Rohit travels on an aeroplane, he is only allowed to carry a maximum weight of W. So, he wants to leave some of the gadgets which are already available in India and bring the maximum number of gadgets that are not available in India.

Write a program that reads the M gadgets, W weight limit and N space-separated weights of common gadgets available in India and prints the maximum number of unique gadgets that can be brought into India.
*/

/**
 * M: number of gadgets
 * W: maximum weight limit
 * N: number of gadget weights
 */

function maximumNumberOfUniqueGadgets(M, W, N, gadget_weights) {
  if (N !== gadget_weights.length) {
    console.error(
      "Number of gadget weights does not match the provided input."
    );
    return;
  }

  let allGadgets = new Set();

  for (let i = 1; i <= M; i++) {
    allGadgets.add(i);
  }

  for (let weight of gadget_weights) {
    allGadgets.delete(weight);
  }

  //   convert Set to array
  let uniqueGadgetsArray = Array.from(allGadgets);
  let sortedUniqueGadgetsArray = uniqueGadgetsArray.sort((a, b) => a - b);
  // console.log(sortedUniqueGadgetsArray);

  let noCount = 0,
    currentWeight = 0;

  for (let weight of sortedUniqueGadgetsArray) {
    if (currentWeight + weight <= W) {
      currentWeight += weight;
      noCount++;
      //   console.log(currentWeight, noCount);
    }
  }

  console.log(noCount);
}

let inputValues = [10, 20, 3];
let gadget_weights = [1, 3, 5];

maximumNumberOfUniqueGadgets(...inputValues, gadget_weights);
