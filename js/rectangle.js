function calculateRectangleArea() {
    const rectangleWide = getInputValueById('rectangle-wide');
    const rectangleHeight = getInputValueById('rectangle-length');

    const rectangle = rectangleWide * rectangleHeight;
    setAreaById('rectangle-area', rectangle);
}

function getBaseValueById(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputfieldValue = inputField.value;
    const ifValue = parseFloat(inputfieldValue);
    return ifValue;
}

function setAreaById(events ,area) {
    const event = document.getElementById(events);
    event.innerText = area;
    const displayValue = event;
    return displayValue;
}


const divRectangle = document.getElementById('rectangleDiv');

divRectangle.addEventListener('mouseover', function () {
    divRectangle.style.backgroundColor = 'goldenrod'
})

divRectangle.addEventListener('mouseout', function () {
    divRectangle.style.backgroundColor = ''
})