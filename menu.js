let cubeVisible = false;
let cubeElement;

window.addEventListener("keydown", (event) => {
  if (event.code === "ShiftRight") {
    if (!cubeVisible) {
      cubeElement = document.createElement("div");
      cubeElement.style.width = "600px";
      cubeElement.style.height = "400px";
      cubeElement.style.backgroundColor = "red";
      cubeElement.style.position = "fixed";
      cubeElement.style.top = "50%";
      cubeElement.style.left = "50%";
      cubeElement.style.transform = "translate(-50%, -50%) scale(0)";
      cubeElement.style.borderRadius = "10px";
      cubeElement.style.transition = "transform 0.5s, opacity 0.4s";
      cubeElement.style.opacity = "0";

      document.body.appendChild(cubeElement);

      // Trigger animation to open the cube
      setTimeout(() => {
        cubeElement.style.transform = "translate(-50%, -50%) scale(1)";
        cubeElement.style.opacity = "1";
      }, 10);

      cubeVisible = true;
    } else {
      cubeElement.style.transform = "translate(-50%, -50%) scale(0)";
      cubeElement.style.opacity = "0";

      // Remove the cube element from the DOM after the animation finishes
      setTimeout(() => {
        cubeElement.remove();
      }, 500);

      cubeVisible = false;
    }
  }
});
