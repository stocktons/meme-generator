const formElement = document.querySelector("form");
const urlInput = document.querySelector('input[name="URL"]');
const topLineInput = document.querySelector('input[name="top-line"]');
const bottomLineInput = document.querySelector('input[name="bottom-line"]');
const main = document.querySelector("main");

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    
    const newMeme = document.createElement("div");
    newMeme.setAttribute("class", "meme-frame");

    const newPicture = document.createElement("div");
    newPicture.setAttribute("class", "meme-body");
    newPicture.style.backgroundImage = `url("${urlInput.value}")`;

    const newTop = document.createElement("p");
    newTop.setAttribute("class", "top-text");
    newTop.innerText = topLineInput.value;

    const newBottom = document.createElement("p");
    newBottom.setAttribute("class", "bottom-text");
    newBottom.innerText = bottomLineInput.value;

    const close = document.createElement("p");
    close.setAttribute("class", "close");
    close.innerHTML = "&times";

    main.prepend(newMeme);
    newMeme.append(newPicture);
    newPicture.append(newTop);
    newPicture.append(close);
    newPicture.append(newBottom);

    urlInput.value = '';
    topLineInput.value = '';
    bottomLineInput.value = '';
});

main.addEventListener("click", function(e){
    if(e.target.className === 'close' || e.target.className === 'meme-body' || e.target.className === 'top-text' || e.target.className === 'bottom-text'){
        e.target.parentElement.remove();
    };
})
