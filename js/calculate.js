function calculate() {
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
