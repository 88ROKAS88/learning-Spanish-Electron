class Questions {
  static selectQuestions(
    AllQuestions,
    QuestionsStatistics,
    QuestionsFrom,
    QuestionsTo,
    RandomQuestionAmount,
    additionalQuestionsAmount,
    additionalIncorrectQuestions
  ) {
    let randomAndAdditionalQAmount =
      RandomQuestionAmount + additionalQuestionsAmount;
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

    // add longest time not asked questions

    if (selectedQuestions.length < randomAndAdditionalQAmount) {
      // remove selected questions
      for (let i = selectedQuestions.length - 1; i >= 0; i--) {
        questionArray.splice(i, 1);
      }
      // sort questions by last time asked
      questionArray.sort(function (a, b) {
        return QuestionsStatistics[a.n]["t"] - QuestionsStatistics[b.n]["t"];
      });
      // add longest time not asked questions
      let addedQuestions = [];
      let longTimeQuestionAmount =
        randomAndAdditionalQAmount - selectedQuestions.length;
      console.log(randomAndAdditionalQAmount - selectedQuestions.length);
      for (let i = 0; i < longTimeQuestionAmount; i++) {
        addedQuestions.push(i);
        selectedQuestions.push(questionArray[i]);
        questionsMistakes.push({
          n: questionArray[i]["n"],
          c: 0,
          m: 0,
        });
      }
      // remove selected questions
      for (let i = addedQuestions.length - 1; i >= 0; i--) {
        questionArray.splice(i, 1);
      }
    }

    // sort questions by lowest correct answer %

    if (additionalIncorrectQuestions > 0) {
      // sort questions by most mistakes
      questionArray.sort(function (a, b) {
        return (
          Statistics.sucessRate(
            QuestionsStatistics[a.n]["c"],
            QuestionsStatistics[a.n]["m"]
          ) -
          Statistics.sucessRate(
            QuestionsStatistics[b.n]["c"],
            QuestionsStatistics[b.n]["m"]
          )
        );
      });

      // add additional questions with lowest correct answer %
      for (let i = 0; i < additionalIncorrectQuestions; i++) {
        selectedQuestions.push(questionArray[i]);
        questionsMistakes.push({
          n: questionArray[i]["n"],
          c: 0,
          m: 0,
        });
      }
      console.log(questionArray);
    }

    // Return selected questions
    return [selectedQuestions, questionsMistakes];
  }
}
