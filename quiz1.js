// Write a function called countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in that string.
// For example, if the input is "hello", the output should be 2.

function countVowels(str) {
  // Your code here
  const vowels = ["a", "e", "i", "o", "u"];

  const words = str.split("");

  let count = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (words[i] === vowels[j]) {
        count++;
      }
    }
  }
  console.log(count);
}

countVowels("hellooo");
