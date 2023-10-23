let cubeVisible = false;
let cubeElement;

window.addEventListener("keydown", (event) => {
  if (event.code === "ShiftRight") {
    if (!cubeVisible) {
      cubeElement = document.createElement("div");
      cubeElement.style.width = "100px";
      cubeElement.style.height = "100px";
      cubeElement.style.backgroundColor = "red";
      cubeElement.style.position = "fixed";
      cubeElement.style.top = "50%";
      cubeElement.style.left = "50%";
      cubeElement.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(cubeElement);
      cubeVisible = true;
    } else {
      cubeElement.remove();
      cubeVisible = false;
    }
  }
});
