function calculateTringleArea() {
    const triangleBaseValue = getInputValueById('triangle-base');
    const triangleHightValue = getInputValueById('triangle-height');

    const area = 0.5 * triangleBaseValue * triangleHightValue;
    setAreaById('triangle-area', area)
}

function  getInputValueById(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputfieldValue = inputField.value;
    const getValue = parseFloat(inputfieldValue);
    return getValue;
}

function  setAreaById(events, area) {
    const event = document.getElementById(events);
    event.innerText = area;
    const eventValue = event;
    return eventValue;
}


const divTriangle = document.getElementById('triangleDiv');

divTriangle.addEventListener('mouseover', function () {
    divTriangle.style.backgroundColor = 'pink'
})

divTriangle.addEventListener('mouseout', function () {
    divTriangle.style.backgroundColor = ''
})



  