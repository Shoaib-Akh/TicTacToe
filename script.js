let sign = "x";
let disp = document.getElementById("player");
let count = 1;
let alphaplayer = "";
var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), { keyboard: false })

function printx(number) {
    let isko = document.getElementById("r" + number);
    if (isko.innerText == "") {
        isko.innerText = sign;
        if (sign == 'x') {
            disp.innerHTML = "<center>" +
                "O" + "   Your turn" + "</center>";
        } else disp.innerHTML = "<center>" +
            "X" + "   Your turn" + "</center>";
        count++;
        winner();
        checksign();
    }
}

function checksign() {
    if (sign == "x") {
        sign = "o";
    } else {
        sign = "x";
    }
}

function getbox(no) {
    return document.getElementById("r" + no).innerHTML;
}

function checkmove(a, b, c, m) {
    if (getbox(a) == m && getbox(b) == m && getbox(c) == m) {
        return true;
    } else return false;
}

function winner() {
    if (checkmove(1, 2, 3, sign) || checkmove(4, 5, 6, sign) || checkmove(7, 8, 9, sign) ||
        checkmove(1, 3, 7, sign) || checkmove(2, 5, 8, sign) || checkmove(3, 6, 9, sign) ||
        checkmove(1, 5, 9, sign) || checkmove(3, 5, 7, sign)) {
        disp.innerHTML = "<center>" + sign + "  winner" + "</center>"
        reset();
    }
    if (count > 9) {
        setTimeout(() => {
            alert('match draw');
            document.getElementById('modelContent').innerHTML = 'Match Tied ' +
                alphaplayer;
            reset();
        }, 0);
    }
}

function reset() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("r" + i).innerHTML = "";
    }
    count = 1
}