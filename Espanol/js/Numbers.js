class Numbers {
  static currentQuestion = 0;
  static mistakes = [];
  static rawData = MyData.numbers;
  static data = [];

  static results = [
    { a: "Questions", b: Numbers.data.length },
    { a: "Correct answers", b: 0 },
    { a: "Incorrect answers", b: 0 },
  ];

  static questions() {
    document.querySelector('[espanol = "QuestionNumber"]').innerText =
      Numbers.currentQuestion + 1 + " / " + Numbers.data.length;
    document.querySelector('[espanol = "Question"]').innerText =
      Numbers.data[Numbers.currentQuestion]["e"];
    document.querySelector('[espanol = "AnswerImput"]').value = "";
  }

  static getQuestions() {
    Numbers.data = [];
    let randomQuestions = +DefaultConfig.numbers["numberOfQuestions"];

    let statisticsData = Statistics.getStatistics();
    let temporary = Questions.selectQuestions(
      Numbers.rawData,
      statisticsData["numersMistakes"],
      +DefaultConfig.numbers["minNumber"],
      +DefaultConfig.numbers["maxNumber"],
      randomQuestions,
      +DefaultConfig.numbers["additionalQuestions"]
    );
    Numbers.data = temporary[0];
    Numbers.mistakes = temporary[1];

    console.log(Numbers.data);
  }

  static validation(input) {
    if (input.value == Numbers.data[Numbers.currentQuestion]["s"]) {
      // IS VALID
      Numbers.mistakes[Numbers.currentQuestion]["c"]++;
      input.classList.add("is-valid");
      Numbers.currentQuestion++;
      Numbers.results[1]["b"]++;
      if (Numbers.currentQuestion >= Numbers.data.length) {
        console.log("RESULTS");
        Results.display(Numbers.results, Numbers.mistakes);
      } else {
        Numbers.questions();
        setTimeout(() => {
          input.classList.remove("is-valid");
        }, 2000);
      }
    } else {
      // IS INVALID
      input.classList.add("is-invalid");
      Numbers.mistakes[Numbers.currentQuestion]["m"]++;
      Numbers.results[2]["b"]++;

      if (Numbers.mistakes[Numbers.currentQuestion]["m"] > 2) {
        Numbers.currentQuestion++;
        if (Numbers.currentQuestion >= Numbers.data.length) {
          console.log("RESULTS");
          Results.display(Numbers.results, Numbers.mistakes);
        } else {
          Numbers.questions();
        }
      }

      setTimeout(() => {
        input.classList.remove("is-invalid");
      }, 2000);
    }
  }

  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "Numbers";
    Numbers.mistakes = [];
    Numbers.getQuestions();
    Numbers.currentQuestion = 0;
    Numbers.results[0]["b"] = Numbers.data.length;
    Numbers.results[1]["b"] = 0;
    Numbers.results[2]["b"] = 0;
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());

    container.appendChild(
      CreateElement.header1(
        "QuestionNumber",
        Numbers.currentQuestion + 1 + " / " + Numbers.data.length
      )
    );

    container.appendChild(
      CreateElement.header1("Title", "Translate English to Spanish")
    );

    container.appendChild(
      CreateElement.header1(
        "Question",
        Numbers.data[Numbers.currentQuestion]["e"]
      )
    );
    container.appendChild(CreateElement.answerInput());

    Espanol.app.appendChild(container);
  }

  static run(variable) {
    console.log("NUMBERS " + variable);
    // console.log(document.querySelector('[espanol = "AnswerImput"]').value);
    if (variable == "Submit") {
      Numbers.validation(document.querySelector('[espanol = "AnswerImput"]'));
    } else if (variable == "Back") {
      MainMenu.display();
    }
  }
}
