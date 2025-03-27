
const questions = [
    // HISTORI - 23 pyetje
    {
      question: "Cili ishte themeluesi i Pavarësisë së Shqipërisë?",
      answers: [
        { text: "Enver Hoxha", correct: false },
        { text: "Skënderbeu", correct: false },
        { text: "Ismail Qemali", correct: true },
        { text: "Fan Noli", correct: false }
      ]
    },
    {
      question: "Në cilin shekull filloi Rilindja Kombëtare Shqiptare?",
      answers: [
        { text: "Shekulli i XVIII", correct: false },
        { text: "Shekulli i XVII", correct: false },
        { text: "Shekulli i XIX", correct: true },
        { text: "Shekulli i XX", correct: false }
      ]
    },
    {
      question: "Perandori i cili zgjeroi me se shumti territorin e Perandorise Osmane ishte",
      answers: [
        { text: " Sylejmani II", correct: false },
        { text: "Selimi I", correct: false },
        { text: "Sylejmani I", correct: true },
        { text: "Selimi II", correct: false }
      ]
    },
    {
      question: "Cka do te thote FUHRER",
      answers: [
        { text: "Mbret", correct: false },
        { text: "Diktator", correct: false },
        { text: "Lider", correct: true },
        { text: "Perandor", correct: false }
      ]
    },
    {
      question: "Kush ishte perandor ne Japoni gjate luftes se dyte boterore",
      answers: [
        { text: "Hirohito", correct: true },
        { text: "Nikagava", correct: false },
        { text: "Japonia ishte shtet presidencial", correct: false },
        { text: "Kashikato", correct: false }
      ]
    },
    {
      question: " Kush ishte presidenti i pare Amerikan",
      answers: [
        { text: "Washington", correct: true },
        { text: "Linkolni", correct: false },
        { text: "Bushi", correct: false },
        { text: "Rosvelti", correct: false }
      ]
    },
    {
      question: "Cili ishte roli i Bashkimit të Prizrenit në historinë shqiptare?",
      answers: [
        { text: "Themelimi i një qeverie të re", correct: false },
        { text: "Shpërndarja e pushtetit", correct: false },
        { text: "Ndërtimi i infrastrukturës", correct: false },
        { text: "Ruajtja e unitetit kombëtar", correct: true },
      ]
    },
    {
      question: "Kur u shpall Shqipëria republikë për herë të parë?",
      answers: [
        { text: "21 janar 1925", correct: true },
        { text: "28 nëntor 1912", correct: false },
        { text: "29 nëntor 1944", correct: false },
        { text: "17 janar 1946", correct: false }
      ]
    },
    {
      question: "Kur filloi periudha republikane me krijimin e strukturave shtetërore në Shqipëri?",
      answers: [
        { text: "21 janar 1925", correct: true },
        { text: "17 janar 1946", correct: false },
        { text: "14 dhjetor 1924", correct: false },
        { text: "1 shtator 1928", correct: false }
      ]
    },
    {
      question: "Kur u emreua Stalini Sekretar I Pergjithshem I Partise Komuniste?",
      answers: [
        { text: "Mars 1912", correct: false },
        { text: "Prill 1912", correct: true },
        { text: "Maj 1912", correct: false },
        { text: "Qershor 1912", correct: false }
      ]
    },
    {
      question: "Kur filluan punimet e Konferences se Paqes se Versajes?",
      answers: [
        { text: "19 janar 1918", correct: false },
        { text: "18 janar 1919", correct: true },
        { text: "18 janar 1918", correct: false },
        { text: "19 janar 1919", correct: false }
      ]
    },
    {
      question: "Cila ngjarje nuk ka lidhje me historinë shqiptare?",
      answers: [
        { text: "Pavarësia e Shqipërisë", correct: false },
        { text: "Lufta e Dytë Botërore", correct: false },
        { text: "Shfaqja e një filmi modern", correct: true },
        { text: "Festimi i Ditës së Pavarësisë", correct: false }
      ]
    },
    {
      question: "Cili qytet është konsideruar themelues i revolucionit industrial në historinë botërore?",
      answers: [
        { text: "Madrid", correct: false },
        { text: "Londra", correct: false },
        { text: "Manchester", correct: true },
        { text: "Berlin", correct: false }
      ]
    },
    {
      question: "Në cilin shekull filloi sundimi osmane në territorin shqiptar?",
      answers: [
        { text: "Shekulli XVII", correct: false },
        { text: "Shekulli XIX", correct: false },
        { text: "Shekulli XVIII", correct: false },
        { text: "Shekulli XV", correct: true },
      ]
    },
    {
      question: "Kur u pranu Shqiperia si anetare e Lidhjes se Kombeve?",
      answers: [
        { text: " Nentor 1919", correct: false },
        { text: "Dhjetor 1919", correct: false },
        { text: "Dhjetor 1920", correct: true },
        { text: "Nentor 1920", correct: false }
      ]
    }, 
    {
      question: "Në cilin vit u mbajt Kongresi i Manastirit?",
      answers: [
        { text: "1908", "correct": true },
        { text: "1912", "correct": false },
        { text: "1899", "correct": false },
        { text: "1920", "correct": false }
      ]
    },
    {
      question: "Cili ishte qëllimi kryesor i Kongresit të Manastirit?",
      answers: [
        { text: "Të vendosë një alfabet të vetëm për gjuhën shqipe", "correct": true },
        { text: "Të krijojë një shtet të ri", "correct": false },
        { text: "Të nënshkruajë një traktat ndërkombëtar", "correct": false },
        { text: "Të organizojë protestat kundër sundimit osman", "correct": false }
      ]
    },
    {
      question: "Ku u mbajt Kongresi i Manastirit?",
      answers: [
        { text: "Manastir (Bitola)", "correct": true },
        { text: "Tiranë", "correct": false },
        { text: "Shkodër", "correct": false },
        { text: "Durrës", "correct": false }
      ]
    },
    {
      question: "Kur filloi dhe mbaoi lufta civile në SHBA?",
      answers: [
        { text: "1861-1865", "correct": true },
        { text: "1850-1855", "correct": false },
        { text: "1860-1864", "correct": false },
        { text: "1870-1875", "correct": false }
      ]
    },
    {
      question: "Cilat vite përfaqësojnë ndërtimin dhe rënien e murit të Berlinit?",
      answers: [
        { text: "1961 dhe 1989", "correct": true },
        { text: "1960 dhe 1990", "correct": false },
        { text: "1961 dhe 1991", "correct": false },
        { text: "1962 dhe 1988", "correct": false }
      ]
    },
    {
      question: "Në cilin vit u themelua Lidhja e Pejës?",
      answers: [
        { text: "1899", correct: true },
        { text: "1908", correct: false },
        { text: "1912", correct: false },
        { text: "1920", correct: false }
      ]
    },
    {
      question: "Kur u bashkua Gjermania (reunifikimi)?",
      answers: [
        { text: "3 Tetor 1990", "correct": true },
        { text: "9 Nëntor 1989", "correct": false },
        { text: "1991", "correct": false },
        { text: "1989", "correct": false }
      ]
    },
    {
      question: "Kur u mbajt Kongresi i Vjenës?",
      answers: [
        { text: "1814-1815", "correct": true },
        { text: "1800-1801", "correct": false },
        { text: "1820-1821", "correct": false },
        { text: "1790-1791", "correct": false }
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
  