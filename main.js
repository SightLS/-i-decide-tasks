// дан имассив вида [1, 2 ,[3, 4 , [5]], 6 , 7 , [[8]]] необходимо получить массив без вложений

// const arr = [1, 2 ,[3, 4, [5]], 6 , 7 , [[8]]];

// function flatArr(arr){
//     const arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             // flatArr(arr[i]);
//             arr2.push(...flatArr(arr[i]));
//         } else {
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }

// console.log(flatArr(arr));


/*
в функцию fillarr передается количество строк и количество колонок в массиве,
необходимо реализовать функцию так, чтобы он возвращала заполненный массив
с размером rows * cols целыми инкрементируемыми числами идущими по сприрали
против часовой стрелки
*/


// function fillArr(rows, cols) {
//     const arr = [];
//     for (let i = 0; i < rows; i++) {
//         arr.push([]);
//     }
//     arr.forEach(e => {
//        for (let i = 0; i < cols; i++) {
//            e.push(0);
//        }
//     });
//     let row = 0;
//     let col = 0;
//     let coordinate = 'down';
//
//     for (let i = 0; i < rows * cols; i++) {
//         let j = i + 1;
//         switch (coordinate) {
//             case 'down':
//                 if(row + 1 >= rows || arr[row + 1][col] > 0) {
//                     arr[row][col] = j;
//                     coordinate = 'right';
//                     col = col + 1;
//                 }else{
//                     arr[row][col] = j;
//                     row = row + 1;
//                 }
//                 break;
//             case 'right':
//                 if(col + 1 >= cols || arr[row][col + 1] > 0) {
//                     arr[row][col] = j;
//                     coordinate = 'up';
//                     row = row - 1;
//                 }else {
//                     arr[row][col] = j;
//                     col = col + 1;
//                 }
//                 break;
//
//             case 'up':
//                 if(row === 0 || arr[row - 1][col] > 0) {
//                     arr[row][col] = j;
//                     coordinate = 'left';
//                     col = col - 1;
//                 }else {
//                     arr[row][col] = j;
//                     row = row - 1;
//
//                 }
//                 break;
//             case 'left':
//                 if(col === 0 || arr[row][col - 1] > 0) {
//                     arr[row][col] = j;
//                     coordinate = 'down';
//                     row = row + 1;
//                 }else {
//                     arr[row][col] = j;
//                     let test = arr[row].indexOf(col);
//                     col = col - 1;
//                 }
//                 break;
//
//             default:
//                 break;
//         }
//     }
//     return arr;
// }
// console.log(fillArr(5, 10));
/*
    убил часов 5(((
   [
       [1, 8, 7],
       [2, 9, 6],
       [3, 4, 5]
   ]
*/

// Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна
// 23.
//
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, меньше переданного числа. Кроме того,
// если число отрицательное, верните 0 (для языков, в которых они есть).  Примечание. Если число кратно и 3, и 5,
// считайте его только один раз.


// function solution(number){
//     const arr = [];
//     let sum = 0
//     for(let i = 0; i < number; i++){
//         arr.push(i);
//     }
//     arr.forEach(e =>{
//         if(e % 3 === 0 || e % 5 === 0){
//             console.log(e)
//             sum += e;
//         }
//     })
//     return sum
// }
//
// console.log(solution(10))


// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the
// number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).  For example, take
// 153 (3 digits), which is narcisstic:  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 and 1652 (4 digits), which isn't:  1^4 +
// 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 The Challenge:  Your code must return true or false (not 'true' and
// 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in
// your language, e.g. PHP.  Error checking for text strings or other invalid inputs is not required, only valid
// positive non-zero integers will be passed into the function.  function narcissistic(value) { function calc(val){
// const arr = ('' + value).split('') const arr2 = []; arr.forEach(e => { arr2.push(Number(e)) }) let sum =
// arr2.reduce((sum, current, index, array) =>{ return sum + (Math.pow(current, array.length)) }, 0) return sum }
// if(value !== calc(value)){ return false } else{ return true } }  console.log(narcissistic(371 ))


// (ЕБНУТОЕ ЗАДАНИЕ)
// Trolls are attacking your comment section!
//
//   A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing
// the threat.  Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".  Note: for this
// kata y isn't considered a vowel.


