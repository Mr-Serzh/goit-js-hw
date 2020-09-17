// Задача 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = ' ') {
  const arr = string.split(' ');
  let longestWord = '';
  //   for (const word of string) {
  //     console.log(word);
  //   }
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    // console.log(element);
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
