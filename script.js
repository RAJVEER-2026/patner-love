document.getElementById("calculateBtn").addEventListener("click", function () {

    var name1 = document.getElementById("name1").value.trim().toLowerCase();
    var name2 = document.getElementById("name2").value.trim().toLowerCase();
    var result = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        alert("Please enter both names ❤️");
        return;
    }

    // unique key (same names = same key)
    var loveKey = name1 + "_" + name2;

    // check localStorage
    var storedScore = localStorage.getItem(loveKey);

    if (storedScore !== null) {
        // show old result
        showResult(name1, name2, storedScore);
    } else {
        // generate new random score
        var loveScore = Math.floor(Math.random() * 101);

        // save to localStorage
        localStorage.setItem(loveKey, loveScore);

        showResult(name1, name2, loveScore);
    }
});


function showResult(name1, name2, loveScore) {

    var result = document.getElementById("result");

    var message = "";

    if (loveScore > 80) {
        message = "Perfect Match 💍";
    } else if (loveScore > 50) {
        message = "Good Compatibility 💕";
    } else {
        message = "Need More Understanding 💔";
    }

    result.innerHTML =
        name1 + " ❤️ " + name2 +
        "<br>" + loveScore + "% Love" +
        "<br>" + message;
}
