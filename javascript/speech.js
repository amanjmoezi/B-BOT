const eyesBoxBBot = document.querySelector(".eye-box");
const eyesBBot = document.querySelectorAll(".eye");
const AUDIOPLAY = document.querySelector("#AUDIO_PLAY");
var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'fa-IR';
let inputWord = "";
let serach="";
recognition.onresult = function(event){
    input=event.results[0][0].transcript;
    inputWord = input;

}
setInterval(() => {
    console.log(inputWord);
}, 1000);
recognition.onend = ()=>{
recognition.start();
    
}
recognition.start();
let closeEye = setInterval(closeeyes, 2000);

function closeeyes() {
    eyesBBot.forEach(element => {
        element.style.height = "0";
        setTimeout(() => {
            element.style.height = "120px";
        }, 90);
    });
}