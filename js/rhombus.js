function calculateRhombusArea() {
    const romushBase = getInputValue('rhombus-base');
    const romushWidth = getInputValue('rhombus-width');

    const calculateRombosh = 0.5 * romushBase * romushWidth;
    setAreaById('rhombus-area', calculateRombosh)
}

function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputValueText = inputField.value;
    const inputvalue = parseFloat(inputValueText);
    return inputvalue;
}

function setAreaById(elements, area) {
    const element = document.getElementById(elements);
    element.innerText = area;
    const display = element
    return display
}