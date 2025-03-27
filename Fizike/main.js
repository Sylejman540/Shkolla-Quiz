const questions = [
    // FIZIKË - 29 pyetje
    {
      question: "Cili është një shembull i energjisë kinetike?",
      answers: [
        { text: "Një libër në raft", correct: false },
        { text: "Një makinë në lëvizje", correct: true },
        { text: "Një statujë", correct: false },
        { text: "Një pemë", correct: false }
      ]
    },
    {
      question: "Cila është njësia për matjen e forcës?",
      answers: [
        { text: "Metër", correct: false },
        { text: "Sekondë", correct: false },
        { text: "Kilogram", correct: false },
        { text: "Newton (N)", correct: true }
      ]
    },
    {
      question: "Cili proces përshkruan ndryshimin e energjisë nga një formë në tjetrën?",
      answers: [
        { text: "Ruajtja e energjisë", correct: false },
        { text: "Transformimi i energjisë", correct: true },
        { text: "Përhapja e energjisë", correct: false },
        { text: "Krijimi i energjisë", correct: false }
      ]
    },
    {
      question: "Çfarë njihet si punë në fizikë?",
      answers: [
        { text: "Kur një objekt qëndron në vend", correct: false },
        { text: "Kur një objekt lëviz pa forcë", correct: false },
        { text: "Kur një forcë vepron mbi një objekt dhe e zhvendos atë", correct: true },
        { text: "Kur një objekt ngrohet", correct: false }
      ]
    },
    {
      question: "Cila është njësia për matjen e energjisë?",
      answers: [
        { text: "Watt", correct: false },
        { text: "Newton", correct: false },
        { text: "Xhaul", correct: true },
        { text: "Pascal", correct: false }
      ]
    },
    {
      question: "Cili nga këto është një shembull i forcës gravitacionale?",
      answers: [
        { text: "Lëvizja e një automjeti", correct: false },
        { text: "Rrëshqitja e një objekti drejt tokës", correct: true },
        { text: "Ngritja e një libri", correct: false },
        { text: "Lëvizja e ajrit", correct: false }
      ]
    },
    {
      question: "Si përshkruhet shpejtësia në fizikë?",
      answers: [
        { text: "Distanca e kaluar në njësi kohore", correct: true },
        { text: "Fusha e veprimit të forcës", correct: false },
        { text: "Fusha e energjisë", correct: false },
        { text: "Nuk ka të bëjë me kohën", correct: false }
      ]
    },
    {
      question: "Cila është njësia standarde për matjen e shpejtësisë?",
      answers: [
        { text: "km/h", correct: false },
        { text: "m/min", correct: false },
        { text: "kg/s", correct: false },
        { text: "m/s", correct: true }
      ]
    },
    {
      question: "Cili proces ndodh kur një objekt ndalon lëvizjen për shkak të forcave të kundërta?",
      answers: [
        { text: "Propulsioni", correct: false },
        { text: "Ngritja", correct: false },
        { text: "Frenimi", correct: true },
        { text: "Rrëshqitja", correct: false }
      ]
    },
    {
      question: "Çfarë njihet si temperatura në fizikë?",
      answers: [
        { text: "Matja e shpejtësisë së një objekti", correct: false },
        { text: "Matja e nxehtësisë ose ftohjes së një objekti", correct: true },
        { text: "Matja e distancës", correct: false },
        { text: "Matja e forcës", correct: false }
      ]
    },
    {
      question: "Cili është burimi kryesor i energjisë diellore?",
      answers: [
        { text: "Hëna", correct: false },
        { text: "Shkëndija", correct: false },
        { text: "Dielli", correct: true },
        { text: "Uji", correct: false }
      ]
    },
    {
      question: "Cili instrument përdoret për të matur temperaturën?",
      answers: [
        { text: "Barometri", correct: false },
        { text: "Termometri", correct: true },
        { text: "Anemometri", correct: false },
        { text: "Higrometri", correct: false }
      ]
    },
    {
      question: "Çfarë njihet si një valë në fizikë?",
      answers: [
        { text: "Lëvizje e rrethit", correct: false },
        { text: "Një forcë statike", correct: false },
        { text: "Lëvizje periodike e energjisë", correct: true },
        { text: "Një lloj transporti", correct: false }
      ]
    },
    {
      question: "Cili term përdoret për materialet që kthehen në formën origjinale pas forcimit?",
      answers: [
        { text: "Elasticiteti", correct: true },
        { text: "Plasticiteti", correct: false },
        { text: "Dukshmëria", correct: false },
        { text: "Vëndosja", correct: false }
      ]
    },
    {
      question: "Cili proces përfshin transferimin e nxehtësisë përmes lëvizjes së lëngjeve?",
      answers: [
        { text: "Konduksioni", correct: false },
        { text: "Radiacioni", correct: false },
        { text: "Konveksioni", correct: true },
        { text: "Izolimi", correct: false }
      ]
    },
    {
      question: "Cili është një shembull i energjisë potenciale?",
      answers: [
        { text: "Një makinë në lëvizje", correct: false },
        { text: "Një dritë e ndezur", correct: false },
        { text: "Një gur në një kodër", correct: true },
        { text: "Një person që ecën", correct: false }
      ]
    },
    {
      "question": "Cili parim shpjegon tendencën e një objekti për të qëndruar në gjendjen e tij aktuale pa ndërhyrjen e forcave të jashtme?",
      "answers": [
        { "text": "Ligji i dytë i Newtonit", "correct": false },
        { "text": "Ligji i tretë i Newtonit", "correct": false },
        { "text": "Ligji i parë i Newtonit", "correct": true },
        { "text": "Parimi i ruajtjes së energjisë", "correct": false }
      ]
    },
    {
      "question": "Cila përshkruan më saktë forca e fërkimit midis dy sipërfaqeve?",
      "answers": [
        { "text": "Ndikon nga materiali dhe forca normale, duke kundërvënë lëvizjes", "correct": true },
        { "text": "Rritet me shpejtësinë e lëvizjes", "correct": false },
        { "text": "Varet vetëm nga masat e objekteve", "correct": false },
        { "text": "Ndikon vetëm në objekte në rrotullim", "correct": false }
      ]
    },
    {
      "question": "Cila formulë përfaqëson punën e kryer kur një forcë konstate vepron në një objekt që zhvendos një distancë të caktuar?",
      "answers": [
        { "text": "W = F × d", "correct": true },
        { "text": "W = m × a", "correct": false },
        { "text": "W = F / d", "correct": false },
        { "text": "W = d / F", "correct": false }
      ]
    },
    {
      "question": "Çfarë nënkupton akseleracioni në lëvizje?",
      "answers": [
        { "text": "Shpejtësia momentale e një objekti", "correct": false },
        { "text": "Distanca e kaluar në njësi kohore", "correct": false },
        { "text": "Ndryshimi i shpejtësisë me kalimin e kohës", "correct": true },
        { "text": "Forca që vepron mbi objektin", "correct": false }
      ]
    },
    {
      "question": "Cili është koncepti i momentit të forcës?",
      "answers": [
        { "text": "Shpejtësia e rrotullimit të një objekti", "correct": false },
        { "text": "Ndryshimi i energjisë me kohë", "correct": false },
        { "text": "Forca totale që vepron mbi një objekt", "correct": false },
        { "text": "Produkt i forcës dhe distancës nga pika e pivotit", "correct": true },
      ]
    },
    {
      "question": "Cili koncept fiziko-matematikor thekson se energjia nuk mund të krijohet apo shkatërrohet, por vetëm transformohet?",
      "answers": [
        { "text": "Ligji i fërkimit", "correct": false },
        { "text": "Ligji i inercisë", "correct": false },
        { "text": "Parimi i ruajtjes së energjisë", "correct": true },
        { "text": "Ligji i akseleracionit", "correct": false }
      ]
    },
    {
      "question": "Çfarë ndodh me energjinë potenciale kur një objekt bien nga një lartësi më të madhe në një lartësi më të ulët?",
      "answers": [
        { "text": "Ajo rritet për shkak të forcës së gravitetit", "correct": false },
        { "text": "Ajo zhduket plotësisht", "correct": false },
        { "text": "Ajo shndërrohet në energji kinetike", "correct": true },
        { "text": "Ajo shndërrohet në nxehtësi pa asgjë tjetër", "correct": false }
      ]
    },
    {
      "question": "Cila madhësi fizike mat sasinë e nxehtësisë së një objekti?",
      "answers": [
        { "text": "Energjia kinetike", "correct": false },
        { "text": "Forca", "correct": false },
        { "text": "Presioni", "correct": false },
        { "text": "Temperatura", "correct": true },
      ]
    },
    {
      "question": "Çfarë përshkruan refraksioni i dritës?",
      "answers": [
        { "text": "Ndryshimi i drejtimit të dritës kur kalon nga një mjedis në një tjetër", "correct": true },
        { "text": "Shndërrimin e dritës në nxehtësi", "correct": false },
        { "text": "Përszëritjen e dritës në ngjyra të ndryshme", "correct": false },
        { "text": "Thyerjen e dritës në energji mekanike", "correct": false }
      ]
    },
    {
      "question": "Cili prej këtyre përfaqëson një shembull të një situate ku inercia luan një rol të rëndësishëm?",
      "answers": [
        { "text": "Një makinë që po frenon dhe po ndalon gradualisht", "correct": false },
        { "text": "Një aeroplan që rrit shpejtësinë në pistë", "correct": false },
        { "text": "Një molla që shtrydhet kur aplikohen forca", "correct": false },
        { "text": "Një top që vazhdon të lëvizë në vijë të drejtë pa ndikim të jashtëm", "correct": true }
      ]
    },
    {
      "question": "Cili nga këto është një shembull i një pajisje elektronike që përdor transistorë për funksionim?",
      "answers": [
        { "text": "Kondensatori", "correct": false },
        { "text": "Amplifikatori", "correct": true },
        { "text": "Rezistenca", "correct": false },
        { "text": "Bateria", "correct": false }
      ]
    },
    {
      "question": "Cili është roli kryesor i transistorëve në qarkun elektronik?",
      "answers": [
        { "text": "Ruajnë energji", "correct": false },
        { "text": "Shkarkojnë nxehtësi", "correct": false },
        { "text": "Amplifikojnë ose ndalojnë rrjedhën e rrymës", "correct": true },
        { "text": "Gjenerojnë dritë", "correct": false }
      ]
    },
    {
      "question": "Çfarë nënkupton zmadhimi optik në pajisje si mikroskopët dhe lupat?",
      "answers": [
        { "text": "Rritja e madhësisë së imazhit të objektit", "correct": true },
        { "text": "Ulja e distancës midis objektit dhe vëzhguesit", "correct": false },
        { "text": "Përmirësimi i kontrastit të imazhit", "correct": false },
        { "text": "Zhvillimi i ngjyrave të reja", "correct": false }
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
  