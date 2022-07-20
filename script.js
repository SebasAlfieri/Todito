// Fondo todito

element = document.getElementById("press");

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

    if (x==4){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==5){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==6){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==7){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==8){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==9){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==10){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==11){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==12){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==13){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==14){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==15){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==16){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==17){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==18){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==19){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==20){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }

    if (x==21){
        document.getElementById("flip-card-back").style.backgroundImage = 'url(./img/e' + x + '.png)';
    }
}

