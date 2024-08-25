function generateRandomValue() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    if (!isNaN(minValue) && !isNaN(maxValue) && minValue <= maxValue) {
        const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        document.getElementById('output').innerText = `Your random value from the selected range is ${randomValue}`;
    } else {
        document.getElementById('output').innerText = `Please enter valid min and max values.`;
    }
}
