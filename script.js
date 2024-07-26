

let counter =0;
while(counter<=100){
    console.log(counter);
    counter =counter +1
}

zadacha-2

let count =0;
while (count <=20){
    if (count % 2===0){
        console.log(count);
    }
    count++;

}



let counter = 1;
let sum = 1;

while (counter <= 0 ) {
  sum = sum + counter;
  counter++;
}
console.log(sum +counter);


zadacha-4

let userName ="Naruto Shipuden  ";

console.log(userName.charAt(0));
let counter =0;
while (counter <= userName.length){
    if(userName.charAt(counter) ==="u"){
        console.log("the Leter is in "+counter+"index");
    }
    counter ++;
}
let naruto ="Naruto Shipuden";
for(let index =naruto.length; index>=0; index--){
    let char =naruto.charAt(index);
    if (char ==="u"){
        console.log(yes! ${char});
    }else{
        console.log("No!");
    }
}




let user = "peaksoft";
let coun = user.length;

while (coun >= 0) {
    console.log(user.charAt(coun));
    coun--;
}

segodna
let number = prompt("введите код");
for (let kod = 0; kod <= number; kod++){
    console.log(kod);
}



let string = 0;
let st = ``;

while (string < 6) {
  let strin = 0;
  while (strin <= 10) {
    if (string === 0 || string === 5) {
      st = st + "*";
    }  else if (strin === 0 || strin === 10){
        st = st + "*"
    }

    else {
      st = st + "-";
    }

    strin++;
  }

  st = st + "\n";
  string++;
}

console.log(st);

 

let strogo = 7;
let strogo2 = "";
let strogo3 = "#"

for (let ts = 0; ts < strogo; ts++){
    strogo2 += strogo3;
    console.log(strogo2);
}

let wl = 7;
let res1 = "";
let res2 = "#";
let res3 = 0;

while (wl >= res3) {
  res1 += res2;
  console.log(res1);
  res3++;
}