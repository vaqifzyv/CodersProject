// *  1. Istifadəçidən ad, soyad və yaş dəyəri alın. Console hissəyə Mənim adım filankesov filankes mənim filan yaşım var yazsın. Filan yerinə istifadəçidən gələn dəyəri yazın.

// let firstName = prompt("Please enter your first name");
// let lastName = prompt("Please enter your last name");
// let age = prompt("Please enter your age");

// console.log(`Mənim adım ${firstName} ${lastName} mənim ${age} yaşım var`);

// ! İstifadəçidən Ədədlər alın onların cəmini fərqini və hasilini yazın Console hissəyə amma belə çıxarsın  9+10=19 kimi çıxarsın.

// let numberOne = +prompt("Please enter first number");
// let numberTwo = +prompt("Please enter second number");

// sum = numberOne + numberTwo;
// minus = numberOne - numberTwo;
// mult = numberOne * numberTwo;

// console.log(`${numberOne} + ${numberTwo} = ${sum}`);
// console.log(`${numberOne} - ${numberTwo} = ${minus}`);
// console.log(`${numberOne} * ${numberTwo} = ${mult}`);

// * İstifadəçidən Ölkə , Şəhər, Küçə adını yazsın sonda Bunları birləşdirib console-a çıxarsın. Məs : Azərbaycan , Bakı Sübhi Salayev 7 küçəsi yazsın.

// let country = prompt("Where are you from?");
// let city = prompt("From which city are you from?");
// let street = prompt("Which street?");

// console.log(`${country}, ${city}  ${street}`);

// ! Tasks 2

// * İstifadəçidən 3 dənə tərəf alın side1 , side2, side3  bu tərəflərə görə üçbucağın mövcudluğunu yoxlayın. Mövcuddursa Ekrana mövcuddur deyilsə mövcud deyildir yazsın

// let side1 = +prompt("First Side");
// let side2 = +prompt("Second Side");
// let side3 = +prompt("Third Side");

// if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//   console.log("Theres a triangle");
// } else {
//   console.log("Theres no a triangle");
// }

// * Üçbucağın tərəflərin mövcudluğunu yoxladıqdan sonra üçbucağın tərəfinə görə tipin tapın bərabər tərəfli müxtəlif tərəfli və ya bərabəryanlı olduğunu təyin edin.

// let side1 = +prompt("First Side");
// let side2 = +prompt("Second Side");
// let side3 = +prompt("Third Side");

// if (side1 == side2 && side1 == side3 && side2 == side3) {
//   console.log("Bu ucbucaq duzbucaqli ucbucaqdir");
// }

// * Havanın tipinə görə havanın yağışlı günəşli qarlı olduğunu yazın switch case ilə yazın. 'cloudy'  olarsa hava 'It might be cold, you need a jacket.' yazsın məsələn.

// let weather = prompt("Weather is cloudy, sunny or snowy?");

// switch (weather) {
//   case "cloudy":
//     console.log("Weather is cloudy");
//     break;
//   case "sunny":
//     console.log("Weather is sunny");
//     break;
//   case "snowy":
//     console.log("Weather is snowy");
//     break;
// }

//  * İstifadəçidən ədəd alsın ədəd 1-12 arası olsun bu ədədlərdən kiçik və böyük olarsa ekrana ədəd doğru deyil yazsın. Sonra ədədə görə ilin ayını müəyyən etsin. məsələn ədəd 11 olarsa Ekrana bu noyabr ayıdır yazsın. Switch casse ilə yazın

// let number = +prompt("Type number from 1 to 12");

// switch (true) {
//   case number === 1:
//     console.log("Its January");
//     break;
//   case number === 2:
//     console.log("Its February");
//     break;
//   case number === 3:
//     console.log("Its March");
//     break;
//   case number === 4:
//     console.log("Its April");
//     break;
//   case number === 5:
//     console.log("Its May");
//     break;
//   case number === 6:
//     console.log("Its June");
//     break;
//   case number === 7:
//     console.log("Its July");
//     break;
//   case number === 8:
//     console.log("Its August");
//     break;
//   case number === 9:
//     console.log("Its September");
//     break;
//   case number === 10:
//     console.log("Its October");
//     break;
//   case number === 11:
//     console.log("Its November");
//     break;
//   case number === 12:
//     console.log("Its December");
//     break;

