const questions = [
  {
    question: "Cila prej organelave është përgjegjëse për prodhimin e energjisë në qelizë?",
    answers: [
      { text: "Ribosoma", correct: false },
      { text: "Lizozoma", correct: false },
      { text: "Mitokondria", correct: true },
      { text: "Retikulumi endoplazmatik", correct: false }
    ]
  },
  {
    question: "Cila molekulë është përgjegjëse për ruajtjen e informacionit gjenetik në qelizë?",
    answers: [
      { text: "ADN", correct: true },
      { text: "ARN", correct: false },
      { text: "ATP", correct: false },
      { text: "Proteinë", correct: false }
    ]
  },
  {
    question: "Cili proces ndodh në qelizat bimore për të prodhuar energji duke përdorur dritën diellore?",
    answers: [
      { text: "Respirimi qelizor", correct: false },
      { text: "Fermentimi", correct: false },
      { text: "Fotosinteza", correct: true },
      { text: "Mejoza", correct: false }
    ]
  },
  {
    question: "Cili nga përbërësit e ADN-së nuk është një bazë azotike tipike e tij?",
    answers: [
      { text: "Adenina", correct: false },
      { text: "Guanina", correct: false },
      { text: "Timina", correct: false },
      { text: "Uracili", correct: true }
    ]
  },
  {
    question: "Cila enzimë është thelbësore për replikimin e ADN-së?",
    answers: [
      { text: "DNA polimeraza", correct: true },
      { text: "Helikaza", correct: false },
      { text: "Ligaza", correct: false },
      { text: "Primaza", correct: false }
    ]
  },
  {
    question: "Cila është funksioni kryesor i qelizave të kuqe të gjakut?",
    answers: [
      { text: "Mbrojtja kundër infeksioneve", correct: false },
      { text: "Koagulimi i gjakut", correct: false },
      { text: "Rregullimi i temperaturës", correct: false },
      { text: "Transportimi i oksigjenit", correct: true }
    ]
  },
  {
    question: "Cili proces shoqëron prodhimin e qelizave të reja në indet e trupit?",
    answers: [
      { text: "Mejoza", correct: false },
      { text: "Mitoza", correct: true },
      { text: "Diferencimi qelizor", correct: false },
      { text: "Apoptoza", correct: false }
    ]
  },
  {
    question: "Cila organelë është përgjegjëse për prodhimin e proteinave?",
    answers: [
      { text: "Ribosoma", correct: true },
      { text: "Mitokondria", correct: false },
      { text: "Retikulumi endoplazmatik", correct: false },
      { text: "Lizozoma", correct: false }
    ]
  },
  {
    question: "Cila është njësia themelore e jetës?",
    answers: [
      { text: "Organizmi", correct: false },
      { text: "Indi", correct: false },
      { text: "Qeliza", correct: true },
      { text: "Organet", correct: false }
    ]
  },
  {
    question: "Cila strukturë në qelizat shtazore është përgjegjëse për ruajtjen e mjedisit të brendshëm të qelizës?",
    answers: [
      { text: "Citoskeleti", correct: false },
      { text: "Bërthama", correct: false },
      { text: "Membrana qelizore", correct: true },
      { text: "Lizozoma", correct: false }
    ]
  },
  {
    question: "Çfarë është fotosinteza?",
    answers: [
      { text: "Procesi i thyerjes së sheqerit në energji", correct: false },
      { text: "Procesi i përthithjes së ujit nga rrënjët", correct: false },
      { text: "Procesi i shpërndarjes së lëndëve ushqyese në bimë", correct: false },
      { text: "Procesi nëpërmjet të cilit bimët përdorin dritën diellore për të prodhuar ushqim", correct: true }
    ]
  },
  {
    question: "Cili pigment gjelbër ndihmon në fotosintezë?",
    answers: [
      { text: "Karotenoidi", correct: false },
      { text: "Antosianina", correct: false },
      { text: "Klorofili", correct: true },
      { text: "Xantofili", correct: false }
    ]
  },
  {
    question: "Cili është ndryshimi kryesor midis qelizave prokariotike dhe eukariotike?",
    answers: [
      { text: "Qelizat prokariotike janë më të mëdha se ato eukariotike", correct: false },
      { text: "Vetëm qelizat eukariotike kanë membranë qelizore", correct: false },
      { text: "Qelizat eukariotike kanë bërthamë të vërtetë, ndërsa prokariotike nuk kanë", correct: true },
      { text: "Qelizat prokariotike kanë më shumë organela se ato eukariotike", correct: false }
    ]
  },
  {
    question: "Cili organ i sistemit tretës është përgjegjës për tretjen kryesore të ushqimit?",
    answers: [
      { text: "Zorrët", correct: false },
      { text: "Mjelma", correct: false },
      { text: "Stomaku", correct: true },
      { text: "Pankreasi", correct: false }
    ]
  },
  {
    question: "Cili është funksioni kryesor i sistemit imunitar?",
    answers: [
      { text: "Mbrojtja e organizmit kundër sëmundjeve dhe infeksioneve", correct: true },
      { text: "Transportimi i oksigjenit në qeliza", correct: false },
      { text: "Regullimi i temperaturës së trupit", correct: false },
      { text: "Përthithja e lëndëve ushqyese", correct: false }
    ]
  },
  {
    question: "Çfarë përfaqëson biodiversiteti?",
    answers: [
      { text: "Numri i qelizave në një organizëm", correct: false },
      { text: "Larmia e jetës dhe organizmave të ndryshëm në mjedis", correct: true },
      { text: "Shkalla e ndotjes në natyrë", correct: false },
      { text: "Procesi i rritjes së bimëve", correct: false }
    ]
  },
  {
    question: "Çfarë është osmoza?",
    answers: [
      { text: "Lëvizja e ujit nga një zonë me koncentrim të lartë te zona me koncentrim të ulët", correct: false },
      { text: "Procesi i tretjes së lëndëve ushqyese", correct: false },
      { text: "Lëvizja e ujit përmes membranës nga një zonë me përqendrim të ulët të tretësirës drejt një zone me përqendrim të lartë të tretësirës", correct: true },
      { text: "Lëvizja e substancave të solituduara nëpër membranë", correct: false }
    ]
  },
  {
    question: "Çfarë është një ekosistem?",
    answers: [
      { text: "Një grup i qelizave që funksionojnë së bashku", correct: false },
      { text: "Procesi i prodhimit të energjisë nga bimët", correct: false },
      { text: "Një komunitet i organizmave të gjallë që bashkëveprojnë me mjedisin e tyre fizik", correct: true },
      { text: "Një lloj popullate që jeton në një zonë të caktuar", correct: false }
    ]
  },
  {
    question: "Cili faktor mjedisor ndikon më shumë në rritjen e bimëve?",
    answers: [
      { text: "Temperatura e ulët", correct: false },
      { text: "Mungesa e ujit", correct: false },
      { text: "Niveli i lartë i ndotjes", correct: false },
      { text: "Drita diellore", correct: true }
    ]
  },
  {
    question: "Cili është funksioni kryesor i qelizave nervore?",
    answers: [
      { text: "Dërgimi i impulsit nervor nëpër trup", correct: true },
      { text: "Prodhimi i energjisë për qelizat", correct: false },
      { text: "Mbajtja e materialit gjenetik", correct: false },
      { text: "Ruajtja e lëndëve ushqyese", correct: false }
    ]
  },
  {
    question: "Çfarë janë parazitët?",
    answers: [
      { text: "Organizma që prodhojnë energji nga drita diellore", correct: false },
      { text: "Organizma që jetojnë në ose mbi një organizëm tjetër dhe i shkaktojnë dëme", correct: true },
      { text: "Organizma që janë pjesë e simbiozës reciproke", correct: false },
      { text: "Organizma që rriten në mjedise të pasura me lëndë ushqyese", correct: false }
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
