function calculateEllipseArea() {
    const ellipsHight = getBaseValueById('ellipse-base');
    const ellipseWidth = getBaseValueById('ellipse-height');

    const ellipse = Math.PI * ellipsHight * ellipseWidth;
    setDisplyVlaue('ellipse-area', ellipse)
}

function getBaseValueById(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputfieldValue = inputField.value;
    const ifValue = parseFloat(inputfieldValue);
    return ifValue;
}

function setDisplyVlaue(events, area) {
    const event = document.getElementById(events); 
    event.innerText = area;
    const display = event;
    return display
}

const divEllipse = document.getElementById('ellipseDiv');
divEllipse.addEventListener('mouseover', function () {
    divEllipse.style.backgroundColor = 'gray'
})

divEllipse.addEventListener('mouseout', function () {
    divEllipse.style.backgroundColor = ''
})