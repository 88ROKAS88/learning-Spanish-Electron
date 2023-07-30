class Words {
  static rawData = MyData.words;
  static test;

  static display() {
    Espanol.page = "Words";
    let statisticsData = Statistics.getStatistics();

    Words.test = new Test(
      Questions.selectQuestions(
        Words.rawData,
        statisticsData["wordsMistakes"],
        0,
        17,
        +DefaultConfig.numbers["numberOfQuestions"],
        +DefaultConfig.numbers["additionalQuestions"]
      )
    );
  }

  static run(variable) {
    console.log("WORDS " + variable);
    // console.log(document.querySelector('[espanol = "AnswerImput"]').value);
    if (variable == "Submit") {
      Words.test.validateAnswer(
        document.querySelector('[espanol = "AnswerImput"]')
      );
    } else if (variable == "Back") {
      MainMenu.display();
    }
  }
}
