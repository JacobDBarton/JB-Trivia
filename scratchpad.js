const categories = [
    {
        category: 'Music',
        questions: [
            {
                // the question
                question: '',
                // array of possible answers
                answers: [],
                // index of the correct answer in the answers array
                correctAnswer: 0,
            },
            {
                // the question
                question: '',
                // array of possible answers
                answers: [],
                // index of the correct answer in the answers array
                correctAnswer: 0,
            },
            {
                // the question
                question: '',
                // array of possible answers
                answers: [],
                // index of the correct answer in the answers array
                correctAnswer: 0,
            }
        ]
    }
]

// need a function that renders each category
{/* <div class="category category1">Music</div> */}

// it will also render the questions for that category

// need a function that renders a question like so:
/**
<div class="box" id="1">
    <div class="content">
        <div class="front">$100</div>
        <div class="back">
            What Smashing Pumpkins song was originally done by Fleetwood Mac?
        </div>
    </div>
</div>
*/

// need a function that is called when a question is selected
// it should flip the card over
// it should render each option in the .options div like so
{/* <button class="option">option 1</button> */}

// need a function that clears the options
// will be called when a new question is clicked (before we render new options)

// while a quesiton is being answered, the other questions should probably be disabled
// until the timer runs out or an answer is selected

// when a question is answered correctly
//    - turn the card green and blank
//    - increment the score the amount of the question
// when incorrect or timer runs out, turn the card red and blank

