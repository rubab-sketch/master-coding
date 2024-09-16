// Array of 50 different colors
const colors = [
    "#FF5733", "#33FFBD", "#FF33A1", "#33FF57", "#5733FF", "#F333FF", 
    "#33D4FF", "#FFD433", "#FF8C33", "#D433FF", "#33FF82", "#FF3375",
    "#3385FF", "#FF3333", "#85FF33", "#3338FF", "#FF5733", "#33FFBD", 
    "#F333FF", "#33D4FF", "#FFD433", "#FF8C33", "#5733FF", "#F333FF", 
    "#33FF57", "#5733FF", "#FF33A1", "#33FFBD", "#33FF82", "#FF3375", 
    "#3385FF", "#FF5733", "#FFD433", "#33FFBD", "#5733FF", "#33FF57", 
    "#85FF33", "#3338FF", "#FF5733", "#33FFBD", "#FF33A1", "#33FF57", 
    "#FF33A1", "#D433FF", "#3385FF", "#33FF57", "#FF5733", "#33FFBD"
];

// Function to change background color
function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Event listeners for spacebar and touch events
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        changeColor();
    }
});

document.addEventListener("touchstart", changeColor);
