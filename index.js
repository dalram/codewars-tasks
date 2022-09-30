function romanToInt(s) {
  const ArrayOfSubtractions = ["IV", "IX", "XL", "XC", "CD", "CM"];
  let integer = 0;
  let splitedNumber = s;
  for (let i = 0; i < ArrayOfSubtractions.length; i++) {
    if (s.split(ArrayOfSubtractions[i]).length > 1) {
      if (ArrayOfSubtractions[i] === "IV") {
        integer += 4;
        splitedNumber = splitedNumber.split("IV").join("");
      } else if (ArrayOfSubtractions[i] === "IX") {
        integer += 9;
        splitedNumber = splitedNumber.split("IX").join("");
      } else if (ArrayOfSubtractions[i] === "XL") {
        integer += 40;
        splitedNumber = splitedNumber.split("XL").join("");
      } else if (ArrayOfSubtractions[i] === "XC") {
        integer += 90;
        splitedNumber = splitedNumber.split("XC").join("");
      } else if (ArrayOfSubtractions[i] === "CD") {
        integer += 400;
        splitedNumber = splitedNumber.split("CD").join("");
      } else if (ArrayOfSubtractions[i] === "CM") {
        integer += 900;
        splitedNumber = splitedNumber.split("CM").join("");
      }
    }
  }
  const newNr = splitedNumber
    ? splitedNumber.split("").map((e) => {
        if (e === "I") {
          return 1;
        } else if (e === "V") {
          return 5;
        } else if (e === "X") {
          return 10;
        } else if (e === "L") {
          return 50;
        } else if (e === "C") {
          return 100;
        } else if (e === "D") {
          return 500;
        } else if (e === "M") {
          return 1000;
        } else {
          return 0;
        }
      })
    : [0];

  for (let i = 0; i < newNr.length; i++) {
    integer += newNr[i];
  }
  return integer;
}

console.log(romanToInt("MCMXCIV"));
console.log("MCMXCIV".split("IV"));

function solution(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split("");
  var sum = 0,
    i;

  for (i = 0; i < numbers.length; i++) {
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      console.log(data[numbers[i + 1]]);
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  }

  return sum;
}
solution("MCMXCIV");
var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
const raide = "V";
console.log("====================");
console.log(data[raide]);

// Roman number encoder
console.log("====================");
function solution(number) {
  let romanNumber = "";
  return console.log(number.toString().split("").length);
}

// "MCMXCIV" === 1994
solution(1994);

const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
word = "lala";

let score = word.split("");
for (let i = 0; i < score.length; i++) {
  score[i] = abc.toLowerCase().indexOf(word[i].toLowerCase()) + 1;
}
// .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log("====================");
console.log(
  score.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
);
for (let i = 0; i < word.split("").length; i++) {
  console.log(word[i]);
  console.log(abc.toLowerCase().indexOf(word[i]) + 1);
  console.log(abc.toLowerCase().indexOf(word[i].toLowerCase()) + 1);
}
console.log("====================");

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
function high(x) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");
  const scores = words
    .map((x) => [...x].map((y) => alpha.indexOf(y) + 1))
    .map((x) => x.reduce((a, b) => a + b, 0));
  console.log(scores);
  const bla = words.map((x) => [...x].map((y) => alpha.indexOf(y) + 1));
  console.log(bla);
  return words[scores.indexOf(Math.max(...scores))];
}
high("bla bla");
