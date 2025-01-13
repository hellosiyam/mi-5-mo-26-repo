function calculateParallelogramArea() {
   const parallelogramBase = getInputValueById('parallelogram-base');
   const parallelogramHeight = getBaseValueById('parallelogram-height');

   const parallelogram = 0.5 * parallelogramBase * parallelogramHeight;
   setDisplyVlaue('parallelogram-area', parallelogram);
}

function getInputValueById(inputvalue) {
    const inputField = document.getElementById(inputvalue);
    const inputfieldValue = inputField.value;
    const ifValue = parseFloat(inputfieldValue);
    return ifValue;
}

function setDisplyVlaue(events, area) {
    const event = document.getElementById(events);
    event.innerText = area;
    const displayValue = event;
    return displayValue; 
}