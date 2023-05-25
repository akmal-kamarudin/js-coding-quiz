// Write a function called groupAnagrams that takes an array of strings as an argument and returns an array of arrays, where each array contains a group of anagrams.
// Two strings are considered anagrams if they have the same characters, but possibly in a different order.
// For example, if the input is ["eat", "tea", "tan", "ate", "nat", "bat"], the output should be [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]].

function groupAnagrams(strs) {
  // Your code here
  let sortArr = [];
  for (let i = 0; i < strs.length; i++) {
    let word1 = strs[i].split("");
    let sortWord1 = word1.sort();
    sortArr.push(sortWord1.join(""));
  }

  let arrPattern = [];
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < sortArr.length; j++) {
      if (sortArr[i] !== sortArr[j]) {
        if (arrPattern.indexOf(sortArr[i]) === -1) {
          arrPattern.push(sortArr[i]);
        }
      } else {
        if (arrPattern.indexOf(sortArr[i]) === -1) {
          arrPattern.push(sortArr[i]);
        }
      }
    }
  }

  let tempArr = [];
  let outputArr = [];

  for (let j = 0; j < arrPattern.length; j++) {
    for (let k = 0; k < sortArr.length; k++) {
      if (arrPattern[j] === sortArr[k]) {
        if (tempArr.indexOf(strs[k]) === -1) {
          tempArr.push(strs[k]);
        }
      }
    }
    outputArr.push(tempArr);
    tempArr = [];
  }

  console.log(outputArr);
  return outputArr;
}

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const output1 = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
groupAnagrams(input1);

const input2 = ["listen", "silent", "enlist", "inlets", "linset"];
// const output2 = [["listen", "silent", "enlist", "inlets", "linset"]];
groupAnagrams(input2);
