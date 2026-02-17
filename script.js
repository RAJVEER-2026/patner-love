document.getElementById("calculateBtn").addEventListener("click", function() {

    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();
    var result = document.getElementById("result");

    if(name1 === "" || name2 === "") {
        alert("Please enter both names ❤️");
        return;
    }

    var loveScore = Math.floor(Math.random() * 101);

    var message = "";

    if(loveScore > 80) {
        message = "Perfect Match 💍";
    } else if(loveScore > 50) {
        message = "Good Compatibility 💕";
    } else {
        message = "Need More Understanding 💔";
    }

    result.innerHTML = name1 + " ❤️ " + name2 + 
                       "<br>" + loveScore + "% Love" +
                       "<br>" + message;
});
