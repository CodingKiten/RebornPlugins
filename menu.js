// Keep track of whether the cube is currently visible
let cubeVisible = false;
let cubeElement;

// Attach an event listener to the right shift key press
window.addEventListener("keydown", (event) => {
  if (event.code === "ShiftRight") {
    // Open the cube if it's not visible, or close it if it's already visible
    if (!cubeVisible) {
      // Create a cube element
      cubeElement = document.createElement("div");
      cubeElement.style.width = "100px";
      cubeElement.style.height = "100px";
      cubeElement.style.backgroundColor = "red";
      cubeElement.style.transform = "scale(0)";
      cubeElement.style.transition = "transform 0.5s";

      // Append the cube to the body
      document.body.appendChild(cubeElement);

      // Trigger animation to open the cube
      cubeElement.style.transform = "scale(1)";

      // Set the cube visibility to true
      cubeVisible = true;
    } else {
      // Trigger animation to close the cube
      cubeElement.style.transform = "scale(0)";

      // Remove the cube element from the DOM after the animation finishes
      setTimeout(() => {
        cubeElement.remove();
      }, 500);

      // Set the cube visibility to false
      cubeVisible = false;
    }
  }
});