//   default:
//     console.log("Type number between 1 to 12 please!!!");
// }

//  * İstifadəçidən ədəd alın bu ədədin mənfi və ya müsbət olmasını ekrana yazdırın Ternary operatordan istifadə edərək.

// let number = +prompt("Please write a number!!!!!!!!!");

// const posOrNeg = number > 0 ? "Its Positive number" : "Its Negative number";

// console.log(posOrNeg);

//  ! Tasks 3

// * Aşağıdakı arraylar-dən Birdənə FullStack arrayı düzəldin hər bir arrayın içindəki elementi fullStack array-nə push edin  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] const backEnd = ['Node','Express', 'MongoDB']

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];

// let fullStack = [`${frontEnd} ${backEnd}`];

// console.log(fullStack);

// ! Concat ile

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];

// let fullStack = frontEnd.concat(backEnd);

// console.log(fullStack);

// * const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] min və max age-i tap

// function findMinMax() {
//   let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//   let minValue = Math.min(...ages);
//   let maxValue = Math.max(...ages);

//   console.log("Minimum number is:" + minValue);
//   console.log("Maximum number is:" + maxValue);
// }

// findMinMax();

// * age array-dən evenAge  array-i düzəldin yəni ages içində cütləri seçib evenAge-i yaradan kod yazın . evenAge = [22,24,20,26,24] olsun sonda

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// let evenAge = ages.filter(function (element) {
//   return element % 2 == 0;
// });

// console.log(`Even ages are: ${evenAge}`);

// * yuxarıdakı ages arrayın həndəsi ortasını tapın

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// ?

// *  Yuxarıdakı ages arrayın ədədi ortasını tapın

// ?

// ! Tasks 4

// * const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] arrayinin adlarının ekrana yazdırın

// const frontEnd = ['HTML', 'CSS', 'JS', 'React ', 'Redux']

// console.log(frontEnd);

// * const backEnd = ['Node','Express', 'MongoDB'] array-in dəyərini ekrana yazdırın forof dövrü ilə

// const backEnd = ["Node", "Express", "MongoDB"];

// for (value of backEnd) {
//   console.log(value);
// }

