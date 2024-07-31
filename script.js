// ! задача - 1 даража
// const nam = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const namber = nam.map((element) => element * 2);
// console.log(namber);

// ! задача - 1

// const nambers = [1, 2, 3, 4, 5];
// const nam = (element) => {
//   return element * element;
// };
// const mynam = nambers.map(nam);
// console.log(mynam);

// ! задача - 2
// const userName = [
//   { forstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { forstName: "Ariana", lastName: "Grande", age: 22, gender: "femali" },
//   { forstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { forstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
// ];
// const myName = userName.map((item) => {
//   return {
//     fullName: item.forstName + " " + item.lastName,
//     age:item.age,
//     gender:item.gender,
//   };
// });
// console.log(myName);

// ! задача - 3

// const words = [1, 2, 3, 4, 5, 4, 8, 34 , 3, 6];

// const filteredWords = words.filter((Element)=>{
//     if (Element %2===0) {
//         return Element
//     }
// });
// console.log(filteredWords);

// ! задача - 4

// const users = [
//   { forstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { forstName: "Ariana", lastName: "Grande", age: 22, gender: "femali" },
//   { forstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { forstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
//   { forstName: "Sakura", lastName: "chan", age: 18, gender: "femali" },
// ];
// const ser = users.filter ((element) => {
//     if (element.forstName === "Ariana" || element.forstName === "Sakura") {
//         return true;
//     }
//     return false;
// })
// console.log(ser);

// ! задача -5

// const numbers5 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// const num0 = 0;
// const num5 = numbers5.reduce((element, summa) => element + summa);
// console.log(num5);

// ! задача - 6

// let sum = 0;
// const numbers6 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
// numbers6.forEach((element) => {
//   if (element % 2 === 1) {
//     sum += element;
//   }
// });
// console.log(sum);

// ! задача - 7
 
// const user7 = [
//   { forstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { forstName: "Ariana", lastName: "Grande", age: 22, gender: "femali" },
//   { forstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { forstName: "Kakashi", lastName: "Hatake", age: 38, gender: "male" },
//   { forstName: "Sakura", lastName: "chan", age: 18, gender: "femali" },
// ]
// const res = user7.find((element) => element.forstName === "Naruto")
// console.log(res);

// ! задача - 8

// const numbers8 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// const num8 = numbers8.findIndex((element) => element === 34)
// console.log(num8);