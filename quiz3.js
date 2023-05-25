// Write a function called flattenArray that takes an array of nested arrays as an argument and returns a flattened array.
// The output array should contain all the elements of the input array, in the order they appear, but with no nested arrays.
// For example, if the input is [1, [2, 3], [4, [5, 6]]], the output should be [1, 2, 3, 4, 5, 6].

function flattenArray(arr) {
  // Your code here

  let depth = arrDepth(arr);

  console.log(arr.flat(depth));
  return arr.flat(depth);
}

function arrDepth(value) {
  if (Array.isArray(value)) {
    return 1 + Math.max(0, ...value.map(arrDepth));
  } else {
    return 0;
  }
}

const input2 = [1, [2, [3, [4, 5]]]];
flattenArray(input2);
