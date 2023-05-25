// Write a function called groupAnagrams that takes an array of strings as an argument and returns an array of arrays, where each array contains a group of anagrams.
// Two strings are considered anagrams if they have the same characters, but possibly in a different order.
// For example, if the input is ["eat", "tea", "tan", "ate", "nat", "bat"], the output should be [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].

function groupAnagrams(strs) {
  // Your code here
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("");
    let sortWord = word.sort();

    console.log(sortWord);
  }
}

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const output1 = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
groupAnagrams(input1);
