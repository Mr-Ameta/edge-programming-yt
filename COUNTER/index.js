let i = 0;
function decrease() {
    if (i > 0) {
        document.getElementById('counter').innerHTML = --i
    }
}

function reset() {
        document.getElementById('counter').innerHTML = i=0
}

function increase() {
        document.getElementById('counter').innerHTML = ++i   
}