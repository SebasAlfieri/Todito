element = document.getElementById("press");

// Fondo todito

element.addEventListener("click", function(e) {
    e.preventDefault;
    
    element.classList.remove("animation");

    element.offsetWidth = element.offsetWidth;

    element.classList.add("animation");
}, false);


// Cartas Randomizer

var button = document.getElementById("press");

button.addEventListener("click", function(){
    randomBgImage();
})

function randomBgImage() {
    var x = Math.floor(Math.random() * 21);
    var bgImage = 'url(./img/' + x + '.png)';
    console.log(bgImage);

    document.getElementById("flip-card-front").style.backgroundImage = bgImage;

if (x==0){
    document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
}

if (x==1){
    document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
}

if (x==2){
    document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
}

if (x==3){
    document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
}
}

