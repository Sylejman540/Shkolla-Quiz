const questions = [
    // FIZIKË - 39 
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
      question: "Cila madhësi fizike mat sasine e rrymës elektrike që kalon përmes një përçuesi?",
      answers: [
        { text: "Tensioni (Volt)", correct: false },
        { text: "Rezistenca (Ohm)", correct: false },
        { text: "Rryma elektrike (Ampere)", correct: true },
        { text: "Fuqia elektrike (Watt)", correct: false }
      ]
    },
    {
      question: "Cili ligj përshkruan raportin midis tensionit, rrymës dhe rezistencës elektrike?",
      answers: [
        { text: "Ligji i Hookut", correct: false },
        { text: "Ligji i keplerit", correct: false },
        { text: "Ligji i Ohmit (V = I × R)", correct: true },
        { text: "Ligji i Coulombit", correct: false }
      ]
    },
    {
      question: "Cila njësi përdoret për matjen e frekuencës së valëve (p.sh. valët zanore)?",
      answers: [
        { text: "Herc (Hz)", correct: true },
        { text: "Pascal (Pa)", correct: false },
        { text: "Watt (W)", correct: false },
        { text: "Joule (J)", correct: false }
      ]
    },
    {
      question: "Cila është formula për densitetin (dendësinë) e një lënde?",
      answers: [
        { text: "d = m / v", correct: true },
        { text: "d = v / m", correct: false },
        { text: "d = m × v", correct: false },
        { text: "d = m² / v", correct: false }
      ]
    },
    {
      question: "Në çfarë kushtesh një trup noton në një lëng?",
      answers: [
        { text: "Kur dendësia e trupit është më e madhe se ajo e lëngut", correct: false },
        { text: "Kur dendësia e trupit është e barabartë me lëngun", correct: false },
        { text: "Kur dendësia e trupit është më e vogël se ajo e lëngut", correct: true },
        { text: "Varet vetëm nga temperatura e lëngut", correct: false }
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
  {
    question: "Çfarë thotë Ligji i Lencit?",
    answers: [
      { text: "Rryma e indukuar gjithmonë rrit fushën magnetike fillestare", correct: false },
      { text: "Rryma e indukuar gjithmonë e zvogëlon forcën gravitacionale", correct: false },
      { text: "Rryma e indukuar kundërshton ndryshimin e fushës magnetike që e ka shkaktuar", correct: true },
      { text: "Rryma e indukuar nuk varet nga forcat e jashtme", correct: false }
    ]
  },
  {
    question: "Çfarë është induksioni elektromagnetik?",
    answers: [
      { text: "Procesi i çlirimit të ngrohjes nga një përçues", correct: false },
      { text: "Procesi i krijimit të rrymës elektrike kur ndryshon fusha magnetike rreth një përçuesi", correct: true },
      { text: "Gjen Rrymë elektrike vetëm në rrethana vakumi", correct: false },
      { text: "Një fenomen që ndodh vetëm tek magnetët e përhershëm", correct: false }
    ]
  },
  {
    question: "Çfarë thotë Parimi i parë i termodinamikës?",
    answers: [
      { text: "Energjia e brendshme e një sistemi nuk varet nga puna dhe nxehtësia", correct: false },
      { text: "Nxehtësia nuk mund të transferohet nga trupi më i nxehtë te ai më i ftohtë", correct: false },
      { text: "Ndryshimi i energjisë së brendshme të një sistemi është i barabartë me nxehtësinë e shtuar minus punën e kryer nga sistemi", correct: true },
      { text: "Entropia e gjithësisë është gjithmonë konstante", correct: false }
    ]
  },
  {
    question: "Çfarë është rryma elektrike?",
    answers: [
      { text: "Lëvizja e dritës nëpër një përçues", correct: false },
      { text: "Lëvizja e grimcave të ngarkuara elektrikisht (elektronëve) nëpër një përçues", correct: true },
      { text: "Një formë e energjisë bërthamore", correct: false },
      { text: "Grimcat magnetike që kalojnë në boshllëk", correct: false }
    ]
  },
  {
    question: "Cili është përkufizimi i Ligjit të tretë të Njutonit?",
    answers: [
      { text: "Forca rezultante mbi një trup është e barabartë me masën e trupit shumëzuar me akseleracionin", correct: false },
      { text: "Çdo veprim ka një kundërveprim të barabartë dhe të kundërt", correct: true },
      { text: "Forca e gravitetit rritet me rritjen e shpejtësisë", correct: false },
      { text: "Inercia e trupit varet vetëm nga forca e fërkimit", correct: false }
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
  