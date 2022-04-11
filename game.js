// Global Variables
const mainEl = document.querySelector("main");
const gridEl = document.querySelector(".grid");
const answersEl = document.querySelector(".answers");
const cashEl = document.getElementById("cash");
let numWrong = 0;

const categories = [
  {
    category: "Music",
    questions: [
      {
        question:
          "What Smashing Pumpkins song was originally done by Fleetwood Mac?",
        answers: ["Landslide", "1978", "Tonight Tonight", "Disarm"],
        correctAnswer: 0,
      },
      {
        question: "Which member of the Beatles had dyslexia?",
        answers: [
          "Paul McCartney",
          "Ringo Starr",
          "John Lennon",
          "George Harrison",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which Pink Floyd album features a prism on the cover?",
        answers: [
          "Wish You Were Here",
          "Dark Side of the Moon",
          "The Wall",
          "Animals",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "TV",
    questions: [
      {
        question: "Family guy took place in which state?",
        answers: ["Georgia", "New York", "California", "Rhode Island"],
        correctAnswer: 3,
      },
      {
        question:
          "In the first episodes of Friends, Monica and Rachel live in what apartment number?",
        answers: ["#4", "#5", "#6", "#7"],
        correctAnswer: 1,
      },
      {
        question: "What town did the Simpson family live in?",
        answers: ["Springfield", "Cloverfield", "Westfield", "Greenfield"],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "Sports",
    questions: [
      {
        question: "What’s the national sport of Canada?",
        answers: ["Hockey", "Baseball", "Lacrosse", "Football"],
        correctAnswer: 2,
      },
      {
        question: "Which boxer fought Muhammad Ali and won?",
        answers: [
          "Leon Spinks",
          "Ernie Terrell",
          "Sonny Liston",
          "Joe Frazier",
        ],
        correctAnswer: 3,
      },
      {
        question: "How old was Tiger Woods when he won the Masters?",
        answers: ["19", "20", "21", "22"],
        correctAnswer: 2,
      },
    ],
  },
  {
    category: "Movies",
    questions: [
      {
        question: "In The Matrix, what color pill does Neo take?",
        answers: ["Green", "Blue", "Yellow", "Red"],
        correctAnswer: 3,
      },
      {
        question: "What Hollywood movie star plays himself in Zombieland?",
        answers: ["Bill Murray", "Jason Segel", "Jim Carey", "Steve Carell"],
        correctAnswer: 0,
      },
      {
        question: "What is the highest-grossing R-rated movie of all time?",
        answers: ["Deadpool", "Joker", "The Matrix", "Logan"],
        correctAnswer: 1,
      },
    ],
  },
];

// gets the score/value for a question based on the index
function getQuestionValue(questionIndex) {
  switch (questionIndex) {
    case 0:
      return 100;
    case 1:
      return 300;
    case 2:
      return 500;
  }
}

function renderCategory(category, categoryIndex) {
  const categoryId = `category${categoryIndex + 1}`;
  const categoryEl = document.createElement("div");
  // add CSS classes
  categoryEl.classList.add("category", categoryId);
  // add content
  categoryEl.innerText = category.category;
  // append DOM nodes
  gridEl.append(categoryEl);
  // render questions
  category.questions.forEach((question, questionIndex) => {
    const questionValue = getQuestionValue(questionIndex);
    renderQuestion(categoryId, question, questionValue);
  });
}

function addCash(value) {
  const cash = parseInt(cashEl.innerText);
  cashEl.innerText = cash + value;
}

// add click listener for question
function registerQuestion(questionEl, question, value) {
  questionEl.addEventListener("click", (e) => {
    // answer incorrect after 30sec
    const timer = setTimeout(() => {
      answerIncorrect(questionEl);
    }, 30000);
    question.answers.forEach((answer, answerIndex) => {
      const answerEl = renderAnswer(answer);
      answerEl.addEventListener("click", () => {
        if (answerIndex === question.correctAnswer) {
          answerCorrect(questionEl, value);
        } else {
          answerIncorrect(questionEl);
        }
        clearTimeout(timer);
      });
    });
    // show the options
    answersEl.classList.remove("hidden");
    // added flipped class to the clicked question
    questionEl.classList.add("flipped");
    // disable all clicks on questions
    document.querySelectorAll(".box").forEach((boxEl) => {
      boxEl.classList.add("disabled");
    });
  });
}

function answerCorrect(questionEl, value) {
  questionEl.innerHTML = "";
  questionEl.classList.add("correct");
  addCash(value);
  resetQuestions();
}

function answerIncorrect(questionEl) {
  questionEl.innerHTML = "";
  questionEl.classList.add("incorrect");
  numWrong++;
  if (numWrong === 3) {
    gameOver();
  }
  resetQuestions();
}

function gameOver() {
  mainEl.innerHTML = "Game Over, you suck!";
  setTimeout(() => {
    window.location.href = "/";
  }, 5000);
}

function renderQuestion(categoryId, question, value) {
  const questionEl = document.createElement("div");
  const contentEl = document.createElement("div");
  const frontEl = document.createElement("div");
  const backEl = document.createElement("div");
  // add CSS classes
  questionEl.classList.add("box", categoryId);
  contentEl.classList.add("content");
  frontEl.classList.add("front");
  backEl.classList.add("back");
  // add content
  frontEl.innerText = `$${value}`;
  backEl.innerText = question.question;
  // append DOM nodes
  contentEl.append(frontEl, backEl);
  questionEl.append(contentEl);
  gridEl.append(questionEl);
  // register the click event listener
  registerQuestion(questionEl, question, value);
}

function renderAnswer(answer) {
  const answerEl = document.createElement("button");
  answerEl.classList.add("answer");
  answerEl.innerText = answer;
  answersEl.append(answerEl);
  return answerEl;
}

function resetQuestions() {
  answersEl.classList.add("hidden");
  // remove old answers
  document.querySelectorAll(".answer").forEach((answerEl) => {
    answersEl.removeChild(answerEl);
  });
  // re-enable clicks on questions and flip cards back over
  document.querySelectorAll(".box").forEach((boxEl) => {
    boxEl.classList.remove("disabled", "flipped");
  });
}

function initializeGame() {
  // render categories/questions to the DOM
  categories.forEach((category, categoryIndex) => {
    renderCategory(category, categoryIndex);
  });
}

function resetGame() {
  // reset numWrong
  numWrong = 0;
  // reset cash to zero
  cashEl.innerHTML = 0;
  gridEl.innerHTML = "";
  answersEl.innerHTML = "";
  answersEl.classList.add("hidden");
  initializeGame();
}

initializeGame();

const startOverBtn = document.querySelector(".reset");
startOverBtn.addEventListener("click", () => {
  resetGame();
});
startOverBtn.addEventListener("mouseover", () => {
  startOverBtn.innerHTML = "Cheater";
});
startOverBtn.addEventListener("mouseout", () => {
  startOverBtn.innerHTML = "Play Again";
});
