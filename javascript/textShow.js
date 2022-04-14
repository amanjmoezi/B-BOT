function textShow(text) {
  document.querySelector(".texts").innerText = "";
    types =  new Typed('.texts', {
        strings: [text],
        typeSpeed: 50,
        loop:false,
      });
}
