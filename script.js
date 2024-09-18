// Dynamically create 6 boxes with a for loop
const boxesContainer = document.getElementById('boxes');

for (let i = 0; i < 6; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('id', 'box' + (i + 1));  // Assign unique IDs to each box
    
    // Add a text label to each box
    let boxText = document.createElement('div');
    boxText.classList.add('box-text');
    boxText.innerText = "Box " + (i + 1);
    
    box.appendChild(boxText);
    boxesContainer.appendChild(box);
}

// Change CSS styles based on a variable and apply animations
function changeBoxStyles() {
    let shouldChangeStyle = true;  // Variable controlling CSS change

    if (shouldChangeStyle) {
        let i = 1;  // While loop to go through each box with a delay effect
        while (i <= 6) {
            let box = document.getElementById('box' + i);
            
            // Add animation delay to each box
            setTimeout(() => {
                box.classList.add('changed'); // Apply 'changed' class to alter CSS
            }, i * 300);  // Delay each box by 300ms

            i++;
        }
    }
}
