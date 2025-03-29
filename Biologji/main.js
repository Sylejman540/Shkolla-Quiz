const questions = [
  // BIOLOGJI - 36
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
    question: "Cila është funksioni kryesor i qelizave të kuqe të gjakut?",
    answers: [
      { text: "Mbrojtja kundër infeksioneve", correct: false },
      { text: "Koagulimi i gjakut", correct: false },
      { text: "Rregullimi i temperaturës", correct: false },
      { text: "Transportimi i oksigjenit", correct: true }
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
    question: "Cilat janë qelizat seksuale te njeriu?",
    answers: [
      { text: "Spermatozoidet dhe vezët", correct: true },
      { text: "Qelizat e kuqe dhe të bardha të gjakut", correct: false },
      { text: "Neuronet dhe muskujt", correct: false },
      { text: "Qelizat e lëkurës dhe të flokëve", correct: false }
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
  },
{
  question: "Aborti është:",
  answers: [
    { text: "Një sëmundje e trashëgueshme", correct: false },
    { text: "Ndërprerja e shtatzënisë para lindjes", correct: true },
    { text: "Procesi i rritjes së fetusit", correct: false },
    { text: "Faza e fundit e zhvillimit embrional", correct: false }
  ]
},
{
  question: "Cili është roli i testiseve te meshkujt?",
  answers: [
    { text: "Prodhimi i qelizave të bardha", correct: false },
    { text: "Prodhimi i spermatozoideve", correct: true },
    { text: "Prodhimi i hormoneve femërore", correct: false },
    { text: "Magazinimi i gjakut", correct: false }
  ]
},
{
  question: "Cila është funksioni i sistemit të frymëmarrjes te njeriu?",
  answers: [
    { text: "Qarkullimi i gjakut", correct: false },
    { text: "Tretja e ushqimit", correct: false },
    { text: "Furnizimi i trupit me oksigjen dhe largimi i dioksidit të karbonit", correct: true },
    { text: "Koagulimi i gjakut", correct: false }
  ]
},
{
  question: "Cili është organi kryesor i sistemit nervor?",
  answers: [
    { text: "Zemra", correct: false },
    { text: "Stomaku", correct: false },
    { text: "Truri", correct: true },
    { text: "Mushkëritë", correct: false }
  ]
},
{
  question: "Çfarë janë fosilet?",
  answers: [
    { text: "Kafshë të gjalla që gjenden thellë në tokë", correct: false },
    { text: "Mbetjet ose gjurmët e organizmave të lashtë të ruajtura në shkëmbinj", correct: true },
    { text: "Lëndë djegëse të nxjerra nga toka", correct: false },
    { text: "Organizma që jetojnë vetëm në oqean", correct: false }
  ]
},
{
  question: "Si ushqehen bimët?",
  answers: [
    { text: "Duke gjuajtur organizma më të vegjël", correct: false },
    { text: "Duke thithur ushqim përmes rrënjëve në formë të gatshme", correct: false },
    { text: "Duke prodhuar vetë lëndë ushqyese përmes fotosintezës", correct: true },
    { text: "Duke përthithur oksigjen dhe e shndërruar në sheqerna", correct: false }
  ]
},
{
  question: "Cilat janë përbërësit kryesorë të sistemit të qarkullimit të gjakut?",
  answers: [
    { text: "Zemra dhe enët e gjakut", correct: true },
    { text: "Mushkëritë dhe stomaku", correct: false },
    { text: "Truri dhe palca kurrizore", correct: false },
    { text: "Mëlçia dhe pankreasi", correct: false }
  ]
},
{
  question: "Ku ndodh pllënimi natyror te njerëzit?",
  answers: [
    { text: "Në mitër", correct: false },
    { text: "Në vezore", correct: false },
    { text: "Në tubat fallopiane", correct: true },
    { text: "Në vaginë", correct: false }
  ]
},
{
  question: "Çfarë është pllënimi?",
  answers: [
    { text: "Procesi i formimit të qelizave seksuale", correct: false },
    { text: "Bashkimi i spermatozoidit me vezën", correct: true },
    { text: "Formimi i fetusit", correct: false },
    { text: "Lindja e foshnjës", correct: false }
  ]
},
{
  question: "Cila pjesë e trupit filtron gjakun dhe prodhon urinën?",
  answers: [
    { text: "Stomaku", correct: false },
    { text: "Zemra", correct: false },
    { text: "Veshkat", correct: true },
    { text: "Zorrët", correct: false }
  ]
},
{
  question: "Cili është roli i mëlçisë në trup?",
  answers: [
    { text: "Pompon gjakun", correct: false },
    { text: "Prodhon hormone", correct: false },
    { text: "Pastron gjakun nga toksinat dhe prodhon lëngun e tëmthit", correct: true },
    { text: "Ndihmon në frymëmarrje", correct: false }
  ]
},
{
  question: "Cili hormon është përgjegjës për uljen e nivelit të sheqerit në gjak?",
  answers: [
    { text: "Insulina", correct: true },
    { text: "Glukagoni", correct: false },
    { text: "Adrenalina", correct: false },
    { text: "Tiroksina", correct: false }
  ]
},
{
  question: "Cila strukturë i jep qelizës bimore mbështetje dhe formë shtesë?",
  answers: [
    { text: "Muri qelizor", correct: true },
    { text: "Retikulumi endoplazmatik", correct: false },
    { text: "Membrana qelizore", correct: false },
    { text: "Lizozoma", correct: false }
  ]
},
{
  question: "Ku fillon tretja kimike e karbohidrateve te njeriu?",
  answers: [
    { text: "Në gojë", correct: true },
    { text: "Në stomak", correct: false },
    { text: "Në zorrën e hollë", correct: false },
    { text: "Në mëlçi", correct: false }
  ]
},
{
  question: "Cilat qeliza të gjakut luajnë rol kryesor në mbrojtjen kundër infeksioneve?",
  answers: [
    { text: "Eritrocitet (qelizat e kuqe)", correct: false },
    { text: "Leukocitet (qelizat e bardha)", correct: true },
    { text: "Trombocitet", correct: false },
    { text: "Eritropoietina", correct: false }
  ]
},
{
  question: "Cili mineral është thelbësor për ndërtimin dhe fortësinë e kockave?",
  answers: [
    { text: "Hekuri", correct: false },
    { text: "Kalciumi", correct: true },
    { text: "Jodi", correct: false },
    { text: "Natriumi", correct: false }
  ]
},
{
  question: "Çfarë janë gjenet?",
  answers: [
    { text: "Struktura bazë e qelizës që prodhon energji", correct: false },
    { text: "Njësia themelore e trashëgimisë gjenetike, përbërë nga sekuenca të ADN-së", correct: true },
    { text: "Organelat që ndihmojnë në fotosintezë", correct: false },
    { text: "Segmentet e ARN-së që formojnë membranën qelizore", correct: false }
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
