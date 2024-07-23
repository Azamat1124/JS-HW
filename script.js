

//! задача - 1 - Declaration

function logToConsole1(num, num2) {
for(let n = num; n < num2; n++)
  console.log(n);
}

logToConsole1 (20,50);

//! задача - 1 - arrow function

const loge1 =(num, num2) =>{
for(let n = num; n < num2; n++)
  console.log(n);
}
loge1(10,40)

//! задача - 1 - expression function
const expression1 = function(num, num2){
   for(let n = num; n < num2; n++)
        console.log(n);
}
expression1(1,100)

//! задача - 2 - Declaration

function showEvenNumbers2(number, number2) {
  for(let n = number; n < number2; n++)
    if (n %2 === 0 )
    console.log(n);
  }

  showEvenNumbers2(5,50)

//! задача - 2 - arrow function
const arrow2 =(number, number2) =>{
    for(let n = number; n < number2; n++)
    if (n %2 === 0 )
    console.log(n);
}
arrow2(20,40)

//! задача - 2 - expression function

const express2 = function(number, number2){
   for(let n = number; n < number2; n++)
          if (n %2 === 0 )
          console.log(n);
}
express2(10,80)

//! задача - 3 - Declaration
function sum(san, san2) {
  let res = 0;

  for (let a = san; a < san2; a++) {
    if (a % 2 === 0) {
      res = res + a;
    }
  }
  return res;
}
const result1 = sum(2,40);
console.log(result1);

//! задача - 3 - arrow function
const arrow3 = (san, san2) => {
  let res = 0;
  for (let a = san; a < san2; a++) {
    if (a % 2 === 0) {
      res = res + a;
    }
  }
  return res;
};
const result2 = arrow3(5, 50);
console.log(result2);

//! задача - 3 - expression function
const expression3 = function (san, san2) {
  let res = 0;
  for (let a = san; a < san2; a++) {
    if (a % 2 === 0) {
      res = res + a;
    }
  }
  return res;
};
const result3 = expression3(4, 80);
console.log(result3);

// ! задача - 4 - Declaration

function bool(texs, tamga) {
  for (let index = texs.length - 1; index >= 0; index--) {
    let char = texs.charAt(index);
    if (char === tamga) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

bool("Nooruz", "u");

// ! задача - 4 - arrow function
const arrowFun4 = (texs, tamga) => {
  for (let index = texs.length - 1; index >= 0; index--) {
    let char = texs.charAt(index);
    if (char === tamga) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};

arrowFun4("azamat", "t");

// ! задача - 4 - expression function
const expressionFun4 = function (texs, tamga) {
  for (let index = texs.length - 1; index >= 0; index--) {
    let char = texs.charAt(index);
    if (char === tamga) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};

expressionFun4("peaksoft", "s");

// ! задача - 5 - Declaration

function users(word) {
  let coun = word.length;
  while (coun >= 0) {
    console.log(word.charAt(coun));
    coun--;
  }
}
users("hello");
users("privet");

// ! задача - 5 - arrow function
const arrowFun5 = (word) => {
  let coun = word.length;
  while (coun >= 0) {
    console.log(word.charAt(coun));
    coun--;
  }
};
arrowFun5("Azamat");

// ! задача - 5 - expression function
const expressionFun5 = function (word) {
  let coun = word.length;
  while (coun >= 0) {
    console.log(word.charAt(coun));
    coun--;
  }
};
expressionFun5("Nooruz");
