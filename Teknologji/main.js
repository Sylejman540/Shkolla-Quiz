const questions = [
    
    // KIMI - 16 pyetje
    {
        question: "Si quhen ndryshe alkanet ?",
        answers: [
          { text: " Olefina", correct: false },
          { text: "Vitamina", correct: false },
          { text: "Parafina", correct: true },
          { text: "Proteina", correct: false }
        ]
      },
      {
        question: "Aroma e pakendshme si e amoniakut te komponimet organike eshte si pasoje e pranise të ",
        answers: [
          { text: "Estereve", correct: false },
          { text: "Bazave", correct: false },
          { text: "Aminave", correct: true },
          { text: "Acideve", correct: false }
        ]
      },
      {
        question: "Cila nga këto komponime të shenuara eshte formula e butanit ?",
        answers: [
          { text: "CH3CH2CH3", correct: false },
          { text: "CH3CH2CH=CH2", correct: false },
          { text: "CH3CH2CH2-OH", correct: false },
          { text: "CH3CH2CH2CH3", correct: true }
        ]
      },
      {
        question: "Cili nga keto komponime eshte aldehid ?",
        answers: [
          { text: "CH3CH2COOH", correct: false },
          { text: "CH3CH2CH2CHO", correct: true },
          { text: "CH3CH2CH2NH2 ", correct: false }
        ]
      },
      {
        question: "Cili nga keto grupe funksionore eshte grup funksionor eshte grup karbosilik ?",
        answers: [
          { text: "=CO", correct: false },
          { text: "CHO", correct: false },
          { text: "COOH", correct: true },
          { text: "-OH", correct: false }
        ]
      },
      {
        question: "Glukoza dhe Fruktoza jane :",
        answers: [
          { text: "Monosakaride", correct: true },
          { text: "Polisakaride", correct: false },
          { text: "Oligosakaride", correct: false },
          { text: "Disakaride", correct: false }
        ]
      },
      {
        question: "Cili element kimik eshte me i perhapuri ne planetin tone",
        answers: [
          { text: "hidrogeni", correct: false },
          { text: "karboni", correct: false },
          { text: "oksigjeni", correct: true },
          { text: "uji", correct: false }
        ]
      },
      {
        question: "Kimia organike studion komponimet e",
        answers: [
          { text: "azotit", correct: false },
          { text: "karbonit", correct: true },
          { text: "oksigjenit", correct: false },
          { text: "hidrogjenit", correct: false }
        ]
      },
      {
        question: "Qymyri eshte i formuar nga",
        answers: [
          { text: "eshtrat e kafsheve", correct: false },
          { text: "shtazet e imta te detit", correct: false },
          { text: "druret", correct: true },
          { text: "bimet e imta te detit", correct: false }
        ]
      },
      {
        question: "Ketonet sipas IUPAC-ut marrin prapashtesen",
        answers: [
          { text: "ol", correct: false },
          { text: "on", correct: true },
          { text: "an", correct: false },
          { text: "al", correct: false }
        ]
      },
      {
        question: "Acetoni eshte",
        answers: [
          { text: "komponim i karbonit dhe hidrogjenit", correct: false },
          { text: "hidrokarbur i ngopur", correct: false },
          { text: "alkool sekondar", correct: false },
          { text: "komponim i karbonit, hidrogjenit dhe oksigjenit", correct: true }
        ]
      },
      {
        question: "Sa modifikime alotropike i formon Karboni",
        answers: [
          { text: "5", correct: true },
          { text: "3", correct: false },
          { text: "4", correct: false },
          { text: "2", correct: false }
        ]
      },
      {
        question: "Cili komponim perfitohet me oksidimin e etanalit",
        answers: [
          { text: "Acidi metanoik", correct: false },
          { text: "Metanoli", correct: false },
          { text: "Etanoli", correct: false },
          { text: "Acidi etanoik", correct: true }
        ]
      },
      {
        question: "Aroma e pakendshme si e amoniakut te komponimet organike eshte si pasoje e pranise të ",
        answers: [
          { text: "Acideve", correct: false },
          { text: "Bazave", correct: false },
          { text: "Aminave", correct: true },
          { text: "Estereve", correct: false }
        ]
      },
      {
        question: "Masa atomike e nje berthame eshte 17. Ndersa numri i neutroneve eshte 9. Sa eshte numri i Protoneve",
        answers: [
          { text: "9", correct: false },
          { text: "8", correct: true },
          { text: "7", correct: false },
          { text: "6", correct: false }
        ]
      },
      {
        question: "Cili prej ketyre komponimeve perdoret si mjet eksploziv",
        answers: [
          { text: "benzeni", correct: false },
          { text: "tolueni", correct: false },
          { text: "nitrobenzeni", correct: true },
          { text: "trinitrotolueni", correct: false }
        ]
      },
      {
        "question": "Cili nga këto elemente i përket grupeve të metalëve alkali në tabelën periodike?",
        "answers": [
          { "text": "Kaliumi (K)", "correct": true },
          { "text": "Magnezi (Mg)", "correct": false },
          { "text": "Alumini (Al)", "correct": false },
          { "text": "Bakri (Cu)", "correct": false }
      ]  
      },
      {
        "question": "Cili nga këto përbërës është një alkool?",
        "answers": [
          { "text": "CH3COOH", "correct": false },
          { "text": "CH3CH2CH2CH3", "correct": false },
          { "text": "CH3CH2OH", "correct": true },
          { "text": "CH4", "correct": false }
        ]
      },
      {
        "question": "Cili nga këto metale është i njohur për formimin e oksideve në kontakt me ajrin?",
        "answers": [
          { "text": "Argjenti", "correct": false },
          { "text": "Hekuri", "correct": true },
          { "text": "Gjuha", "correct": false },
          { "text": "Platina", "correct": false }
        ]
      },
      {
        "question": "Cili element përdoret gjerësisht në prodhimin e baterive me litium?",
        "answers": [
          { "text": "Litiumi (Li)", "correct": true },
          { "text": "Zinku (Zn)", "correct": false },
          { "text": "Natriumi (Na)", "correct": false },
          { "text": "Kali (K)", "correct": false }
        ]
      },
      {
        "question": "Cila nga këto formula përfaqëson etanin?",
        "answers": [
          { "text": "CH3OH", "correct": false },
          { "text": "C2H4", "correct": false },
          { "text": "CH4", "correct": false },
          { "text": "CH3CH3", "correct": true },
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
  