var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'fa-IR';
recognition.interimResults = false;
let resultVoice = "";
recognition.onresult = function(event) {
    resultVoice = event.results[0][0].transcript;
    console.log(resultVoice);
}
recognition.start();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
recognition.onend = function() {
    recognition.start();
    if (resultVoice=="میدونی از چه رنگی خوشم میاد") {
        resultVoice="";
        reaction("restFace");
        new Audio("sound/6.mp3").play()               
        bBOTmouth(1)
        setTimeout(() => {bBOTmouth(2)}, 200);setTimeout(() => {bBOTmouth(5)}, 300);setTimeout(() => {bBOTmouth()}, 500);
        textShow("نه و نمی خوام بدونم ")
    }else if(resultVoice=="سلام")
    {
        reaction("Hello");
        resultVoice="";
    }else if(resultVoice=="بخند")
    {
        reaction("restFace");
        resultVoice="";
        reaction("laugh");
    }else if(resultVoice.slice(0,6)=="سرچ کن"&&resultVoice!="سرچ کن"){
        reaction("restFace");
        reaction("search")
        resultVoice="";
    }else if(resultVoice=="یه داستان بگو"||resultVoice=="داستان بگو"){
        
        reaction("seyStory");
        resultVoice="";
    }else if(resultVoice=="بیا شطرنج"||resultVoice=="حاجی بیا بریم شطرنج"||resultVoice=="بریم شطرنج"||resultVoice=="حاجی بزن بریم شطرنج"){
        reaction("laugh");
        reaction("playChess");
        resultVoice="";
    }else if(resultVoice=="یه دانستنی جالب بگو"||resultVoice=="یه دانستنی  بگو"||resultVoice=="یه دانستنی لطفاً"||resultVoice=="دانستنی بگو"){
        reaction("seyToKnow");
        resultVoice="";
    }
    
}
setInterval(() => {
    if (navigator.onLine==false) {
            new Audio("sound/7.mp3").play();
        document.querySelector(".disconnect").style.display = `block`;
            
    }else
    {
        document.querySelector(".disconnect").style.display = `none`;
    }    
}, 3000);
