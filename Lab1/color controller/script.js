const redSlider=document.getElementById("redSlider");
const greenSlider=document.getElementById("greenSlider");
const blueSlider=document.getElementById("blueSlider");
const coloredText=document.getElementById("coloredText");
function updateColor(){
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue=blueSlider.value;

    coloredText.style.color = `rgb(${red}, ${green}, ${blue})`;
}

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);

updateColor();
