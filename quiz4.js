// Write a function called capitalizeWords that takes a string as an argument and returns a new string with the first letter of each word capitalized.
// For example, if the input is "hello world", the output should be "Hello World"

function capitalizeWords(str) {
  // Your code here
  let arr = str.split(" ");
  let capWord = [];
  let capArr = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split("");

    for (let j = 0; j < word.length; j++) {
      if (j === 0) {
        capWord.push(word[j].toUpperCase());
      } else {
        capWord.push(word[j]);
      }
    }

    capArr.push(capWord.join(""));
    capWord = [];
  }

  console.log(capArr.join(" "));
  return capArr.join(" ");
}

const input3 = "the quick brown fox";
capitalizeWords(input3);