// function disemvowel(str) {
//   const changedStr = Array.from(str);
//   const strLength  = changedStr.length
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//
//   for(let i = 0; i < strLength; i++){
//     let j = 0
//     while(j < vowels.length){
//       if(changedStr[i] === undefined){
//         break
//       }
//       if(changedStr[i].toLowerCase() === vowels[j]){
//         changedStr.splice(i, 1)
//         i = i-1
//         break
//       }else{
//         j++
//       }
//     }
//   }
//   return changedStr.join('')
// }
//
// console.log(disemvowel('aaaaaaN ffnsa bt,nor wrtng s mn LOL g th wt vvrraaaaaad to equal N ffns bt,nYr wrtng s mng
// th wrst'))

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if
// that character appears only once in the original string, or ")" if that character appears more than once in the
// original string. Ignore capitalization when determining if a character is a duplicate.  Examples "din" => "((("
// "recede" => "()()()" "Success" => ")())())" "((@" => "))((" notes Assertion messages may be unclear about what they
// display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// кека
// function duplicateEncode(word){
//   let wordOnLowerCase = word.toLowerCase()
//   const wordStr = Array.from(wordOnLowerCase)
//   console.log(wordStr)
//   const newArr = []
//   for(let i = 0; i < wordStr.length; i++){
//     let j = 0
//     let test = false
//
//     while(j < wordStr.length){
//       if(i === j){
//         j++
//       }
//       if(wordStr[i] === wordStr[j]){
//         test = true
//         break
//       }else{
//         j++
//       }
//     }
//     if(test){
//       newArr.push(')')
//     }else{
//       newArr.push('(')
//     }
//   }
//
//     return newArr.join('')
// }
//
// console.log(duplicateEncode('Кекаккк'))
//
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until
// a single-digit number is produced. The input will be a non-negative integer.  Examples 16  -->  1 + 6 = 7 942  -->
// 9 + 4 + 2 = 15  -->  1 + 5 = 6 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6 493193  -->  4 + 9 + 3 + 1 +
// 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// function digitalRoot(n) {
//   let nIn = n;
//
//   while(nIn.toString().length > 1){
//     let nStr = nIn.toString();
//     const arr = Array.from(nStr)
//     nIn = arr.reduce((acc, current) => {
//       return acc + +current
//     }, 0)
//   }
//   return nIn
// }
//
// console.log(digitalRoot(942))


// Your task is to sort a given string. Each word in the string will contain a single number. This number is the
// position the word should have in the result.  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//  If the input string is empty, return an empty string. The words in the input String will only contain valid
// consecutive numbers.  Examples "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est" "4of Fo1r pe6ople g3ood th5e  the2"
// -->  "Fo1r the2 g3ood 4of th5e pe6ople" // ""  -->  "" function order(words){ const splitTosring = words.split(' ')
// const newArr = []  splitTosring.forEach(e=>{ newArr.push('') })  for(let i = 0; i < splitTosring.length; i++){
// for(let j = 0; j < splitTosring.length; j++){ if(splitTosring[i].includes(`${j + 1}`)){ newArr.splice(`${j}`, 1,
// splitTosring[i]) }  } }   return newArr.join(' ') }  console.log(order('4of Fo1r pe6ople g3ood th5e the2'))


// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2
// percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town
// need to see its population greater or equal to p = 1200 inhabitants?  At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants  At the end of the 2nd year there will be: 1070 + 1070 * 0.02 + 50 =>
// 1141 inhabitants (** number of inhabitants is an integer **)  At the end of the 3rd year there will be: 1141 + 1141
// * 0.02 + 50 => 1213  It will need 3 entire years. More generally given parameters:  p0, percent, aug (inhabitants
// coming or leaving each year), p (population to surpass)  the function nb_year should return n number of entire years
// needed to get a population greater or equal to p.  aug is an integer, percent a positive or null floating number, p0
// and p are positive integers (> 0)  Examples: nb_year(1500, 5, 100, 5000) -> 15 nb_year(1500000, 2.5, 10000, 2000000)
// -> 10 Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the
// parameter percent is 2 you have to convert it to 0.02.


// function nbYear(p0, percent, aug, p){
//   let percentCount = percent / 100
//   let years = 0
//   while(true){
//     if(p0 >= p){
//       break
//     } else{
//       years = years + 1
//       p0 = p0 + p0 * percentCount + aug
//       p0 = Math.floor(p0)
//     }
//   }
//   return years
// }
//
//
// console.log(nbYear(1500, 5, 100, 5000))


// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
//   findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
//   The tests contain some very huge arrays, so think about performance.
//
//   This is the first kata in series:
//
// Find the unique number (this kata)
// Find the unique string
// Find The Unique


