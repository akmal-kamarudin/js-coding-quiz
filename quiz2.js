// Write a function called findDuplicates that takes an array of integers as an argument and
// returns an array containing all the integers that appear more than once in the input array.
// The order of the elements in the output array should be the same as in the input array.

// For example, if the input is [1, 2, 3, 2, 5, 6, 1], the output should be [2, 1].

function findDuplicates(arr) {
  // Your code here
  let duplicates = [];
  let indexOfArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (duplicates.indexOf(arr[i]) === -1) {
          duplicates.push(arr[i]);
          indexOfArr.push(arr.indexOf(arr[j], i + 1));
        }
      }
    }
  }

  for (let k = 0; k < duplicates.length; k++) {
    if (indexOfArr[k] > indexOfArr[k + 1]) {
      let arrTemp = duplicates[k + 1];
      duplicates[k + 1] = duplicates[k];
      duplicates[k] = arrTemp;

      let indexTemp = indexOfArr[k + 1];
      indexOfArr[k + 1] = indexOfArr[k];
      indexOfArr[k] = indexTemp;
    }
  }

  // console.log(indexOfArr);
  console.log(duplicates);
  return duplicates;
}

findDuplicates([1, 2, 3, 2, 5, 3, 6, 1]); // [2, 3, 1]
findDuplicates([-1, 2, -1, 5, 2, 6, -1]); // [-1, 2]
