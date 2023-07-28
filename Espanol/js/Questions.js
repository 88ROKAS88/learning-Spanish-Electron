class Questions {
  static selectQuestions(
    AllQuestions,
    QuestionsStatistics,
    QuestionsFrom,
    QuestionsTo,
    RandomQuestionAmount,
    additionalQuestionsAmount
  ) {
    let questionArray = [];
    let selectedQuestions = [];
    let questionsMistakes = [];

    // Get necessary array of questions - questionArray
    for (let q = +QuestionsFrom; q <= +QuestionsTo; q++) {
      questionArray.push(AllQuestions[q]);
    }

    // Shuffle questions
    for (let i = questionArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionArray[i], questionArray[j]] = [
        questionArray[j],
        questionArray[i],
      ];
    }

    // get necesary amount of random questions
    for (let i = 0; i < RandomQuestionAmount; i++) {
      selectedQuestions[i] = questionArray[i];

      questionsMistakes[i] = { n: questionArray[i]["n"], c: 0, m: 0 }; // Number , Corrrect , Mistake
    }

    // add never asked questions
    let j = 0;
    let index = RandomQuestionAmount;
    while (j < additionalQuestionsAmount) {
      if (index >= questionArray.length) {
        break;
      }
      if (QuestionsStatistics[questionArray[index]["n"]] == null) {
        j++;
        selectedQuestions[RandomQuestionAmount - 1 + j] = questionArray[index];

        questionsMistakes[RandomQuestionAmount - 1 + j] = {
          n: questionArray[index]["n"],
          c: 0,
          m: 0,
        }; // Number , Corrrect , Mistake
      }
      index++;
    }

    // Return selected questions
    return [selectedQuestions, questionsMistakes];
  }
}
