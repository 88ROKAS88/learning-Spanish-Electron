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
        +DefaultConfig.numbers["additionalQuestions"],
        +DefaultConfig.numbers["incorrectQuestions"]
      )
    );
  }

  static run(variable) {
    console.log("WORDS " + variable);
    // console.log(document.querySelector('[espanol = "AnswerImput"]').value);
    if (variable == "Submit") {
      let input = document.querySelector('[espanol = "AnswerImput"]');
      if (input.value == "") {
        let alert = new Alert("INPUT FIELD IS EMPTY", "alert-danger");
      } else {
        Words.test.validateAnswer(input);
      }
    } else if (variable == "Back") {
      MainMenu.display();
    }
  }
}
