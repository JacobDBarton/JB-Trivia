// global variable
const cash = document.getElementById("cash");
// selecting all the boxes in the html document
const boxes = document.querySelectorAll(".box");
// looping through all the boxes
boxes.forEach((box) => {
  // adding a click event listener to each box
  // calls select box on box click
  box.addEventListener("click", selectBox);
});
// click event listener callback function
// called when a box is clicked
function selectBox(event) {
  // target of the click is the box
  const box = event.currentTarget;
  // added flipped class to the clicked box
  box.classList.add("flipped");
  // removed the flipped class after 30sec
  setTimeout(() => {
    box.classList.remove("flipped");
  }, 30000);
  console.log("box click worked");
}
