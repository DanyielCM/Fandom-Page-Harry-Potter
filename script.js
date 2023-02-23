
document.addEventListener("DOMContentLoaded"), () => {
    var audio = document.getElementById("audio");
    audio.play();
}

function over() {
    document.querySelector(".title").innerHTML = "Which house do you belong to?";
}

function out() {
    document.querySelector(".title").style.width = "25vw";
    document.querySelector(".title").style.height = "11vw"; 
    document.getElementById("start").style.display = "block";
}

//  Questions

function question(n) {
    if (n <8) {
    document.getElementById("q" + n).style.display = "none";
    document.getElementById("q" + (n + 1)).style.display = "block";
    } else {
    document.getElementById("q8").style.display = "none";
        function house(listOfHouses) {
            var random = Math.floor(Math.random() * listOfHouses.length);
                if (random == 0) {
                    document.getElementById("result").style.color = "#740001";
                    document.getElementById("house-logo").src = "images/gryffindor.png";
                } else if (random == 1) {
                    document.getElementById("result").style.color = "#FFD800";
                    document.getElementById("house-logo").src = "images/hufflepuff.png";

                } else if (random == 2) {
                    document.getElementById("result").style.color = "#0E1A40";
                    document.getElementById("house-logo").src = "images/ravenclaw.png";

                } else if (random == 3) {
                    document.getElementById("result").style.color = "#1A472A";
                    document.getElementById("house-logo").src = "images/slytherin.png";

                }
            document.getElementById("house-logo").style.display = "block";
            return(listOfHouses[random]);
        }
        var list = ["Gryffindor!", "Hufflepuf!", "Ravenclaw!", "Slytherin!"];
        document.getElementById("result").innerHTML = "Congratulations! You are a " + house(list);
        }

}

