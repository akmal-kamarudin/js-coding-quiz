// Write a function called sumOfSquares that takes an array of integers as an argument and returns the sum of the squares of those integers.
// For example, if the input is [1, 2, 3], the output should be 14 (i.e. 1^2 + 2^2 + 3^2 = 14).

function sumOfSquares(nums) {
  // Your code here
  let numTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    let numSquare = Math.pow(nums[i], 2);

    numTotal += numSquare;
  }

  console.log(numTotal);
  return numTotal;
}

const input1 = [1, 2, 3];
// const output1 = 14;
sumOfSquares(input1);

const input3 = [-1, 2, -3, 4];
// const output3 = 30;
sumOfSquares(input3);
