document.getElementById("calculateBtn").addEventListener("click", function () {

    var name1 = document.getElementById("name1").value.trim().toLowerCase();
    var name2 = document.getElementById("name2").value.trim().toLowerCase();
    var result = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        alert("Please enter both names ❤️");
        return;
    }

    // special case (Somnath + Debasmita = 100%)
    if (
        (name1 === "somnath" && name2 === "debasmita") ||
        (name1 === "debasmita" && name2 === "somnath")
    ) {
        showResult(name1, name2, 100);
        return;
    }

    // unique key
    var loveKey = name1 + "_" + name2;

    var storedScore = localStorage.getItem(loveKey);

    if (storedScore !== null) {
        showResult(name1, name2, storedScore);
    } else {
        var loveScore = Math.floor(Math.random() * 101);
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
