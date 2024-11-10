// Создаем массив из 90 вопросов с вариантами ответов и правильными ответами
const questions = [
    { question: "Когда началась Великая Отечественная война?", options: ["1939", "1941", "1945", "1942"], answer: "1941" },
    { question: "Кто был первым президентом Узбекистана?", options: ["Ислам Каримов", "Шавкат Мирзиёев", "Улугбек", "Амира Тимура"], answer: "Ислам Каримов" },
        { question: "Когда началась Великая Отечественная война?", options: ["1939", "1941", "1945", "1942"], answer: "1941" },
        { question: "Кто был первым президентом Узбекистана?", options: ["Ислам Каримов", "Шавкат Мирзиёев", "Улугбек", "Амира Тимура"], answer: "Ислам Каримов" },
        { question: "Когда Узбекистан получил независимость от Советского Союза?", options: ["1991", "1990", "1989", "1992"], answer: "1991" },
        { question: "Какая древняя цивилизация существовала на территории современного Узбекистана?", options: ["Бактрия", "Греция", "Месопотамия", "Кушанское царство"], answer: "Бактрия" },
        { question: "Какой полководец завоевал Персию и основал империю Ахеменидов?", options: ["Кир Великий", "Дарий", "Александр Македонский", "Цезарь"], answer: "Кир Великий" },
        { question: "В каком году Тимур (Тамерлан) основал свою империю?", options: ["1370", "1400", "1336", "1450"], answer: "1370" },
        { question: "Какой город считается древней столицей Саманидов?", options: ["Бухара", "Самарканд", "Ташкент", "Хива"], answer: "Бухара" },
        { question: "Какой исламский учёный родился в Бухаре и стал известным философом и врачом?", options: ["Аль-Фараби", "Авиценна", "Омар Хайям", "Аль-Хорезми"], answer: "Авиценна" },
        { question: "Какая империя контролировала территорию Узбекистана в 16 веке?", options: ["Моголы", "Османы", "Шейбаниды", "Тимуриды"], answer: "Шейбаниды" },
        { question: "Кто был правителем Кушанской империи, известный распространением буддизма?", options: ["Канишка", "Ашока", "Дарий", "Тиглатпаласар"], answer: "Канишка" },
        { question: "Какой узбекский город был одним из главных центров шелкового пути?", options: ["Самарканд", "Хива", "Ташкент", "Наманган"], answer: "Самарканд" },
        { question: "Какой учёный из Узбекистана создал алгоритмы и написал книгу 'Китаб аль-джабр ва-ль-мукабала'?", options: ["Аль-Хорезми", "Авиценна", "Аль-Бируни", "Аль-Фараби"], answer: "Аль-Хорезми" },
        { question: "Кто из этих был великим завоевателем и покорителем Азии в 13 веке?", options: ["Чингисхан", "Тамерлан", "Александр Македонский", "Наполеон"], answer: "Чингисхан" },
        { question: "Какой город стал столицей Бухарского эмирата?", options: ["Бухара", "Самарканд", "Ташкент", "Хива"], answer: "Бухара" },
        { question: "В каком году Александр Македонский вторгся в Среднюю Азию?", options: ["329 до н.э.", "320 до н.э.", "400 до н.э.", "300 до н.э."], answer: "329 до н.э." },
        { question: "Кто правил Узбекистаном в начале XX века?", options: ["Бухарский эмират", "Саманиды", "Кушанское царство", "Тимуриды"], answer: "Бухарский эмират" },
        { question: "Кто был основателем Шейбанидской династии?", options: ["Шейбани-хан", "Тамерлан", "Улугбек", "Кутлуг Тимур"], answer: "Шейбани-хан" },
        { question: "Какой город был знаменит своей астрономической обсерваторией в XV веке?", options: ["Самарканд", "Бухара", "Хива", "Андижан"], answer: "Самарканд" },
        { question: "В каком году Самарканд стал частью Российской империи?", options: ["1868", "1847", "1885", "1900"], answer: "1868" },
        { question: "Кто был правителем в Самарканде, известный как выдающийся математик и астроном?", options: ["Улугбек", "Тамерлан", "Исмаил Самани", "Али Хазини"], answer: "Улугбек" },
        // Добавьте здесь еще вопросы до 90 вопросов
      
    // Добавьте здесь еще 88 вопросов
  ];
  
  // Перемешиваем вопросы при каждой загрузке страницы
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 90); // Берем только 90 вопросов
  
  // Функция для генерации HTML-кода вопросов
  function loadQuestions() {
    const testContainer = document.getElementById("test-container");
  
    if (!testContainer) {
      console.error("Контейнер для тестов не найден.");
      return;
    }
  
    shuffledQuestions.forEach((item, index) => {
      const questionCard = document.createElement("div");
      questionCard.classList.add("question-card");
      questionCard.innerHTML = `
        <p><strong>Вопрос ${index + 1}:</strong> ${item.question}</p>
        ${item.options.map(option => `
          <label>
            <input type="radio" name="question${index}" value="${option}">
            ${option}
          </label>
        `).join('')}
      `;
      testContainer.appendChild(questionCard);
    });
  }
  
  // Проверка и вывод результатов теста
  function submitTest() {
    let score = 0;
    let incorrectAnswers = [];
  
    shuffledQuestions.forEach((item, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && selectedOption.value === item.answer) {
        score++;
      } else {
        // Добавляем неверные ответы для отображения позже
        incorrectAnswers.push({ question: item.question, selected: selectedOption ? selectedOption.value : "Не отвечено", correct: item.answer, number: index + 1 });
      }
    });
  
    const resultContainer = document.getElementById("result");
    if (resultContainer) {
      resultContainer.innerHTML = `Ваш результат: ${score} из ${shuffledQuestions.length}`;
  
      // Отображение неверных ответов
      if (incorrectAnswers.length > 0) {
        const incorrectContainer = document.createElement("div");
        incorrectContainer.innerHTML = "<h3>Неверные ответы:</h3>";
        incorrectAnswers.forEach(item => {
          incorrectContainer.innerHTML += `
            <p><strong>Вопрос ${item.number}:</strong> ${item.question}</p>
            <p>Ваш ответ: ${item.selected}</p>
            <p>Правильный ответ: ${item.correct}</p>
            <hr>
          `;
        });
        resultContainer.appendChild(incorrectContainer);
      }
    } else {
      console.error("Контейнер для результатов не найден.");
    }
  }
  
  window.onload = loadQuestions;
  