// * 1-100 qədər 3 və 6 bölünən ədədlərin cəmini tapın

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 6 === 0) {
//     console.log(i);
//     sum += i;
//   }
// }

// console.log(sum);

// * 50-70 qədər 3 bölünən ədədlərin hasilin tapın

// let multiply = 1;

// for (let i = 50; i < 70; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//     multiply *= i;
//   }
// }

// console.log(multiply);

// * -10 -dan 30-a qədər cüt ədədlərin sayını tapın

// for (let i = -10; i < 30; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// * Array-in elementlərinin cəmini toplayan funksiya yazın

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// const calculate = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// };

// calculate(arr);

// * Çevrenin sahəsini tapan funksiya yazın
// let radius = +prompt("Enter radius!!!");
// let pi = 3;

// const calc = function (radius) {
//   if (radius > 0) {
//     sahe = Math.pow(radius, 2) * pi;
//   }
//   console.log(sahe);
// };

// calc(radius);

// * Verilmiş arrayı tərsinə yazdıran funksiya yazın məs : console.log(reverseArray([1, 2, 3, 4, 5])) //[5, 4, 3, 2, 1]
// let array = [1, 2, 3, 4, 5];

// array.reverse();

// console.log(array);

// * Verilmiş array içində cüt ədədləri toplayan funksiya yazın.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let sum = 0;
// const result = function () {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// };
// result();

// * verilmiş faiz artımını hesablayan  funksiya yazın məsələnt increase(50,20) 50 - ni  20 faiz artırır yəni geriyə 60 dəyərini versin
// let number = +prompt("Enter a number");
// let percent = +prompt("Enter a percentage");

// const calc = function (number, percent) {
//   let increase = (number * percent) % 100;
//   let newNumber = number + increase;
//   console.log(newNumber);
// };

// calc(number, percent);
// ?
// * faiz Azalmasını hesablayan funksiya yazın yuxarıdakının əksi olsun
// ?
// ! Mentor tasklari

// * Input ile daxil olunan 1 ci ededi daxil olunan 2 ci ededin quvvetine yukseldin

// let numberOne = +prompt("Write number");
// let numberTwo = +prompt("Write number");

// const number = Math.pow(numberOne, numberTwo);

// console.log(number);

// * Daxil edilen ededlerin ededi ortasini tapin

// let howMany = +prompt("How many numbers");

// const calculate = function () {
//   for (let i = 0; i < howMany; i++) {
//     let number = +prompt("Write number");
//     number

//     console.log(number);
//   }
// };

// calculate();

// Array olsun, target olsun, target-den sonraki array-in index’ini tapin let arr = [32, 234, 35, 56, 67, 678, 34, 23, 13]  nextTargetIndex(arr, 34) // Burada target == 34 qeyd olunmusdur
// ?

// *Array icerisinde en kicik ededi tapin
// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13];

// let min = Math.min(...arr);

// console.log(min);

// * Array icerisinde nece cut element var
// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(`${arr[i]}`);
//   }
// }

// * Array icerisinde nece tek element var
// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(`${arr[i]}`);
//   }
// }

// * Array icerisinde nece element oldugunu tapin
// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13];

// const n = arr.length;

// console.log(n);

// * Arraydaki ededlerin ededi ortasini tapin
// let arr = [4, 88, 6, 13, 8, 9, 11, 34, 45];
// ?

// *  Array icerisindeki tek ededlerin cemini tapin
// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     sum += arr[i];
//     console.log(sum);
//   }
// }

// * Array icerisindeki cut ededlerin hasilini tapin
// let arr = [32, 234, 35, 56, 3, 67, 678, 34, 23, 13];
// multiply = 1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     multiply *= arr[i];
//     console.log(multiply);
//   }
// }

// *

// let number = +prompt("Enter a number");
// let sum = 0;

// const calc = function () {
//   for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//       console.log(i);
//       sum += i;
//     }
//   }
//   console.log(`sum : ${sum}`);
// };

// calc();

// *

// let number = +prompt("Enter a number");

// const calc = function () {
//   for (let i = 0; i < number.lenght; i++) {
//     number % 10 == number;
//   }
// };

// *

// let number = prompt("Enter a number");

// const reversing = function () {
//   let lenght = number.lenght;
//   for (let i = 0; i < lenght; i++) {}
// };

// reversing();
//////////////////////////////////////////////////

// let number = prompt("Enter the number:");

// let counter = 0;

// function other(number) {
//   let strecth = number.length;

//   for (let i = 0; i < strecth; i++) {
//     number % 10;
//     number = parseInt(number / 10);

//     counter++;
//   }

//   console.log(`Number of counter: ${counter}`);
// }

// other(number);
///////////////////////////////////////////////
// * Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın

// let counter = prompt("Enter the number!!!");
// let sum = 0;

// const calc = function (counter) {
//   for (let i = 0; i < counter.length; i++) {
//     number = Math.pow(counter[i], 2);
//     sum += number;
//   }
//   console.log(sum);
// };

// calc(counter);

// * İstifadəçidən alınan n sayda ədədi array’i toplayın ve siralayin
// let counter = +prompt('Enter the numeral:')

// function other(counter) {
//   let arr = []

//   for(let i = 0; i < counter; i++) {
//     let number = +prompt('Enter the number:')

//     arr.push(number)
//   }

//   console.log(arr.sort((a, b) => a - b))
// }

// other(counter)

// * Istifadecinin daxil etdiyi ededin kok altini tap

// let number = +prompt("Enter the number");

// const calc = function () {
//   let sqrtNumber = Math.sqrt(number);
//   console.log(sqrtNumber);
// };
// calc();

// * Istifadeci 0 daxil edenedek edelerin cemini tapin

// function other(number) {
//   let sum = 0

//   while(true) {
//     let number = +prompt('Enter the number:')

//     if (number === 0) {
//       break
//     } else {
//       sum += number
//     }
//   }

//   return sum
// }

// console.log('Number of sum:', other())

// * Input ile daxil olunan 3 ededden ortancili tapan funksiya yazin

// function other(number) {
//   let middle = 0;

//   for (let i = 0; i < 3; i++) {
//     let number = +prompt("Enter the number:");

//     if (middle == true) {
//       console.log("Middle number:", number);
//     }
//     middle++;
//   }
// }

// other();
