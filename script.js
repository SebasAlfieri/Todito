var button = document.getElementById("press");

button.addEventListener("click", function(){
    randomBgImage();
})

function randomBgImage() {
    var x = Math.floor(Math.random() * 21);
    var bgImage = 'url(./img/' + x + '.png)';
    console.log(bgImage);

    document.getElementById("card").style.backgroundImage = bgImage;
}

element = document.getElementById("press");

element.addEventListener("click", function(e) {
    e.preventDefault;
    
    element.classList.remove("animation");

    element.offsetWidth = element.offsetWidth;

    element.classList.add("animation");
}, false);