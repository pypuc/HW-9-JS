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

// // 3
// function findLongestWord(string) {
//   const words = string.split(' ');
//   let longestWord = '';
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("I sigma now no computer"));

// // 4
// function formatString(string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + '...';
//   }
//   return string;
// }
// console.log(formatString("Lorem vvbdbd dfgdgdf fddfdfgfgdfddfgd ddgdfd")); 

// 5

// function checkForSpam(message) {
//   const lowerCaseMessage = message.toLowerCase();
//   return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")
// }

// console.log(checkForSpam("total sPaM more"))

// 6
// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt("введіть число")
//   if (input === null)
//     break

// const number = Number(input)

// if (isNaN(number)) {
//   alert("Було введено не число, попробуйте ще раз")
//   continue
// }

// numbers.push(number)

// for (const num of numbers){
//   total += num
// }
// if (numbers.length > 0){
//   console.log(`загальна сума ${total}`)
// } else{
//   console.log(`сума дорівняє 0`)
// }
// }
