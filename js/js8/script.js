// let frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// let backEnd = ["Node", "Express", "MongoDB"];

// let fullStack = [];

// const create = function () {
//   let fullStack = frontEnd.concat(backEnd);
//   console.log(fullStack);
// };

// create();

// * age array-dən evenAge  array-i düzəldin yəni ages içində cütləri seçib evenAge-i yaradan kod yazın . evenAge = [22,24,20,26,24] olsun sonda

// let age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// let evenAge = age.filter(function (element) {
//   return element % 2 == 0;
// });

// console.log(`Even ages are : ${evenAge}`);

// * 50-70 3e bolunen ededlerin cemi

let sum = 0;

for (let i = 50; i <= 70; i++) {
  if (i % 3 === 0) {
    sum += i;
  }
}

console.log(sum);