// function findUniq(arr){
//   const newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(i === 0){
//       if(arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]){
//         newArr.push(arr[i])
//       }
//     }else if(i === arr.length - 1){
//       if(arr[i] !== arr[i - 1] && arr[i] !== arr[i - 2]){
//         newArr.push(arr[i])
//       }
//     }else{
//       if(arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]){
//         newArr.push(arr[i])
//       }
//     }
//   }
//   return +newArr.join()
// }
//
// console.log(findUniq([0, 1, 0, 0]))

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The
// function should return true if the string is valid, and false if it's invalid.  Examples "()"              =>  true
// ")(()))"          =>  false "("               =>  false "(())((()())())"  =>  true


// function validParentheses(parens){
//   const arr = parens.split('')
//   const stack = []
//   for(let i = 0; i < arr.length; i++){
//     let item = arr[i]
//     if(item === '('){
//       stack.push(item)
//     }else if(item === ')' && stack.length === 0){
//       return false
//     }else{
//       stack.pop()
//     }
//   }
//   if(stack.length === 0){
//     return true
//   }else{
//     return false
//   }
// }
//
//
// console.log(validParentheses("(()))"))


// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is
// irrelevant).  Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore
// numbers and punctuation.


// function isPangram(string){
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z']; const arr = string.split('') const arrToLower = [] arr.forEach((e) => {
// arrToLower.push(e.toLowerCase()) })  for(let i = 0; i < alphabet.length; i++){ let j = 0 while(j <
// arrToLower.length){ if(arrToLower[j] === alphabet[i]){ alphabet.splice(i, 1) i-- break }else{ j++ } } }
// if(alphabet.length){ return false }else{ return true } }   console.log(isPangram('Is \'Cwm fjord bank glyphs vext
// quiz\' a pangram?'))   function isPangram2(str) { letters: for (var c = 0; c < 26; c++) { for (var i = 0; i <
// str.length; i++) { var s = str.charCodeAt(i) if (s < 65 || s > 90 && s < 97 || s > 122) continue if (s === 65 + c ||
// s === 97 + c) continue letters }  return false }  return true } console.log(isPangram2('Is \'Cwm fjord bank glyphs
// vext quiz\' a pangram?'))

/*
в функцию realizeDistance передается дистанция, которую должен проехать человек, вторым параметром передается дистания
после которой необходимо сделать остановку. Необходимо вывести в лог всего пути
//вы проехали 100 метров
console.log(realizeDistance(100, 150))

//остановка N1 вы проезали 300 метров
остановка N2 вы проехали 600 метров
остановка N3 вы проехали 900 метров
вы проехали еще 100 метров
console.log(realizeDistance(1000, 300))
 */


// function realizeDistance(distance, stopAfter){
//   if(stopAfter >= distance){
//     return `вы проехали ${distance} метров`
//   }else{
//     let distanceTraveled = 0
//     let stop = 0
//     while(distanceTraveled <= distance){
//       if(distanceTraveled + stopAfter >= distance){
//         distanceTraveled = distance - distanceTraveled
//         return `вы проехали еще ${distanceTraveled}`
//
//       }else{
//         distanceTraveled = distanceTraveled + stopAfter
//         stop++
//         console.log(`остановка N${stop} вы проехали ${distanceTraveled}`)
//       }
//
//     }
//   }
//
// }
//
// console.log(realizeDistance(1200, 300))


/*
дан массив возрастов в семье, вернуть массив с возрастом самого младшего, самого старшего и разницу между самым старшим
и самым малдшим. Желательно не использовать встроенные функции типа sort и т.п.
 */

// function differenceInAges(ages){
//   let x = JSON.stringify(ages)
//   const sortAges = JSON.parse(x)
//   for(let i = 0; i < ages.length; i++){
//     let dropIndex = 0
//     for(let j = 0; j < ages.length; j++){
//       if(ages[i] > ages[j]){
//         dropIndex = dropIndex + 1
//       }
//     }
//     sortAges[dropIndex] = ages[i]
//   }
//   const newAges = []
//   newAges.push(sortAges[0], sortAges[sortAges.length - 1], sortAges[sortAges.length - 1] - sortAges[0])
//   return newAges
// }
//
// console.log(differenceInAges([82, 15, 13, 2, 90, 6, 38, 36])) // [6, 82, 76]
//
// // через sort
// function differenceInAges2(ages){
//   ages.sort((a, b) => a - b);
//   const newAges = []
//   newAges.push(ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0])
//   return newAges
// }
//
// console.log(differenceInAges2([82, 15, 13, 2, 90, 6, 38, 36])) // [6, 82, 76]


/*
в функцию mostFrequentDays передается год(целое число), необходимо реализоввать функцию так,
чтобы из нее вернулся массив с наиболее часто встечаемыми днями недели в годуу, что был передан. массив должен быть
отсоритрован по дням недели(от понедельника к восресенью)
 */
