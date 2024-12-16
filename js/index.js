// 1 
logItems(['Mango', 'Poly', 'Ajax']);
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }

// 2
  // function calculateEngravingPrice(message, pricePerWord) {
  //   const worl = message.split(' ');
  //   const totalPrice = words.length * pricePerWord;
  //   return totalPrice;
  // }
  // console.log(calculateEngravingPrice('Hello world', 10));
  // console.log(calculateEngravingPrice('JavaScript is fun', 15));

// 3
function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("I sigma now no computer"));

// 4
function formatString(string) {
  if (string.length > 40) {
    return string.slice(0, 40) + '...';
  }
  return string;
}
console.log(formatString("hsdgfdgsgdfgsdgfygsyfgsdgyfsgfgsfgsyfgsyfysgfgsf ge ge geeeeeeeeergcgsyugsygs")); 


