// Function to set the hair style based on selection
function setHair(color) {
    const hairElement = document.getElementById('hair');
    hairElement.src = `${color}-hair.png`;
}

// Function to set the shirt based on selection
function setShirt(shirt) {
    const shirtElement = document.getElementById('shirt');
    shirtElement.src = `${shirt}.png`;
}
