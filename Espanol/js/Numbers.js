class Numbers {
  static rawData = MyData.numbers;
  static test;

  static display() {
    Espanol.page = "Numbers";
    let statisticsData = Statistics.getStatistics();

    Numbers.test = new Test(
      Questions.selectQuestions(
        Numbers.rawData,
        statisticsData["numersMistakes"],
        +DefaultConfig.numbers["minNumber"],
        +DefaultConfig.numbers["maxNumber"],
        +DefaultConfig.numbers["numberOfQuestions"],
        +DefaultConfig.numbers["additionalQuestions"]
      )
    );
  }

  static run(variable) {
    console.log("NUMBERS " + variable);
    // console.log(document.querySelector('[espanol = "AnswerImput"]').value);
    if (variable == "Submit") {
      Numbers.test.validateAnswer(
        document.querySelector('[espanol = "AnswerImput"]')
      );
    } else if (variable == "Back") {
      MainMenu.display();
    }
  }
}
