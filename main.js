var favouringSelect;
var valueInput;
var answerSpan;

window.onload = function() {
    favouringSelect = document.getElementById("favouring-select");
    valueInput = document.getElementById("value-input");
    this.answerSpan = document.getElementById("answer-span");
};

function getData() {
    var favouring;
    try {
        favouring = parseInt(favouringSelect.options[favouringSelect.selectedIndex].value);
    } catch {
        alert("Invalid favouring value input");
        return -1;
    }
    
    var value;
    try {
        value = parseInt(valueInput.value);
    } catch {
        alert("Invalid value input");
        return -1;
    }
    
    if(favouring == 2) {
        NPS2(value);
    } else if(favouring == 3) {
        NPS3(value);
    } else {
        alert("Invalid favouring value input");
        return -1;
    }
}

function displayAnswer(n2, n3) {
    answerSpan.innerHTML = "2(" + n2 + ") + 3(" + n3 + ")";
}

function NPS2(k) {
    var n2, n3;

    if(k % 2 == 0) {
        n2 = k / 2;
        n3 = 0;
    } else {
        n2 = Math.floor(k / 2) - 1;
        n3 = 1;
    }

    displayAnswer(n2, n3);
}

function NPS3(k) {
    var n2, n3;

    if(k % 3 == 0) {
        n2 = 0;
        n3 = k / 3;
    } else {
        n2 = 3 - k % 3;
        n3 = Math.floor(k / 3) - 2 + k % 3;
    }

    displayAnswer(n2, n3);
}