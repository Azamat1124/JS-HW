! задача -1
const computers1 = [
    {title:"Macbook Air M1",
        price: 85000,
    },
    {title:"Dell",
        price: 65000,
    },
    {title:"Asus ZenBook",
        price: 40000,
    },
    {title:"Acer Aspire",
        price: 45000,
    },
    {title:"Macbook Pro",
        price: 100000,
    },

]
let promax1 = [...computers1].sort((a, b) => a.price - b.price);
let promax2 = [...computers1].sort((a, b) => b.price - a.price);
console.log(promax1);
console.log(promax2);

! задача - 2

const number1 = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1]
const num1 = number1.sort ((prev,nexs) => prev - nexs)
console.log(num1);
const num2 = number1.sort ((prev, nexs) => nexs - prev)
console.log(num2);

! задача - 3

const userName = ["strawbery",  "mango",  "watermelon",  "grapes",  "lemon", "kiwi"]
const userName1 = userName.sort().join("  ");
console.log(userName1);
const userName2 = userName.sort().reverse().join ("  ");
console.log(userName2);

! задача - 4

const number4 = [4, 123, -5, 6, 100];
console.log(Math.min(...number4));
console.log(Math.max(...number4));

! задача - 5

const formatData1 = (Date) => {
  let dd = Date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = Date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yyyy = Date.getYear() % 100;
  if (yyyy < 10) yyyy = "0" + yyyy;
  return dd + "." + mm + "." + yyyy;
};
let a = new Date(2024, 3, 5);
console.log(formatData1(a));



// console.log(`----------- 5 zadacha--------------`);

const date = new Date();
const hours = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
if (hours < 10) {
  const time = "0" + hours + ":" + minute + ":" + seconds;
  console.log(time);
} else if (minute < 10) {
  const time1 = hours + ":" + "0" + minute + ":" + seconds;
  console.log(time1);
} else if (seconds < 10) {
  const time2 = hours + ":" + minute + ":" + "0" + seconds;
  console.log(time2);
} else if (hours < 10 && minute < 10) {
  const time3 = "0" + hours + ":" + "0" + minute + ":" + seconds;
  console.log(time3);
} else if (hours < 10 && minute < 10 && seconds < 10) {
  const time4 = "0" + hours + ":" + "0" + minute + ":" + "0" + seconds;
  console.log(time4);
} else {
  const time5 = hours + ":" + minute + ":" + seconds;
  console.log(time5);
}

!задача - 6
const instagramUser6 = {
    userName:"Uzumaki123",
    email:"user@gmail.com",
    passwort:"123123",
    avatarUrl:"http://www.google.com/search?q=cat",
    followers:"1m",
    follwing:512,
    title:"Never Giv up",
}
for(let code  in instagramUser6){
    console.log(code);
}

console.log('-----------------values-----------------');
for (let values in instagramUser6){
    const val = instagramUser6[values]
    console.log(val);

}

! задача - 7

const computers = [
    {title:"Macbook Air M1",
        price: 85000,
    },
    {title:"Dell",
        price: 65000,
    },
    {title:"Asus ZenBook",
        price: 40000,
    },
    {title:"Acer Aspire",
        price: 45000,
    },
    {title:"Macbook Pro",
        price: 100000,
    },

]
let summa = 0;

for (let Object of computers){
    summa += Object.price
}
console.log(summa);

! задача - 8

const instagramUser8 = {
  userName: "Uzumaki123",
  email: "user@gmail.com",
  passwort: "123123",
  avatarUrl: "http://www.google.com/search?q=cat",
  followers: "1m",
  follwing: 512,
  title: "Never Giv up",
};
const keys = Object.keys(instagramUser8);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
console.log(`---------------------while-------------------`);
const values = Object.keys (instagramUser8);
let val = 0;

while (val < values.length){
    const val2 = instagramUser8[values[val]]
    console.log(val2);
    val++
}
console.log(`-----------------for--------------------`);

  for (const [key, value] of Object.entries(instagramUser8)) {
    console.log(`${key}: ${value}`);
  }