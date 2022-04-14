function closeEyes() {
    BBotEyes.forEach(element => {
        element.style.height = `0px`;
        setTimeout(() => {
            element.style.height = `120px`;
        }, 120);
    });
}
setInterval(closeEyes, 2800);