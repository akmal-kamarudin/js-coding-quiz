// Write a function called maxConsecutiveSum that takes an array of integers as an argument and returns the maximum sum of any consecutive subarray of the input array.
// For example, if the input is [1, -2, 3, 10, -4, 7, 2, -5], the output should be 18 (i.e. the sum of the subarray [3, 10, -4, 7, 2]).

function maxConsecutiveSum(nums) {
  // Your code here
  let max = nums[0],
    min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];

    if (min > value) {
      min = value;
    } else if (max < value) {
      max = value;
    }
  }

  let maxSum = 0,
    maxCurrent = 0;

  for (let j = 0; j < nums.length; j++) {
    maxCurrent = maxCurrent + nums[j];
    console.log(maxCurrent);

    if (maxSum < maxCurrent) {
      maxSum = maxCurrent;
    } else if (maxCurrent < 0) {
      maxCurrent = 0;
    } else {
      maxSum = maxCurrent;
    }
  }

  console.log(maxSum);
  return maxSum;
}

const input1 = [1, -2, 3, 10, -4, 7, 2, -5];
// const output1 = 18;
// maxConsecutiveSum(input1);

const input2 = [-2, -1, -3, -4, -1];
// const output2 = -1;
maxConsecutiveSum(input2);
