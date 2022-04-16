let req = new XMLHttpRequest();
function reaction(inp) {
    switch (inp) {
        case "seyStory":
            faceBBot.classList.add("musicLi")
            textShowsTag.classList.add("story")
            new Audio("sound/4.mp3").play()
            setTimeout(() => {bBOTmouth(2)}, 200);setTimeout(() => {bBOTmouth(5)}, 300);setTimeout(() => {bBOTmouth()}, 500);
            req.open("GET","http://api.codebazan.ir/dastan/");
            req.onload = () =>{
                let deta = req.response
                textShow(deta)
            }
            req.send()
            break;
        case "seyToKnow":
            faceBBot.classList.add("musicLi")
            textShowsTag.classList.add("story")
            new Audio("sound/4.mp3").play()
            setTimeout(() => {bBOTmouth(2)}, 200);setTimeout(() => {bBOTmouth(5)}, 300);setTimeout(() => {bBOTmouth()}, 500);
            req.open("GET","http://api.codebazan.ir/danestani/");
            req.onload = () =>{
                let deta = req.response
                textShow(deta)
            }
            req.send()
            break;
        case "laugh":
            new Audio("sound/5.mp3").play();
            bBOTmouth(2)
            setTimeout(() => {
                bBOTmouth(10)
            }, 100);
            setTimeout(() => {
                bBOTmouth(2)
            }, 200);
            setTimeout(() => {
                bBOTmouth(10)
            }, 300);
            setTimeout(() => {
                bBOTmouth(2)
            }, 400);
            setTimeout(() => {
                bBOTmouth()
            }, 500);
            break;
        case "search":
            textShow("باشه الان سرچ می کنم")
            new Audio("sound/4.mp3").play()
            setTimeout(() => {bBOTmouth(2)}, 200);setTimeout(() => {bBOTmouth(5)}, 300);setTimeout(() => {bBOTmouth()}, 500);
            let serach = resultVoice.replace("سرچ کن","");
            serach=serach.split(" ");
            let q="";
            serach.forEach(word => {
                q+= `${word}+`;
            });
            window.open(`https://google.com/search?q=${q}`, "", "width=600,height=900");
            break;
            case "restFace":
                faceBBot.classList.remove("musicLi")
                textShowsTag.classList.remove("story")
                textShowsTag.innerText = "";
                bBOTmouth();
                break;
                case "playChess":
                    window.open(`https://www.chess.com/play/online`, "", "width=600,height=900");
                    textShow("😒حتما بزن بریم بیچاره بشی امانج")
                    break;
                    
                    
                }
            }