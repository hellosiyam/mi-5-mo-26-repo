// TringleArea 
function calculateTringleArea() {
    // TringleBase
    const getTringleBaseValue = document.getElementById('triangle-base');
    const getTringleBase = getTringleBaseValue.value;
    const getBaseValue = parseFloat(getTringleBase);
    
    
    // TringleHeight
    const getTringleHeightValue = document.getElementById('triangle-height');
    const getTringleHeight = getTringleHeightValue.value;
    const getHeightValue = parseFloat(getTringleHeight);  
    

    // Calculate
    const calculate = 0.5 * getBaseValue * getHeightValue;
    
    // Show the Trangle Value
    const tringleValue = document.getElementById('triangle-area');
    tringleValue.innerText = calculate
}


// RectangleArea
function calculateRectangleArea() {
    // RectangleWidth
    const getRectangleWeidthValue = document.getElementById('rectangle-wide');
    const getRectangleWidth = getRectangleWeidthValue.value;
    const getWidthValue = parseFloat(getRectangleWidth);
    
    // RectangleHeight
    const getRectangleLengthValue = document.getElementById('rectangle-length');
    const getRectangleLength = getRectangleLengthValue.value;
    const getLengthValue = parseFloat(getRectangleLength);
    
    // calculate Rectangle 
    const rectangle = getWidthValue * getLengthValue;
    
    // Show The Ractangle Value 
    const rectangleValue = document.getElementById('rectangle-area');
    rectangleValue.innerText = rectangle;
}
