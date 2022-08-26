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

// Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
//
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, меньше переданного числа. Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).
//
// Примечание. Если число кратно и 3, и 5, считайте его только один раз.


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



// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//
// For example, take 153 (3 digits), which is narcisstic:
//
//   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
//
//   Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
//
//   Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
//
// function narcissistic(value) {
//   function calc(val){
//     const arr = ('' + value).split('')
//     const arr2 = [];
//     arr.forEach(e => {
//       arr2.push(Number(e))
//     })
//     let sum = arr2.reduce((sum, current, index, array) =>{
//       return sum + (Math.pow(current, array.length))
//     }, 0)
//     return sum
//   }
//   if(value !== calc(value)){
//     return false
//   } else{
//     return true
//   }
// }
//
// console.log(narcissistic(371 ))
//





// (ЕБНУТОЕ ЗАДАНИЕ)
// Trolls are attacking your comment section!
//
//   A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//   For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//   Note: for this kata y isn't considered a vowel.


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
// console.log(disemvowel('aaaaaaN ffnsa bt,nor wrtng s mn LOL g th wt vvrraaaaaad to equal N ffns bt,nYr wrtng s mng th wrst'))
//

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//   Examples
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "((@" => "))(("
// notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

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
