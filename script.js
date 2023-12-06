const heading = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
  heading.innerText = randomColor;
});

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
