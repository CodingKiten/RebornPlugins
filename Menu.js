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

      // Append the cube to the body
      document.body.appendChild(cubeElement);

      // Trigger animation to open the cube
      cubeElement.animate(
        [
          { transform: "scale(0)" },
          { transform: "scale(1)" }
        ],
        {
          duration: 500,
          easing: "ease"
        }
      );

      // Set the cube visibility to true
      cubeVisible = true;
    } else {
      // Trigger animation to close the cube
      cubeElement.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(0)" }
        ],
        {
          duration: 500,
          easing: "ease"
        }
      ).onfinish = () => {
        // Remove the cube element from the DOM
        cubeElement.remove();
      };

      // Set the cube visibility to false
      cubeVisible = false;
    }
  }
});
