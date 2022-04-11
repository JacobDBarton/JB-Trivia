const grid = document.querySelector(".grid");

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
        answers: [],
        correctAnswer: 0,
      },
      {
        question:
          "In the first episodes of Friends, Monica and Rachel live in what apartment number?",
        answers: [],
        correctAnswer: 0,
      },
      {
        question: "What town did the Simpson family live in?",
        answers: [],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "Sports",
    questions: [
      {
        question: "What’s the national sport of Canada?",
        answers: [],
        correctAnswer: 0,
      },
      {
        question: "Which boxer fought Muhammad Ali and won?",
        answers: [],
        correctAnswer: 0,
      },
      {
        question: "How old was Tiger Woods when he won the Masters?",
        answers: [],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "Movies",
    questions: [
      {
        question: "In The Matrix, does Neo take the blue pill or the red pill?",
        answers: [],
        correctAnswer: 0,
      },
      {
        question:
          "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
        answers: [],
        correctAnswer: 0,
      },
      {
        question: "What is the highest-grossing R-rated movie of all time?",
        answers: [],
        correctAnswer: 0,
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
  grid.append(categoryEl);
  // render questions
  category.questions.forEach((question, questionIndex) => {
    const questionValue = getQuestionValue(questionIndex);
    renderQuestion(categoryId, question, questionValue);
  });
}

function renderQuestion(categoryId, question, value) {
  const boxEl = document.createElement("div");
  const contentEl = document.createElement("div");
  const frontEl = document.createElement("div");
  const backEl = document.createElement("div");
  // add CSS classes
  boxEl.classList.add("box", categoryId);
  contentEl.classList.add("content");
  frontEl.classList.add("front");
  backEl.classList.add("back");
  // add content
  frontEl.innerText = `$${value}`;
  backEl.innerText = question.question;
  // append DOM nodes
  contentEl.append(frontEl, backEl);
  boxEl.append(contentEl);
  grid.append(boxEl);
  // add click event listener
}

// render categories/questions to the DOM
categories.forEach((category, categoryIndex) => {
  renderCategory(category, categoryIndex);
});

// question click event listener callback
function onSelectQuestion(e) {}

function renderAnswer(option) {}

function clearAnswers() {}

// answer click event listener callback
function onSelectAnswer(e) {}
