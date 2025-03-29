const questions = [
  // GJUHË SHQIPE - 41
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
    question: "Cilat forma janë të sakta në gjuhën standarde shqipe?",
    answers: [
      { text: "Paskajorja = me larë", correct: true },
      { text: "Pjesorja = larë", correct: true },
      { text: "Paskajorja = larë", correct: false },
      { text: "Përcjellorja = duke larë", correct: true },
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
      { text: "Komedi", correct: true },
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
    question: "Cila konsiderohet vepra e parë me karakter artistik (poetik) e shkruar në gjuhën shqipe?",
    answers: [
      { text: "Gjella e Shën Merisë së Virgjër – Jul Variboba (1762)", correct: true },
      { text: "Meshari – Gjon Buzuku (1555)", correct: false },
      { text: "Të mësuem shqip", correct: false },
      { text: "Lufta e shqiptarëve", correct: false }
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
    question: "Vendos fjalët: baba, xhaxha, vëlla në rasën kallëzore, trajtën e shquar, njëjës:",
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
  },
  {
    question: "Çfarë studion leksikologjia?",
    answers: [
      { text: "Ndërtimin e fjalive", correct: false },
      { text: "Zhvillimin historik të gjuhës", correct: false },
      { text: "Fjalët dhe kuptimin e tyre", correct: true },
      { text: "Zanoret dhe bashkëtingëlloret", correct: false }
    ]
  },
  {
    question: "Cila nga këto fjalë është fjalëformim me prapashtesë?",
    answers: [
      { text: "Bukë", correct: false },
      { text: "Bukor", correct: false },
      { text: "Bukorësh", correct: true },
      { text: "Bukë e bardhë", correct: false }
    ]
  },
  {
    question: "Sinonim i fjalës 'i bukur' është:",
    answers: [
      { text: "I mirë", correct: false },
      { text: "I lezetshëm", correct: true },
      { text: "I gjatë", correct: false },
      { text: "I ri", correct: false }
    ]
  },
  {
    question: "Cila nga fjalët ka kuptim të shumëfishtë (polisemik)?",
    answers: [
      { text: "Dritë", correct: true },
      { text: "Këpucë", correct: false },
      { text: "Rrugë", correct: false },
      { text: "Tryezë", correct: false }
    ]
  },
  {
    question: "Antonimi i fjalës 'i trashë' është:",
    answers: [
      { text: "I dobët", correct: false },
      { text: "I hollë", correct: true },
      { text: "I ngushtë", correct: false },
      { text: "I shkurtër", correct: false }
    ]
  },

  // Sintaksë
  {
    question: "Çfarë është fjalia e thjeshtë?",
    answers: [
      { text: "Një fjali pa folje", correct: false },
      { text: "Fjali me një folje dhe një ide të plotë", correct: true },
      { text: "Fjali që përmban shumë togfjalësha", correct: false },
      { text: "Fjali me dy apo më shumë folje", correct: false }
    ]
  },
  {
    question: "Cili është funksioni i kallëzuesit në fjali?",
    answers: [
      { text: "Tregon veprimin ose gjendjen", correct: true },
      { text: "Zëvendëson emrin", correct: false },
      { text: "Shpreh vendin", correct: false },
      { text: "Lidh fjalitë", correct: false }
    ]
  },
  {
    question: "Cili është rendi i zakonshëm i fjalëve në gjuhën shqipe?",
    answers: [
      { text: "Emër – folje – ndajfolje", correct: false },
      { text: "Kryefjalë – kallëzues – kundrinë", correct: true },
      { text: "Ndajfolje – emër – folje", correct: false },
      { text: "Kallëzues – kryefjalë – mbiemër", correct: false }
    ]
  },
  {
    question: "Cila pjesë e fjalës është kallëzuesi në fjali?",
    answers: [
      { text: "Mbiemri", correct: false },
      { text: "Ndajfolja", correct: false },
      { text: "Folja", correct: true },
      { text: "Parafjala", correct: false }
    ]
  },
  {
    question: "Në cilën rasë është fjala 'nxënësit' në fjali: 'Ia dhashë nxënësit librin'?",
    answers: [
      { text: "Në emërore", correct: false },
      { text: "Në kallëzore", correct: false },
      { text: "Në dhanore", correct: true },
      { text: "Në rrjedhore", correct: false }
    ]
  },
  {
    question: "Fjalia 'Ai lexon një libër' është fjali:",
    answers: [
      { text: "E përbërë", correct: false },
      { text: "Pyetëse", correct: false },
      { text: "Mohore", correct: false },
      { text: "Dëftore e thjeshtë", correct: true }
    ]
  },

  // Morfologji
  {
    question: "Çfarë studion morfologjia?",
    answers: [
      { text: "Strukturën e fjalisë", correct: false },
      { text: "Zhvillimin e kuptimeve të fjalëve", correct: false },
      { text: "Ndërtimin dhe format gramatikore të fjalëve", correct: true },
      { text: "Historinë e gjuhës", correct: false }
    ]
  },
  {
    question: "Cila është një pjesë e ndryshueshme e ligjëratës?",
    answers: [
      { text: "Parafjala", correct: false },
      { text: "Ndajfolja", correct: false },
      { text: "Emri", correct: true },
      { text: "Pjesëza", correct: false }
    ]
  },
  {
    question: "Fjala 'shkollave' është në trajtën:",
    answers: [
      { text: "E pashquar, njëjës", correct: false },
      { text: "E shquar, shumës", correct: true },
      { text: "E shquar, njëjës", correct: false },
      { text: "E pashquar, shumës", correct: false }
    ]
  },
    // Meshari & Trashëgimi
    {
      question: "Cila është rëndësia e librit 'Meshari' i Gjon Buzukut?",
      answers: [
        { text: "Ishte libri i parë i përkthyer në greqisht", correct: false },
        { text: "Është libri më i lexuar në Shqipëri", correct: false },
        { text: "Është libri i parë i njohur i shkruar në gjuhën shqipe", correct: true },
        { text: "Është një përmbledhje poemash", correct: false }
      ]
    },
    {
      question: "Në cilin vit u zbulua 'Meshari' i Gjon Buzukut?",
      answers: [
        { text: "1555", correct: false },
        { text: "1740", correct: false },
        { text: "1909", correct: true },
        { text: "1937", correct: false }
      ]
    },

  // Dialekte
  {
    question: "Cilat janë dy dialektet kryesore të shqipes?",
    answers: [
      { text: "Toskërishtja dhe gegërishtja", correct: true },
      { text: "Shqipja standarde dhe arbërishtja", correct: false },
      { text: "Kosovarja dhe elbasanishtja", correct: false },
      { text: "Dialekti i veriut dhe i jugut", correct: false }
    ]
  },
  {
    question: "Kush e flet dialektin gegë?",
    answers: [
      { text: "Banorët e Shqipërisë së Jugut", correct: false },
      { text: "Banorët e Kosovës, Malësisë dhe Shqipërisë së Veriut", correct: true },
      { text: "Banorët e Maqedonisë", correct: false },
      { text: "Të gjithë shqiptarët", correct: false }
    ]
  },
  {
    question: "Në çfarë alfabeti është shkruar 'Meshari'?",
    answers: [
      { text: "Alfabeti i ri latin", correct: false },
      { text: "Alfabeti grek", correct: false },
      { text: "Alfabeti cirilik", correct: false },
      { text: "Alfabeti latin i përzier", correct: true }
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
  