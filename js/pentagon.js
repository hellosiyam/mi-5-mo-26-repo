function calculatePentagonArea() {
    const pentagonHeight = getInputValue('pentagon-p');
    const pentagonWidth = getInputValue('pentagon-base');

    const pentagon = 0.5 * pentagonHeight * pentagonWidth;
    setDisplyVlaue('pentagon-area', pentagon)
}

function getInputValue(inputValue) {
   const inputField = document.getElementById(inputValue);
   const inputfieldValue = inputField.value
   const convertValue = parseFloat(inputfieldValue);
   return convertValue
}

function setDisplyVlaue(events, area) {
    const displayValue = document.getElementById(events) ;
    displayValue.innerText = area;
    const display = displayValue;
    return display 
}

const divPentagone = document.getElementById('pentagonDiv');
divPentagone.addEventListener('mouseover',function () {
    divPentagone.style.backgroundColor = 'silver'
})

divPentagone.addEventListener('mouseout', function () {
    divPentagone.style.backgroundColor = ''
})