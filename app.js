// global variable
const optionsWrapper = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const resetBtn = document.querySelector(".reset");
// selecting all the boxes in the html document
const boxes = document.querySelectorAll(".box");
const answers = {
  1: {
    options: ["Landslide", "1978", "hdhd", "abab"],
    correctAnswer: 0,
  },
};

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
  const questionId = box.id;
  answers[questionId].options.forEach((option, i) => {
    options[i].innerHTML = option;
  });
  optionsWrapper.classList.remove("hidden");
  // added flipped class to the clicked box
  box.classList.add("flipped");
  // removed the flipped class after 30sec
  setTimeout(() => {
    box.classList.remove("flipped");
    optionsWrapper.classList.add("hidden");
  }, 30000);
  console.log("box click worked");
}

function clearGrid() {
  boxes.forEach((box) => {
    box.classList.remove("flipped");
  });
  optionsWrapper.classList.add("hidden");
}

resetBtn.addEventListener("click", clearGrid);

// const id = 1;
// answers[id].options;
// answers[1].correctAnswer;
