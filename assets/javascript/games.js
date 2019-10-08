var djName = ["avicii", "armin", "martin", "alesso", "zedd", "david"];
var djNameCount = 0;
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
    var computerPick = djName[djNameCount];
    computerPickLetter = computerPick.split("");
    for (var i=0; i < computerPickLetter.length; i++) {
        screenArray[i]="_";
        document.getElementById("dj-name").innerHTML = screenArray.join(" ");
    }
    document.getElementById("player-guess").innerHTML = wrongLetter.join(" ");
    log();
    djNameCount++;
    if (djNameCount=6) {
        djNameCount = 0;
        djName.sort(function(a, b){return 0.5 - Math.random()});
    }
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
            console.log(event.which);

            if (event.which>64 && event.which<91) {

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
                        document.getElementById("dj-print").innerHTML="<b>Alesso - If I Lose Myself</b>";
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Alesso.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Alesso feat. OneRepublic - If I Lose Myself.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "avicii") {
                        document.getElementById("dj-print").innerHTML="<b>Avicii - Waiting For Love</b>";
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Avicii.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Avicii - Waiting For Love.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "armin") {
                        document.getElementById("dj-print").innerHTML="<b>Armin - Turn It Up</b>";
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Armin.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Armin van Buuren - Turn It Up.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "david") {
                        document.getElementById("dj-print").innerHTML="<b>David - Titanium</b>";
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/David.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/David Guetta feat. Sia - Titanium.mp3";
                        document.getElementById("backgound-music").play();
                    }
                    if (screenArray.join("") === "zedd") {
                        document.getElementById("dj-print").innerHTML="<b>Zedd - Beautiful Now</b>";
                        document.getElementById("upload-image").style.visibility = "visible";
                        document.getElementById("upload-image").src = "assets/images/Zedd.jpg";
                        document.getElementById("backgound-music").src = "assets/sound/Zedd feat. Jon Bellion - Beautiful Now [Grey Remix].mp3";
                        document.getElementById("backgound-music").play();
                    }

                    if (screenArray.join("") === "martin") {
                        document.getElementById("dj-print").innerHTML="<b>Martin - High On Life</b>";
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
            wins = 0;
            losses = 0;
            resetGame();
            generateRandomNumber();
            document.getElementById("upload-image").style.visibility = "hidden";
            document.getElementById("backgound-music").pause();
            
        }

    }

}