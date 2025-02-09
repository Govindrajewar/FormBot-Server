let nums = [1, 2, 3, 4, 5];

let squared = nums.map((num) => num * num);
console.log(squared);

let filtered = squared.filter((num) => num % 4 == 0);
console.log(filtered);

let findBy3 = squared.find((num) => num % 3 == 0);
console.log(findBy3);

let sum = squared.reduce((acc, num) => acc + num, 0);
console.log(sum);