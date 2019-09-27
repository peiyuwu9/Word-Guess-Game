var djName = ["avicii", "armin", "martin", "alesso", "zedd", "david"];
var guessChances = 10;
var wins = 0;
var losses = 0;
var screenArray = [];
var computerPickLetter = [];
var wrongLetter = [];
var ifGenerate = true;

var generateRandomNumber = function () {
    wrongLetter = [];
    screenArray = [];
    computerPickLetter = [];
    var computerPick = djName [(Math.floor(Math.random() * djName.length))];
    computerPickLetter = computerPick.split("");
    for (var i=0; i < computerPickLetter.length; i++) {
        screenArray[i]="_";
        document.getElementById("dj-name").innerHTML = screenArray.join(" ");
    }
    document.getElementById("player-guess").innerHTML = wrongLetter.join(" ");
    log();
}

var log = function() {
    document.getElementById("guess-chances").textContent =  "You have " + guessChances + " chances left.";
    document.getElementById("wins").textContent = "You win " + wins + " times.";
    document.getElementById("losses").textContent = "You loss " + losses + " times.";
}

var resetGame = function() {
    guessChances = 10;
    wrongLetter = [];
    document.getElementById("player-guess").innerHTML = wrongLetter.join(" ");
    log();
}

generateRandomNumber();

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    console.log(computerPickLetter);
    console.log(screenArray);
    
    if (guessChances >0) {

        if ((screenArray.indexOf(userGuess) === -1) && (wrongLetter.indexOf(userGuess) === -1)) {

            guessChances--;
            console.log(guessChances);

            if ((userGuess==="a")||(userGuess==="b")||(userGuess==="c")||(userGuess==="d")||(userGuess==="e")||(userGuess==="f")||(userGuess==="g")||(userGuess==="h")||(userGuess==="i")||(userGuess==="j")||(userGuess==="k")||(userGuess==="l")||(userGuess==="m")||(userGuess==="n")||(userGuess==="o")||(userGuess==="p")||(userGuess==="q")||(userGuess==="r")||(userGuess==="s")||(userGuess==="t")||(userGuess==="u")||(userGuess==="v")||(userGuess==="w")||(userGuess==="x")||(userGuess==="y")||(userGuess==="z")) {

                for (var j=0; j < computerPickLetter.length; j++) {
                    if (userGuess === computerPickLetter[j]) {
                        screenArray[j] = userGuess;
                    }
                }
                document.getElementById("dj-name").innerHTML = screenArray.join(" ");
                console.log(screenArray);


                if ((screenArray.indexOf(userGuess) === -1)) {
                    wrongLetter.push(userGuess);
                    document.getElementById("player-guess").innerHTML = wrongLetter.join(" ");
                }

                if (screenArray.indexOf("_") === -1) {

                    console.log(screenArray.join(""));

                    document.getElementById("image-instruction").textContent = "";

                    // if ("alan" === "Alan")
                    if (screenArray.join("") === "alesso") {
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Alesso.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Alesso feat. OneRepublic - If I Lose Myself.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "avicii") {
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Avicii.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Avicii - Waiting For Love.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "armin") {
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Armin.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Armin van Buuren - Turn It Up.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "david") {
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/David.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/David Guetta feat. Sia - Titanium.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "zedd") {
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Zedd.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Zedd feat. Jon Bellion - Beautiful Now [Grey Remix].mp3";
                        document.getElementById("backgound-music").play();
                    }

                    if (screenArray.join("") === "martin") {
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Martin.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Martin Garrix feat. Bonn - High On Life.mp3";
                        document.getElementById("backgound-music").play();
                    }

                    wins ++;

                    generateRandomNumber();
                }
                
                log();
            }
            
            else {
                alert("Please press letter key!");
            }
        }
    }

    else {

        if (losses < 2) {
            losses ++;
            resetGame();
        }

        else {
            alert ("Game Over!");
        }

    }

}