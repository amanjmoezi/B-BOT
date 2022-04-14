function reaction(inp) {
    switch (inp) {
        case "story":
            
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
            new Audio("sound/4.mp3").play()
            setTimeout(() => {bBOTmouth(2)}, 200);setTimeout(() => {bBOTmouth(5)}, 300);setTimeout(() => {bBOTmouth()}, 500);
            let serach = resultVoice.replace("سرچ کن","");
            serach=serach.split(" ");
            let q=""; 
            serach.forEach(word => {
                q+= word+"+";

            });
            window.open(`https://google.com/search?q=${q}`, "", "width=600,height=900");
            break;
            default:
                break;
            }
}