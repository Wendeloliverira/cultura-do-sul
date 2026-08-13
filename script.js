"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const stateData = {
    pr: {
      initial: "PR",
      capital: "Curitiba",
      kicker: "PARANÁ",
      title: "Tradições que atravessam caminhos",
      description:
        "O Paraná reúne influências indígenas, tropeiras, africanas e de diferentes comunidades de imigrantes. Sua cultura aparece em festas populares, culinária, artesanato, música, arquitetura e costumes presentes em diferentes regiões do estado.",
      className: "pr-bg",
      features: [
        ["🥘", "Barreado", "Prato tradicional associado principalmente ao litoral paranaense."],
        ["🌲", "Pinhão e araucária", "Elementos muito ligados à paisagem e à alimentação regional."],
        ["🪕", "Fandango caiçara", "Manifestação cultural que mistura música, dança e vida comunitária."],
        ["🐎", "Tropeirismo", "Rotas e costumes que marcaram a formação histórica de várias cidades."]
      ]
    },
    sc: {
      initial: "SC",
      capital: "Florianópolis",
      kicker: "SANTA CATARINA",
      title: "Entre o litoral, os vales e as serras",
      description:
        "Santa Catarina possui grande diversidade cultural. Povos indígenas, comunidades açorianas, populações negras e diferentes grupos de imigrantes contribuíram para formar costumes presentes na culinária, nas festas, no artesanato e na arquitetura.",
      className: "sc-bg",
      features: [
        ["🐟", "Cultura litorânea", "Pesca artesanal, frutos do mar e tradições ligadas às comunidades costeiras."],
        ["🧵", "Renda de bilro", "Trabalho artesanal tradicional presente principalmente no litoral catarinense."],
        ["🎉", "Festas populares", "Eventos que celebram diferentes tradições culturais e comunitárias."],
        ["🏘️", "Arquitetura", "Construções históricas preservam diferentes influências culturais."]
      ]
    },
    rs: {
      initial: "RS",
      capital: "Porto Alegre",
      kicker: "RIO GRANDE DO SUL",
      title: "Pampa, fronteiras e tradição gaúcha",
      description:
        "No Rio Grande do Sul, a cultura foi formada por diferentes povos e tradições. A vida no campo, o pampa, as áreas de fronteira, os povos indígenas, populações negras e diferentes grupos migratórios ajudaram a construir uma identidade cultural muito marcante.",
      className: "rs-bg",
      features: [
        ["🧉", "Chimarrão", "Bebida tradicional preparada com erva-mate e compartilhada em rodas."],
        ["🔥", "Churrasco", "Prática culinária fortemente associada à cultura gaúcha."],
        ["🎶", "Música regional", "Milonga, chamamé, vanerão e outros ritmos fazem parte da cultura regional."],
        ["🌾", "Cultura do pampa", "A paisagem e a vida rural influenciaram diversos costumes e tradições."]
      ]
    }
  };

  const stateTabs = document.querySelectorAll(".state-tab");
  const stateVisual = document.getElementById("stateVisual");
  const stateInitial = document.getElementById("stateInitial");
  const stateCapital = document.getElementById("stateCapital");
  const stateKicker = document.getElementById("stateKicker");
  const stateTitle = document.getElementById("stateTitle");
  const stateDescription = document.getElementById("stateDescription");
  const featureList = document.getElementById("featureList");

  function renderState(stateKey) {
    const state = stateData[stateKey];
    if (!state) return;

    if (stateInitial) stateInitial.textContent = state.initial;
    if (stateCapital) stateCapital.textContent = state.capital;
    if (stateKicker) stateKicker.textContent = state.kicker;
    if (stateTitle) stateTitle.textContent = state.title;
    if (stateDescription) stateDescription.textContent = state.description;
    if (stateVisual) stateVisual.className = `state-visual ${state.className}`;

    if (featureList) {
      featureList.innerHTML = "";

      state.features.forEach(([icon, title, text]) => {
        const item = document.createElement("div");
        item.className = "feature-item";

        const iconBox = document.createElement("span");
        iconBox.textContent = icon;

        const textBox = document.createElement("div");
        const strong = document.createElement("strong");
        const small = document.createElement("small");

        strong.textContent = title;
        small.textContent = text;

        textBox.append(strong, small);
        item.append(iconBox, textBox);
        featureList.appendChild(item);
      });
    }
  }

  stateTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      stateTabs.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderState(tab.dataset.state);
    });
  });

  renderState("pr");

  const questions = [
    {
      question: "Quais estados formam a Região Sul do Brasil?",
      answers: [
        "Paraná, Santa Catarina e Rio Grande do Sul",
        "São Paulo, Paraná e Santa Catarina",
        "Paraná, Mato Grosso do Sul e Rio Grande do Sul",
        "Santa Catarina, São Paulo e Rio Grande do Sul"
      ],
      correct: 0,
      explanation: "A Região Sul do Brasil é formada por Paraná, Santa Catarina e Rio Grande do Sul."
    },
    {
      question: "Qual é a capital de Santa Catarina?",
      answers: ["Joinville", "Blumenau", "Florianópolis", "Chapecó"],
      correct: 2,
      explanation: "Florianópolis é a capital do estado de Santa Catarina."
    },
    {
      question: "Qual bebida é muito associada à cultura do Rio Grande do Sul?",
      answers: ["Chimarrão", "Açaí", "Caldo de cana", "Água de coco"],
      correct: 0,
      explanation: "O chimarrão é preparado com erva-mate e possui forte presença na cultura gaúcha."
    },
    {
      question: "O barreado é um prato tradicional associado principalmente a qual estado?",
      answers: ["Paraná", "Santa Catarina", "Rio Grande do Sul", "São Paulo"],
      correct: 0,
      explanation: "O barreado é muito conhecido como um prato tradicional do litoral do Paraná."
    },
    {
      question: "Qual manifestação cultural tradicional está relacionada ao litoral do Paraná?",
      answers: ["Frevo", "Fandango caiçara", "Maracatu", "Carimbó"],
      correct: 1,
      explanation: "O fandango caiçara mistura música, dança e tradições comunitárias."
    },
    {
      question: "Qual alternativa apresenta povos indígenas historicamente presentes na Região Sul?",
      answers: [
        "Guarani, Kaingang e Xokleng/Laklãnõ",
        "Maias, Astecas e Incas",
        "Romanos, Gregos e Celtas",
        "Vikings, Saxões e Fenícios"
      ],
      correct: 0,
      explanation: "Guarani, Kaingang e Xokleng/Laklãnõ estão entre os povos indígenas historicamente ligados ao território da Região Sul."
    },
    {
      question: "Qual elemento natural possui forte relação com a cultura e a paisagem do Paraná?",
      answers: ["Araucária e pinhão", "Mandacaru e umbu", "Açaizeiro e castanha", "Coqueiro e cacau"],
      correct: 0,
      explanation: "A araucária é muito associada ao Paraná, e o pinhão faz parte da culinária regional."
    },
    {
      question: "A cultura da Região Sul foi formada principalmente por:",
      answers: [
        "Uma única tradição cultural",
        "Somente imigrantes europeus",
        "Diferentes povos e grupos sociais",
        "Apenas costumes rurais"
      ],
      correct: 2,
      explanation: "A cultura da Região Sul é resultado da contribuição de diferentes povos e grupos sociais."
    },
    {
      question: "Qual prática artesanal é conhecida em partes do litoral de Santa Catarina?",
      answers: ["Renda de bilro", "Cerâmica marajoara", "Carranca", "Bonecas do Vale do Jequitinhonha"],
      correct: 0,
      explanation: "A renda de bilro faz parte das tradições artesanais presentes principalmente no litoral catarinense."
    },
    {
      question: "Qual alternativa melhor representa a cultura da Região Sul?",
      answers: [
        "Todos os estados possuem exatamente os mesmos costumes",
        "A Região Sul possui uma cultura diversa",
        "As tradições existem apenas em áreas rurais",
        "A cultura regional nunca muda"
      ],
      correct: 1,
      explanation: "A cultura sulista apresenta grande diversidade entre cidades, comunidades e estados."
    }
  ];

  const quizStart = document.getElementById("quizStart");
  const quizGame = document.getElementById("quizGame");
  const quizResult = document.getElementById("quizResult");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const restartQuizBtn = document.getElementById("restartQuizBtn");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const questionCounter = document.getElementById("questionCounter");
  const scoreCounter = document.getElementById("scoreCounter");
  const progressBar = document.getElementById("progressBar");
  const questionText = document.getElementById("questionText");
  const answersContainer = document.getElementById("answersContainer");
  const feedback = document.getElementById("feedback");
  const finalScore = document.getElementById("finalScore");
  const resultTitle = document.getElementById("resultTitle");
  const resultMessage = document.getElementById("resultMessage");

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;

    if (quizStart) quizStart.classList.add("hidden");
    if (quizResult) quizResult.classList.add("hidden");
    if (quizGame) quizGame.classList.remove("hidden");

    renderQuestion();
  }

  function renderQuestion() {
    const item = questions[currentQuestion];
    if (!item) return;

    answered = false;

    if (feedback) {
      feedback.classList.add("hidden");
      feedback.textContent = "";
    }

    if (nextQuestionBtn) nextQuestionBtn.classList.add("hidden");

    if (questionCounter) {
      questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
    }

    if (scoreCounter) {
      scoreCounter.textContent = `${score} ${score === 1 ? "ponto" : "pontos"}`;
    }

    if (progressBar) {
      const percentage = ((currentQuestion + 1) / questions.length) * 100;
      progressBar.style.width = `${percentage}%`;
    }

    if (questionText) questionText.textContent = item.question;
    if (!answersContainer) return;

    answersContainer.innerHTML = "";

    item.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      const letter = String.fromCharCode(65 + index);

      button.type = "button";
      button.className = "answer-btn";
      button.textContent = `${letter}. ${answer}`;
      button.addEventListener("click", () => selectAnswer(index, button));

      answersContainer.appendChild(button);
    });
  }

  function selectAnswer(index, selectedButton) {
    if (answered || !answersContainer) return;

    answered = true;

    const item = questions[currentQuestion];
    const buttons = Array.from(answersContainer.querySelectorAll(".answer-btn"));

    buttons.forEach((button) => {
      button.disabled = true;
    });

    if (index === item.correct) {
      score += 1;
      selectedButton.classList.add("correct");
      if (feedback) feedback.textContent = `Muito bem! ${item.explanation}`;
    } else {
      selectedButton.classList.add("wrong");

      const correctButton = buttons[item.correct];
      if (correctButton) correctButton.classList.add("correct");

      if (feedback) {
        feedback.textContent = `Resposta correta: ${item.answers[item.correct]}. ${item.explanation}`;
      }
    }

    if (scoreCounter) {
      scoreCounter.textContent = `${score} ${score === 1 ? "ponto" : "pontos"}`;
    }

    if (feedback) feedback.classList.remove("hidden");

    if (nextQuestionBtn) {
      nextQuestionBtn.textContent =
        currentQuestion === questions.length - 1 ? "Ver resultado" : "Próxima pergunta";
      nextQuestionBtn.classList.remove("hidden");
    }
  }

  function showResult() {
    if (quizGame) quizGame.classList.add("hidden");
    if (quizResult) quizResult.classList.remove("hidden");
    if (finalScore) finalScore.textContent = String(score);

    if (!resultTitle || !resultMessage) return;

    if (score >= 9) {
      resultTitle.textContent = "Excelente!";
      resultMessage.textContent = "Você demonstrou um ótimo conhecimento sobre a cultura da Região Sul do Brasil.";
    } else if (score >= 7) {
      resultTitle.textContent = "Muito bom!";
      resultMessage.textContent = "Você aprendeu bastante. Revise alguns detalhes e tente chegar à pontuação máxima.";
    } else if (score >= 5) {
      resultTitle.textContent = "Bom trabalho!";
      resultMessage.textContent = "Você já conhece vários pontos importantes. Revise o conteúdo e tente novamente.";
    } else {
      resultTitle.textContent = "Continue estudando!";
      resultMessage.textContent = "Releia as informações sobre a cultura da Região Sul e depois tente novamente.";
    }
  }

  if (startQuizBtn) {
    startQuizBtn.addEventListener("click", startQuiz);
  }

  if (restartQuizBtn) {
    restartQuizBtn.addEventListener("click", startQuiz);
  }

  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener("click", () => {
      if (currentQuestion < questions.length - 1) {
        currentQuestion += 1;
        renderQuestion();
      } else {
        showResult();
      }
    });
  }

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = `© ${new Date().getFullYear()}`;
});
