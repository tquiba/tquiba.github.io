function biggerText() {
    document.getElementById("text-area").style.fontSize = "24pt";
}

function fancifyText() {
    var textArea = document.getElementById("text-area");
    var fancyShmancyRadio = document.getElementById("fancy-shmancy");

    if (fancyShmancyRadio.checked) {
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
        textArea.style.fontWeight = "bold";
    } else {
        textArea.style.color = "";
        textArea.style.textDecoration = "";
        textArea.style.fontWeight = "";
    }
}

function mooify() {
    var textArea = document.getElementById("text-area");
    var text = textArea.value;
    var sentences = text.split(". ");
  
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];
        if (sentence.trim() !== "") {
            sentences[i] = sentence.toUpperCase() + "-Moo";
        }
    }
  
    textArea.value = sentences.join(". ");
}