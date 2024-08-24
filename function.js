function generateRandomValue() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    if (!isNaN(min) && !isNaN(max) && min <= max) {
        var randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('result').innerText = 'Your random value from the selected range is ' + randomValue;
    } else {
        document.getElementById('result').innerText = 'Please enter valid min and max values.';
    }
}
