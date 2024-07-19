// 1- задача
const aName = prompt("a");
let baklajan = "10";
if (aName === baklajan) {
  console.log("true");
} else {
  console.log("false");
}

// 2- задача
let kv = prompt ("квартира")
if(kv >= 1 && kv <= 20) alert("Podyesd 1")
else if (kv >= 21 && kv <= 48) {
  console.log("Podyesd -2");
}else if (kv >= 49 && kv <= 90) {
  console.log("Podyesd -3");
}else{
  console.log('No!🫷');
}


// 3-задача
let kons = prompt ("ball")
if (kons >= 0 && kons <= 5){
  console.log('true');
}else {
  console.log('false');
}

// 4- задача
const den = prompt (".")
if(den >= 6 && den <= 12) alert("доброе утро😘")
  else if (den >= 13 && den <= 17) alert("добрый день😍")
else if  (den >= 18 && den <= 23) alert("добрый вечер😴")
  else {
console.log("укта эми болду баскылай бербей");
}

// 6- задача
let jash = prompt ("жашыныз")
if (jash > 6 && jash < 65) alert("арзандатуу жок!")
  else if (jash >= 6)alert("20% арзандатуу!")
    else if (jash <= 65)alert("20% арзандатуу!")

// 7- задача
const igrok1 = prompt ("igrok1")
const igrok2 = prompt ("igrok2")
if (igrok1 === "ножница" && igrok2 === "бумага"){
  console.log("igrok1 победитель");
}
else if (igrok1 === "камень" && igrok2 === "бумага"){
  console.log("igrok2 победитель");
}else if (igrok1 === "ножница" && igrok2 === "камень"){
  console.log("igrok2 победитель");
}else if (igrok1 === "бумага" && igrok2 === "камень"){
  console.log("igrok1 победитель");
}

if (igrok1 === "ножница" && igrok2 === "ножница"){
  console.log("ничья😯");
}
else if (igrok1 === "бумага" && igrok2 === "бумага"){
  console.log("ничья😯");
}else if (igrok1 === "камень" && igrok2 === "камень"){
  console.log("ничья😯");
}

// 9 - задача

let number = 5;
number === 5?
console.log("Five"): 
console.log("Not five");
