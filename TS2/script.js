var activeBox = null;  // track of the currently active floating box
var animate = false;  // prevents overlapping animations

function toggleBox(day) {
    if (animate) return;  // the function will exit if an animation is happening
    animate = true;  

    var selectedColor = getComputedStyle(document.querySelector(`.${day}-btn`)).backgroundColor; // Gets the button color

    if (activeBox) {
        activeBox.style.transition = "top 1.8s ease-out, background-color 1.8s ease-out, border-width 1.8s ease-out";
        activeBox.style.top = "-750px";  // current box goes up the screen 
        activeBox.style.backgroundColor = activeBox.style.borderColor;   

        setTimeout(() => {
            animate = false;  
        }, 1200);  
    } else {
        animate = false;  
    }

    // Create New Box
    var newfloatingBox = document.createElement("div");
    newfloatingBox.classList.add("motion-box");  

    //designing the new box
    newfloatingBox.style.position = "absolute";
    newfloatingBox.style.left = "65%";  
    newfloatingBox.style.transform = "translateX(-50%)";  
    newfloatingBox.style.width = "320px";  
    newfloatingBox.style.height = "320px";  
    newfloatingBox.style.backgroundColor = selectedColor;  
    newfloatingBox.style.border = `10px solid ${selectedColor}`;  
    newfloatingBox.style.transition = "top 0.7s ease-out, background-color 0.7s ease-out, border-width 0.7s ease-out, transform 0.7s ease-in-out";
    newfloatingBox.style.top = "-450px";  

    document.body.appendChild(newfloatingBox); // Adds box to the page

    setTimeout(() => {
        newfloatingBox.style.top = "30%";  
        newfloatingBox.style.transform = "translateX(-50%) scale(1)";  
    }, 120);

    setTimeout(() => {
        newfloatingBox.style.backgroundColor = "rgba(0,0,0,0)"; // makes the box transparent
    }, 600);

    activeBox = newfloatingBox;  // Updates the activeBox reference
}
