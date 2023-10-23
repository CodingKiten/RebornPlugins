
// Attach an event listener to the right shift key press
window.addEventListener("keydown", (event) => {
  if (event.code === "ShiftRight") {
    // Create a cube element
    const cube = document.createElement("div");
    cube.style.width = "100px";
    cube.style.height = "100px";
    cube.style.backgroundColor = "red";
    cube.style.position = "absolute";
    cube.style.top = "50%";
    cube.style.left = "50%";
    cube.style.transform = "translate(-50%, -50%)";

    // Append the cube to the body
    document.body.appendChild(cube);
  }
});
