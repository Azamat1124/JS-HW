

// ! задача -1

const student = {
  name: "Azamat",
  lastName: "Malikov",
  age: 22,
};
const student2 = Object.assign({}, student);
delete student2.age;
console.log(student);
console.log(student2);

// ! задача - 3

const array = [
  1,
  true,
  3,
  { name: "ZH", hobbies: ["swimming", "reading"] },
  5,
  "hello",
  "hi",
];
console.log(array[1]);

console.log(array[4]);

console.log(array[3].hobbies);

array[3].hobbies.pop();
console.log(array[3].hobbies);

array.unshift("jyldyz krasavchik");
array.push("merhaba");
array.shift();
console.log(array);

const res = array.findIndex((element) => element === "hello");
console.log(res);

const ress = array.slice(0, 3);
console.log(ress);

array[3].hobbies.unshift("football");
console.log(array[3].hobbies);

delete array[4];
delete array[5];
console.log(array);

console.log(array.length);

//! задача - 4

const aray = [1, 2, 3, "sdf", 4, "sdf", {}, 3, true, 2, [1, 6, 3], 1];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    sum = sum + array[i];
  } else if (typeof array[i] === "object") {
    for (let k = 0; k < array[i].length; k++) {
      if (typeof array[i][k] == "number") {
        sum = sum + array[i][k];
      }
    }
  }
}
console.log(sum);
