



// ! задача -1
const taimer = document.getElementById("taim")
setTimeout(()=>{
    taimer.textContent = "ураа";
console.log(setTimeout);

},10000)

// ! задача -2

const divgreen = document.getElementById("divgreen");

let backgroundColor = ["green", "blue", "aqua", "cadetblue", "blueviolet", "crimson"];

let shot = 0;
function inter() {
  divgreen.style.backgroundColor = backgroundColor[shot];
  shot++;
  if (shot > backgroundColor.length - 1) {
  shot = 0;

}
}
setInterval(inter, 1000);


// ! задача -3

const minute =document.getElementById("minute");
const seconds =document.getElementById("seconds");

const divshot = document.getElementById("div-shot");
const buttonstart = document.getElementById("button-start");
const buttonstop = document.getElementById("button-stop");
const buttonreset = document.getElementById("button-reset");

let interval = null

buttonstart.addEventListener("click",()=>{ 
    
    let time = parseInt(minute.value) *  60 + parseInt(seconds.value);
    interval = setInterval(()=>{
        let minute_2 = Math.round(time/60)
        let seconds_2 = time % 60
        divshot.innerHTML = `
        ${minute_2}
        :
        ${seconds_2 < 10 ? "0"+seconds_2 : seconds_2}
        `;
        time--;
        if(time < 0){
            clearInterval(interval)
        }
    },1000)
    
})
buttonstop.addEventListener("click",()=>{
    clearInterval(interval)
})
buttonreset.addEventListener("click",()=>{
    clearInterval(interval)
    divshot.innerHTML = "00:00"
})
minute.innerHTML = "";
seconds.innerHTML = "";








