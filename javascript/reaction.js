function reactionFace(inp) {
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
    
        default:
            break;
    }
}