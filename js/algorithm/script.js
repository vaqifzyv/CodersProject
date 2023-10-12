// let word = "Vaqif";

// const reverse = function (word) {
//   let helloSplit = hello.split("");
//   let reversedSplit = helloSplit.reverse();
//   let reversedHello = reversedSplit.join("");
//   console.log(reversedHello);
// };

// reverse(word);

// * Custom

// let word = "Vaqif";

// const reverse = function (word) {
//   newWord = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     newWord += word[i];
//   }

//   console.log(newWord);
// };

// reverse(word);

// * Arrayda 6 olanlari "-" ile evez edin

// let arr = [6, 42, 67, 45, 6, 23, 67, 6];

// const adding = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 6) {
//       arr.splice(i, 1, "-");
//     }
//   }
//   console.log(arr);
// };

// adding(arr);

// * Arraydaki ededleri 5 vahid artirmaq

// let arr = [32, 234, 35, 56, 34, 23, 13];

// const sum = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 5;
//   }
//   console.log(arr);
// };

// sum(arr);

// * Qarisiq arrayda stringleri mueyyen et cap et

// let arr = [15, "vaqif", 13, "elgun", "arif", 27];
// let strings = [];
// const sum = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//       strings.push(arr[i]);
//     }
//   }
//   console.log(strings);
// };

// sum(arr);

// * Arrayin icindeki ededlerin cemi cutdurse --true, tekdirse --false return etsin

// let arr = [32, 234, 35, 56, 34, 23, 13];

// const sum = function (arr) {};

// sum(arr);

// * Arrayda stringler ilk stringi boyuke cevir

// let arr = ["vaqif", "arif", "zahid", "mehdi"];

// const boyuk = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   console.log(arr);
// };

// boyuk(arr);

// * Arrayda sozde butun herfleri boyuk olub olmadigina baxin

// let arr = ["ELGUN", "Ferman", "Asim", "SERDAR", "Arvin", "MURAD"];

// const boyuk = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()) {
//       console.log(arr[i]);
//     }
//   }
// };

// console.log(boyuk(arr));

// * Array icinde 0-9 kimi reqemler var, hansisa 1 reqem yoxdur onu tapin

// let arr = [0, 1, 2, 3, 4, 6, 7, 8, 9];

// const findNumber = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(i) === -1) {
//       console.log(i);
//     }
//   }
// };

// findNumbers(arr);

// * Array icine soz a herfi ile baslayani tapin

// let arr = ["ELGUN", "Ferman", "Asim", "SERDAR", "Arvin", "MURAD"];

// const result = function (arr) {
//   let arrFirst = arr.filter((words) => words.toLowerCase().startsWith("a"));
//   console.log(arrFirst);
// };

// result(arr);

// * Array m herfi ile biten sozleri cixardin

// let arr = ["ELGUN", "Ferman", "Asim", "SERDAR", "Arvin", "MURAD"];

// const result = function (arr) {
//   str = [];

//   // let arrFirst = arr.filter((words) => words.toLowerCase().endsWith("m"));
//   // console.log(arrFirst);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().endsWith("m")) {
//       str.push(arr[i]);
//     }
//   }
//   return str;
// };

// console.log(result(arr));

// * Arrayin ilk stringini boyuye cevir

// let arr = ["elgun", "Ferman", "Asim", "serdar", "Arvin", "murad"];

// const boyuk = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   console.log(arr);
// };

// boyuk(arr);

//* text = “Coder Azerbaijan”
//*samitler(text) - > [“C”,”d”,”r”,”z”,”r”,”b”,”j”,”n”] – text icindeki samitlleri qaytarsin
//* saitler(text) ->  [“o”,”e”,”a”,”a”] – text icindeki saitleri qaytarsin

// let text = "Coder Azerbaijan";

// const samit = function (text) {
//   text= text.toLowerCase();

//   for (let i=0; i<text.length; i++)
// };

// * correctFormat(text) ->  “Mənim adım Zaurdur və mənim 18 yaşım var”  text-dəki i, s , e hərfllərini ı , ş , ə əvəz edin.
let text = "Menim adim Zaurdur ve menim 18 yasim var";

correctFormat = text.replace(
  "Menim adim Zaurdur ve menim 18 yasim var",
  "Mənim adım Zaurdur və mənim 18 yaşım var"
);

console.log(correctFormat);
