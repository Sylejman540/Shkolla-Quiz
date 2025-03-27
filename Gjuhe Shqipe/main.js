const questions = [
  // GJUHË SHQIPE - 23 pyetje
  {
    question: "Cilat janë përemrat lidhorë?",
    answers: [
      { text: "Unë, ti, ai", correct: false },
      { text: "Vetvetja", correct: false },
      { text: "Që, i cili, çka", correct: true },
      { text: "Kush, kë", correct: false }
    ]
  },
  {
    question: "Dritani u ngrit papritur. 'Papritur' është...",
    answers: [
      { text: "Ndajfolje kohe", correct: false },
      { text: "Ndajfolje mënyre", correct: true },
      { text: "Ndajfolje vendi", correct: false },
      { text: "Ndajfolje sasie", correct: false }
    ]
  },
  {
    question: "Si ndahen parafjalët?",
    answers: [
      { text: "Thjeshta-përngjitura", correct: true },
      { text: "Thjeshta-përbëra", correct: false },
      { text: "Thjeshta-përbyllëse", correct: false },
      { text: "Përbëra-përmbyllëse", correct: false }
    ]
  },
  {
    question: "Çfarë janë pjesëzat?",
    answers: [
      { text: "Fjalë që nuk plotësojnë kuptimin e një teksti", correct: false },
      { text: "Fjalë që plotësojnë kuptimin e një fjale", correct: true },
      { text: "Fjalë që nuk plotësojnë kuptimin e një fjale", correct: false },
      { text: "Fjalë që plotësojnë kuptimin e një teksti", correct: false }
    ]
  },
  {
    question: "Zgjedhimet e emrave janë...",
    answers: [
      { text: "Mashkullore -i", correct: true },
      { text: "Femërore -e", correct: false },
      { text: "Mashkullore -u", correct: true },
      { text: "Femërore -a", correct: true }
    ]
  },
  {
    question: "Cilat janë kohët e mënyrës dëshirore (foljet)?",
    answers: [
      { text: "E tashme, e ardhme", correct: false },
      { text: "E ardhme, e kryer", correct: false },
      { text: "E kryer, e kryer e thjeshtë", correct: false },
      { text: "E tashme, e kryer", correct: true }
    ]
  },
  {
    question: "Cilat janë të sakta?",
    answers: [
      { text: "Paskajorja - larë", correct: true },
      { text: "Paskajorja - duke larë", correct: false },
      { text: "Pjesorja - larë", correct: true },
      { text: "Përcjellorja - duke larë", correct: true }
    ]
  },
  {
    question: "Letërsi: 'E kuqe si molla, me vështrim posi shkëndijë'. Cila figurë letrare është përdorur?",
    answers: [
      { text: "Hiperbola", correct: false },
      { text: "Asonanca", correct: false },
      { text: "Litota", correct: false },
      { text: "Krahasim", correct: true }
    ]
  },
  {
    question: "‘Fëmija pa nënë, si nata pa hënë’. Cila figurë letrare është përdorur?",
    answers: [
      { text: "Personifikim", correct: false },
      { text: "Apostrofa", correct: false },
      { text: "Apokopa", correct: false },
      { text: "Krahasim", correct: true }
    ]
  },
  {
    question: "Cilat janë llojet e dramës?",
    answers: [
      { text: "Tragjedi", correct: true },
      { text: "Komedi", correct: false },
      { text: "Monodramë", correct: false },
      { text: "Trillim", correct: false }
    ]
  },
  {
    question: "Cila nga këto shprehje është një fjalë lidhëse?",
    answers: [
      { text: "vetëm", correct: false },
      { text: "por", correct: false },
      { text: "ose", correct: false },
      { text: "dhe", correct: true }
    ]
  },
  {
    question: "Cila është vepra e parë letrare artistike e shkruar në gjuhën shqipe?",
    answers: [
      { text: "Gjella e Shën Merisë së Virgjër – Jul Variboba", correct: true },
      { text: "Meshari i Gjon Buzukut", correct: false },
      { text: "Të mësuem shqip", correct: false },
      { text: "Gjella e Shën Merisë së Virgjër – Pjetër Budi", correct: false }
    ]
  },
  {
    question: "Kush është vlerësuar si një nga autorët më realistë të letërsisë botërore?",
    answers: [
      { text: "Xhorxh Gordon Bajroni", correct: false },
      { text: "Homeri", correct: false },
      { text: "Honoré de Balzac", correct: true },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "Në cilën shkallë është mbiemri 'i mirë'?",
    answers: [
      { text: "Pohore", correct: true },
      { text: "Sipërore", correct: false },
      { text: "Krahasore", correct: false },
      { text: "Krahasore e sipërisë", correct: false }
    ]
  },
  {
    question: "Foljet që i takojnë zgjedhimit të parë janë?",
    answers: [
      { text: "Dal, thërras, trokas", correct: false },
      { text: "Kërcej, mbroj, shkruaj", correct: true },
      { text: "Rri, pi, fle, ha", correct: false },
      { text: "Hapa, fola, mbylla", correct: false }
    ]
  },
  {
    question: "Dallo foljet në diatezën veprore:",
    answers: [
      { text: "Lahem, fshihem, mësohem", correct: false },
      { text: "Jam larë, jam mësuar, jam fshehur", correct: false },
      { text: "Laj, pastroj, fshij", correct: true },
      { text: "U lava, u pastrova, u mësova", correct: false }
    ]
  },
  {
    question: "Forma: 'duke lexuar' është e pashtjelluar...",
    answers: [
      { text: "Pjesorja", correct: false },
      { text: "Përcjellorja", correct: true },
      { text: "Paskajore", correct: false },
      { text: "Mohore", correct: false }
    ]
  },
  {
    question: "Vendos fjalët: baba, xhaxha, vëlla në rasën kallëzore:",
    answers: [
      { text: "Babai, xhaxhai, vëllai", correct: false },
      { text: "Babait, xhaxhait, vëllait", correct: false },
      { text: "I/e babait, i/e xhaxhait, i/e vëllait", correct: false },
      { text: "Babanë, xhaxhanë, vëllanë", correct: true }
    ]
  },
  {
    question: "Lidhe foljen me përemrin vetor përkatës: (do të thërriste)",
    answers: [
      { text: "Unë", correct: false },
      { text: "Ti", correct: false },
      { text: "Ai/ajo", correct: true },
      { text: "Ne", correct: false }
    ]
  },
  {
    question: "Sinonimi i fjalës 'derë' është:",
    answers: [
      { text: "Dyer", correct: false },
      { text: "Zgjidhje", correct: false },
      { text: "Barrë", correct: false },
      { text: "Portë", correct: true }
    ]
  },
  {
    question: "Shprehja 'akull dhe zjarr' është:",
    answers: [
      { text: "Sinonim", correct: false },
      { text: "Antonim", correct: true },
      { text: "Homonim", correct: false },
      { text: "Krahasim", correct: false }
    ]
  },
  {
    question: "Në pjesën në kllapa kemi: Ai punonte (fuqishëm)",
    answers: [
      { text: "Folje", correct: false },
      { text: "Mbiemër", correct: false },
      { text: "Ndajfolje", correct: true },
      { text: "Pasthirrmë", correct: false }
    ]
  },
  {
    question: "Pasthirrma në fjalinë 'Lamtumirë, o vendi im' është:",
    answers: [
      { text: "Vendi im", correct: false },
      { text: "Lamtumirë", correct: true },
      { text: "Vendi", correct: false },
      { text: "Im", correct: false }
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
  