function addInfo(symbol) {
    const display = document.getElementById('display');
    display.value += symbol;

}

function seeResult() {
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch(error) {
        display.value = "Error: " + error.message;
    }
}
