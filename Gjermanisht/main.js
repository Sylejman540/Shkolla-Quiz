

const questions = [
    // Anglisht - 25 pyetje
    {
      question: "We love football, don’t we? What is the function of 'don’t we?'",
      answers: [
        { text: "Question", correct: false },
        { text: "Modal verb", correct: false },
        { text: "Question tag", correct: true },
        { text: "Adjectives", correct: false }
      ]
    },
    {
      question: "Which of the following is in the comparative form?",
      answers: [
        { text: "Many, less", correct: false },
        { text: "Best, worst", correct: false },
        { text: "Less, more", correct: true },
        { text: "Little, much", correct: false }
      ]
    },
    {
      question: "Which of the following are correct plural forms of nouns?",
      answers: [
        { text: "Knives", correct: true },
        { text: "Persons", correct: false },
        { text: "Childs", correct: false },
        { text: "Geese", correct: true }
      ]
    },
    {
      question: "Which sentence is grammatically correct in the Past Continuous tense?",
      answers: [
        { text: "He were dancing", correct: false },
        { text: "She was dancing", correct: true },
        { text: "We were dancing", correct: true },
        { text: "We was playing", correct: false }
      ]
    },
    {
      question: "Met, bet, and oversleep are:",
      answers: [
        { text: "Regular verbs", correct: false },
        { text: "Irregular verbs", correct: true },
        { text: "Regular nouns", correct: false },
        { text: "Irregular nouns", correct: false }
      ]
    },
    {
      "question": "Choose the correct form of the verb to complete the sentence: 'He _____ every morning before school.'",
      "answers": [
        { "text": "walk", "correct": false },
        { "text": "walks", "correct": true },
        { "text": "walking", "correct": false },
        { "text": "walked", "correct": false }
      ]
    },
    {
      "question": "What is the synonym of 'quick'?",
      "answers": [
        { "text": "Rapid", "correct": true },
        { "text": "Slow", "correct": false },
        { "text": "Dull", "correct": false },
        { "text": "Quiet", "correct": false }
      ]
    },
    {
      "question": "Which option correctly completes the sentence? 'They _____ playing soccer after school yesterday.'",
      "answers": [
        { "text": "is", "correct": false },
        { "text": "are", "correct": false },
        { "text": "were", "correct": true },
        { "text": "be", "correct": false }
      ]
    },
    {
      "question": "Select the sentence that is written in the future tense.",
      "answers": [
        { "text": "She will go to the store tomorrow.", "correct": true },
        { "text": "She goes to the store tomorrow.", "correct": false },
        { "text": "She went to the store tomorrow.", "correct": false },
        { "text": "She is going to the store yesterday.", "correct": false }
      ]
    },
    {
      "question": "Identify the adverb in the sentence: 'He quickly ran to catch the bus.'",
      "answers": [
        { "text": "ran", "correct": false },
        { "text": "quickly", "correct": true },
        { "text": "to", "correct": false },
        { "text": "bus", "correct": false }
      ]
    },
    // 
    {
      "question": "Fill in the blank: 'If I ______ enough money, I will travel around the world.'",
      "answers": [
        { "text": "have", "correct": true },
        { "text": "had", "correct": false },
        { "text": "will have", "correct": false },
        { "text": "have had", "correct": false }
      ]
    },
    {
      "question": "Choose the sentence that is grammatically correct:",
      "answers": [
        { "text": "She don't like pizza.", "correct": false },
        { "text": "She doesn't like pizza.", "correct": true },
        { "text": "She not likes pizza.", "correct": false },
        { "text": "She didn't liked pizza.", "correct": false }
      ]
    },
    {
      "question": "Which option shows a superlative adjective?",
      "answers": [
        { "text": "Good", "correct": false },
        { "text": "Better", "correct": false },
        { "text": "Best", "correct": true },
        { "text": "Gooder", "correct": false }
      ]
    },
    {
      "question": "Choose the correct plural form of the noun 'mouse'.",
      "answers": [
        { "text": "Mouses", "correct": false },
        { "text": "Mice", "correct": true },
        { "text": "Mices", "correct": false },
        { "text": "Mouse", "correct": false }
      ]
    },
    {
      "question": "Which sentence is in Present Continuous tense?",
      "answers": [
        { "text": "He is playing football.", "correct": true },
        { "text": "He plays football.", "correct": false },
        { "text": "He played football.", "correct": false },
        { "text": "He has played football.", "correct": false }
      ]
    },
    {
      "question": "Which term best describes a professional who designs buildings?",
      "answers": [
        { "text": "Engineer", "correct": false },
        { "text": "Architect", "correct": true },
        { "text": "Carpenter", "correct": false },
        { "text": "Contractor", "correct": false }
      ]
    },
    {
      "question": "Select the sentence that correctly uses a health-related term:",
      "answers": [
        { "text": "The patient is in critical condition.", "correct": true },
        { "text": "The patient is in a crit condition.", "correct": false },
        { "text": "The patient is critically condition.", "correct": false },
        { "text": "The patient is condition critical.", "correct": false }
      ]
    },
    {
      "question": "Select the comparative form of the adjective 'healthy'.",
      "answers": [
        { "text": "More healthy", "correct": false },
        { "text": "Healthyer", "correct": false },
        { "text": "Most healthy", "correct": false },
        { "text": "Healthier", "correct": true },
      ]
    },
    {
      "question": "Which sentence is punctuated correctly when listing items?",
      "answers": [
        { "text": "I bought apples oranges, and bananas.", "correct": false },
        { "text": "I bought, apples, oranges and, bananas.", "correct": false },
        { "text": "I bought apples oranges and bananas.", "correct": false },
        { "text": "I bought apples, oranges, and bananas.", "correct": true },
      ]
    },
    {
      "question": "Which sentence correctly uses the passive voice?",
      "answers": [
        { "text": "The cake was baked by Mary.", "correct": true },
        { "text": "Mary baked the cake.", "correct": false },
        { "text": "The cake baked by Mary.", "correct": false },
        { "text": "Baked the cake was by Mary.", "correct": false }
      ]
    },
    {
      "question": "Choose the sentence that correctly distinguishes between 'who's' and 'whose'.",
      "answers": [
        { "text": "\"Whose coming to the party?\" is correct.", "correct": false },
        { "text": "\"Who's coming to the party?\" is correct.", "correct": true },
        { "text": "\"Who's book is this?\" is correct.", "correct": false },
        { "text": "\"Whose is coming to the party?\" is correct.", "correct": false }
      ]
    },
    {
      "question": "Which sentence is correctly punctuated as a compound sentence?",
      "answers": [
        { "text": "I wanted to go for a walk, but it started raining.", "correct": true },
        { "text": "I wanted to go for a walk but it started raining.", "correct": false },
        { "text": "I wanted to go for a walk, but, it started raining.", "correct": false },
        { "text": "I wanted to go for a walk; but it started raining.", "correct": false }
      ]
    },
    {
      "question": "Fill in the blank: 'I have been learning English _____ 5 years.'",
      "answers": [
        { "text": "since", "correct": false },
        { "text": "for", "correct": true },
        { "text": "during", "correct": false },
        { "text": "at", "correct": false }
      ]
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Tjeter";
    showQuestion();
  }

  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        // Store the correct answer as a string "true"
        button.dataset.correct = "true";
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Luaj Perseri";
    nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === "Luaj Perseri") {
      startQuiz();
    } else {
      handleNextButton();
    }
  });

  startQuiz();
  