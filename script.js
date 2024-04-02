function convert() {
    const INPUT_VALUE = document.querySelector("input").value;
    const TEXT = document.querySelector("h2");
    const dropDown = document.querySelector("select");
    
    if(dropDown.value === "Fahrenheit To Celsius") {
        const newValue = (INPUT_VALUE - 32) * 5/9;
        TEXT.textContent = newValue + "° Celsius";
    }
    else if(dropDown.value === "Celsius To Fahrenheit") {
        const newValue = (9/5 * INPUT_VALUE) + 32;
        TEXT.textContent = newValue + "° Fahrenheit";
    }
}