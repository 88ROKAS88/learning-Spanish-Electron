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
        +DefaultConfig.numbers["additionalQuestions"],
        +DefaultConfig.numbers["incorrectQuestions"]
      )
    );
  }

  static run(variable) {
    console.log("NUMBERS " + variable);
    if (variable == "Submit") {
      let input = document.querySelector('[espanol = "AnswerImput"]');
      if (input.value == "") {
        let alert = new Alert("INPUT FIELD IS EMPTY", "alert-danger");
      } else {
        Numbers.test.validateAnswer(input);
      }
    } else if (variable == "Back") {
      MainMenu.display();
    }
  }
}
