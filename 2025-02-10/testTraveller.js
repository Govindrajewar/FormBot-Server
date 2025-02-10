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
  console.log(sortedUniqueGadgetsArray);

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
