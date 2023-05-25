// Write a function called rotateMatrix that takes a square matrix (an array of arrays) as an argument and rotates it 90 degrees clockwise.

function rotateMatrix(matrix) {
  // Your code here
  const outerLength = matrix.length;
  const innerLength = matrix[0].length;

  let tempArr = [];
  let outputArr = [];

  for (let i = 0; i <= innerLength - 1; i++) {
    for (let j = outerLength - 1; j >= 0; j--) {
      tempArr.push(matrix[j][i]);
    }
    outputArr.push(tempArr);
    tempArr = [];
  }

  console.log(outputArr);
  return outputArr;
}

const input2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// const output2 = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
rotateMatrix(input2);

const input4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// const output4 = [[5, 3, 1], [6, 4, 2]];
rotateMatrix(input4);
