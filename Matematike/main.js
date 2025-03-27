const questions = [
    
    // MATEMATIKË - 21 pyetje
    {
        question: "Në një raport 3:5, nëse pjesa e parë është 9, sa është pjesa e dytë?",
        answers: [
          { text: "12", correct: false },
          { text: "18", correct: false },
          { text: "15", correct: true },
          { text: "20", correct: false }
        ]
      },
      {
        question: " Kendi suplementar i kendit 145* eshte",
        answers: [
          { text: "50", correct: false },
          { text: "30", correct: false },
          { text: "35", correct: true },
          { text: "45", correct: false }
        ]
      },
      {
        question: "Nese x+y=5 dhe x-y=1 atehere vlera e shprehjes 2*x*y=?",
        answers: [
          { text: "12", correct: true },
          { text: "10", correct: false },
          { text: "2", correct: false },
          { text: "20", correct: false }
        ]
      },
      {
        question: "Zgjidhja e sistemit 2x-y=7 dhe x+y=2  eshte e barabarte me qiftin e nr?",
        answers: [
          { text: "3, 1", correct: false },
          { text: "-3, 1", correct: false },
          { text: "1, 3", correct: false },
          { text: "3, -1", correct: true },
        ]
      },
      {
        question: "Numri qe duhet shkruhet ne fund eshte:6000+20%.........+25%...........",
        answers: [
          { text: "8000", correct: false },
          { text: "7200", correct: false },
          { text: "9000", correct: true },
          { text: "10000", correct: false }
        ]
      },
      {
        question: "Zgjidh ekuacionin: 3(x - 2) = 12",
        answers: [
          { text: "6", correct: true },
          { text: "5", correct: false },
          { text: "8", correct: false },
          { text: "7", correct: false }
        ]
      },
      {
        question: "Vlera e shprehje (x+y)2-(x-y)2",
        answers: [
          { text: "8xy", correct: false },
          { text: "x - y", correct: false },
          { text: "x + y", correct: true },
          { text: "7", correct: false }
        ]
      },
      {
        question: "Rrezja e rrethit syprina e te cilit eshte S=625 pi cm2 eshte",
        answers: [
          { text: "R = 10cm", correct: false },
          { text: "R = 25cm", correct: true },
          { text: "R = 12cm", correct: false },
          { text: "R = 20cm", correct: false }
        ]
      },
      {
        question: "Per 7kg jane paguar 49 euro,ndersa per 434 euro  jane  blere?",
        answers: [
          { text: "60kg", correct: false },
          { text: "70kg", correct: false },
          { text: "62kg", correct: true },
          { text: "50kg", correct: false }
        ]
      },
      {
        question: "Grafiket e funksioneve x+y=5 dhe 3x-y=3 priten ne piken",
        answers: [
          { text: "-1, 2", correct: false },
          { text: "3, 1", correct: false },
          { text: "2, 3", correct: true },
          { text: "1, 1", correct: false }
        ]
      },
      {
        question: "Nr i nx. te nje klase eshte 28.Prej tyre 4 kalojne me 5,6 me 4,11 me 3,3 me 2 dhe 4 perserisin vitin.Sa eshte nota mesatare e klases",
        answers: [
          { text: "2.9", correct: false },
          { text: "3.04", correct: false },
          { text: "3.11", correct: true },
          { text: "2.85", correct: false }
        ]
      },
      {
        question: "Cila shume per 4 vjet me rritje 3% sjell 1200 euro interes",
        answers: [
          { text: "15000", correct: false },
          { text: "20000", correct: false },
          { text: "10000", correct: false },
          { text: "18000", correct: true }
        ]
      },
      {
        question: "Në një trekëndësh kënddrejtë, nëse kateti i parë është 6 dhe hipotenuza është 10, cila është gjatësia e katetit tjetër?",
        answers: [
          { text: "8", correct: true },
          { text: "7", correct: false },
          { text: "9", correct: false },
          { text: "6", correct: false }
        ]
      },
      {
        question: "Nëse një trekëndësh kënddrejtë ka hipotenuzën 10, cila nga këto mund të jenë gjatësitë e katetave të tij?",
        answers: [
          { "text": "6 dhe 8", "correct": true },
          { "text": "5 dhe 8", "correct": false },
          { "text": "3 dhe 9", "correct": false },
          { "text": "7 dhe 7", "correct": false }
        ]
      },
      {
        question: "Në një klasë me 32 nxënës, 3/4 e tyre janë vajza. Sa është numri i djemve?",
        answers: [
          { text: "20", correct: false },
          { text: "25", correct: false },
          { text: "24", correct: true },
          { text: "30", correct: false }
        ]
      },
      {
        question: "Zgjidh ekuacionin: 2(x + 4) = 18",
        answers: [
          { text: "24", correct: false },
          { text: "16", correct: false },
          { text: "8", correct: true },
          { text: "4", correct: false }
        ]
      },
      {
        question: " Nje pale kepuce kane kushtuar 75$.Pas zbritjes ne qmimet ato kushtojne 60$.Sa eshte % e zbritjes?",
        answers: [
          { text: "30%", correct: false },
          { text: "35%", correct: false },
          { text: "20%", correct: true },
          { text: "25%", correct: false }
        ]
      },
      // 
      {
        question: "Prek me teli me gjatesi 40cm eshte formuar nje katror. Nga ai tel pastaj eshte formuar nje drejtekendesh njera brinje e te cilit eshte 7cm. Sa eshte brinja tjeter?",
        answers: [
          { text: "10cm", correct: false },
          { text: "11cm", correct: false },
          { text: "12cm", correct: false },
          { text: "13cm", correct: true }
        ]
      },
      {
        question: "Nder dy numra negative ne boshtin numerik me i vogel eshte ai qe:",
        answers: [
          { text: "e ka me te madhe distancen nga origjina e boshtit numerik", correct: true},
          { text: "eshte ne pjesen pozitive te boshtit numerik", correct: false },
          { text: "e ka me te vogel distancen nga origjina e boshtit numerik", correct: false },
          { text: "eshte ne origjinen e boshtit numerik", correct: false }
        ]
      },
      
      {
       question : "Cila është formula themelore e teoremës së Pitagorës?",
       answers: [
      { "text": "a² + b² = c²", "correct": true },
      { "text": "a + b = c", "correct": false },
      { "text": "a² - b² = c²", "correct": false },
      { "text": "2a + 2b = c", "correct": false }
       ]
      },
      {
        question: "Në një trekëndësh kënddrejtë, hipotenuza është 15 dhe një nga katetet është 9. Cila është gjatësia e katetës tjetër?",
        answers: [
          { "text": "12", "correct": true },
          { "text": "13", "correct": false },
          { "text": "10", "correct": false },
          { "text": "14", "correct": false }
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
  