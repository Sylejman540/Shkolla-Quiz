const questions = [
  // GJEOGRAFI - 22
  {
    question: "Sa është sipërfaqja e Republikës së Kosovës?",
    answers: [
      { text: "10.878 km²", correct: false },
      { text: "10.788 km²", correct: false },
      { text: "10.887 km²", correct: true },
      { text: "10.778 km²", correct: false }
    ]
  },
  {
    question: "Me cilat shtete kufizohet Republika e Kosovës?",
    answers: [
      { text: "Shqipërinë, Maqedoninë dhe Bullgarinë", correct: false },
      { text: "Shqipërinë, Maqedoninë dhe Serbinë", correct: false },
      { text: "Shqipërinë, Maqedoninë e Veriut, Malin e Zi dhe Serbinë", correct: true },
      { text: "Shqipërinë, Malin e Zi, Serbinë", correct: false }
    ]
  },
  {
    question: "Cili është lumi më i gjatë në territorin e Kosovës?",
    answers: [
      { text: "Drini", correct: true },
      { text: "Ereniku", correct: false },
      { text: "Ibri", correct: false },
      { text: "Shkumbini", correct: false }
    ]
  },
  {
    question: "Sa kilometra kishte rrjeti rrugor në Kosovë deri në vitin 1988?",
    answers: [
      { text: "4,500 km", correct: false },
      { text: "4,000 km", correct: false },
      { text: "5,000 km", correct: true },
      { text: "3,500 km", correct: false }
    ]
  },
  {
    question: "Sa rrugë automobilistike e lidhin Kosovën me Serbinë?",
    answers: [
      { text: "1 rrugë automobilistike", correct: false },
      { text: "3 rrugë automobilistike", correct: false },
      { text: "2 rrugë automobilistike", correct: true },
      { text: "4 rrugë automobilistike", correct: false }
    ]
  },
  {
    question: "Cili oqean shtrihet mes Afrikës, Azisë dhe Australisë?",
    answers: [
      { text: "Oqeani i ngrirë i Veriut", correct: false },
      { text: "Paqësori", correct: false },
      { text: "Indian", correct: true },
      { text: "Atlantiku", correct: false }
    ]
  },
  {
    question: "Cila luginë e lumit e lidh Republikën e Kosovës me Malin e Zi dhe Serbinë?",
    answers: [
      { text: "E Drinit", correct: false },
      { text: "E Lepencit", correct: false },
      { text: "E Moravës së Binçës", correct: false },
      { text: "E Ibrit", correct: true }
    ]
  },
  {
    question: "Meridiani i Grinuiçit është meridiani fillestar. Nëpër cilin prej këtyre kryeqyteteve kalon ai?",
    answers: [
      { text: "Parisi", correct: false },
      { text: "Berni", correct: false },
      { text: "Londra", correct: true },
      { text: "Berlini", correct: false }
    ]
  },
  {
    question: "Mes cilave dete shtrihet ngushtica e Bosforit?",
    answers: [
      { text: "Detit Adriatik dhe Jon", correct: false },
      { text: "Detit të Zi dhe Marmara", correct: true },
      { text: "Detit të Zi dhe Azov", correct: false },
      { text: "Detit Mesdhe dhe Egje", correct: false }
    ]
  },
  {
    question: "Sa është gjatësia e Ekuatorit?",
    answers: [
      { text: "30,000 km", correct: false },
      { text: "60,000 km", correct: false },
      { text: "50,000 km", correct: false },
      { text: "40,000 km", correct: true }
    ]
  },
  {
    question: "Cili kontinent ka sipërfaqjen më të madhe?",
    answers: [
      { text: "Azia", correct: true },
      { text: "Afrika", correct: false },
      { text: "Amerika Veriore", correct: false },
      { text: "Antarktida", correct: false }
    ]
  },
  {
    question: "Cila është sipërfaqja e kontinentit Evropë?",
    answers: [
      { text: "10.180.000 km²", correct: true },
      { text: "9.500.000 km²", correct: false },
      { text: "8.700.000 km²", correct: false },
      { text: "11.000.000 km²", correct: false }
    ]
  },
  {
    question: "Cili konsiderohet zakonisht si lumi më i gjatë në botë?",
    answers: [
      { text: "Lumi Nil", correct: true },
      { text: "Lumi Amazon", correct: false },
      { text: "Lumi Yangtze", correct: false },
      { text: "Lumi Mississippi", correct: false }
    ]
  },
  {
    question: "Cili është mali më i lartë në botë?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false }
    ]
  },
  {
    question: "Cili kontinent ka popullsinë më të madhe?",
    answers: [
      { text: "Azia", correct: true },
      { text: "Afrika", correct: false },
      { text: "Evropa", correct: false },
      { text: "Amerika Veriore", correct: false }
    ]
  },
  {
    question: "Sa shtete janë në kontinentin Evropë?",
    answers: [
      { text: "44", correct: true },
      { text: "48", correct: false },
      { text: "50", correct: false },
      { text: "52", correct: false }
    ]
  },
  {
    question: "Cili është oqeani më i madh në botë?",
    answers: [
      { text: "Oqeani Paqësor", correct: true },
      { text: "Oqeani Atlantik", correct: false },
      { text: "Oqeani Indian", correct: false },
      { text: "Oqeani Arktik", correct: false }
    ]
  },
  {
    question: "Cili është oqeani më i vogël në botë?",
    answers: [
      { text: "Oqeani Arktik", correct: true },
      { text: "Oqeani Paqësor", correct: false },
      { text: "Oqeani Atlantik", correct: false },
      { text: "Oqeani Indian", correct: false }
    ]
  },
  {
    question: "Cili vend është më i madh për nga sipërfaqja në Amerikën Veriore?",
    answers: [
      { text: "Kanada", correct: true },
      { text: "Shtetet e Bashkuara", correct: false },
      { text: "Meksika", correct: false },
      { text: "Kuba", correct: false }
    ]
  },
  {
    question: "Cili është vendi më i populluar në Amerikën Veriore?",
    answers: [
      { text: "Shtetet e Bashkuara", correct: true },
      { text: "Meksika", correct: false },
      { text: "Kanada", correct: false },
      { text: "Kuba", correct: false }
    ]
  },
  {
    question: "Cili është kufiri ndërkombëtar më i gjatë në Amerikën Veriore?",
    answers: [
      { text: "Kufiri midis Shteteve të Bashkuara dhe Kanadasë", correct: true },
      { text: "Kufiri midis Meksikës dhe Shteteve të Bashkuara", correct: false },
      { text: "Kufiri midis Meksikës dhe Kanadasë", correct: false },
      { text: "Kufiri midis Kanadasë dhe Groenlandës", correct: false }
    ]
  },
  {
    question: "Cili është vargu malor më i njohur në Amerikën Veriore?",
    answers: [
      { text: "Malet Rokie", correct: true },
      { text: "Malet Apalaçe", correct: false },
      { text: "Malet Kordilere", correct: false },
      { text: "Malet Skandinave", correct: false }
    ]
  }
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
  