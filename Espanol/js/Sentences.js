class Sentences {
  static questions = MyData.sentences;
  static currentQuestion = 0;
  static mistakesForResults = [];

  static counter;
  static question;
  static hint;
  static input;

  static showHint() {
    let hint = "";

    Sentences.questions[Sentences.currentQuestion]["w"].forEach(
      (item, index) => {
        if (index == 0) {
          hint += MyData.words[item]["s"];
        } else {
          for (let i = 0; i < MyData.words[item]["s"].length; i++) {
            if (i == 0) {
              hint += MyData.words[item]["s"][i];
            } else {
              hint += "_ ";
            }
          }
        }
        hint += "   ";
      }
    );

    return hint;
  }

  static updateHint(answer, correctAnswer) {
    let hint = " ";
    correctAnswer.forEach((item, index) => {
      if (
        answer[index].toLowerCase() == MyData.words[item]["s"].toLowerCase()
      ) {
        hint += MyData.words[item]["s"];
      } else {
        for (let i = 0; i < MyData.words[item]["s"].length; i++) {
          if (i == 0) {
            hint += MyData.words[item]["s"][i];
          } else {
            hint += "_ ";
          }
        }
      }

      hint += "   ";
    });

    Sentences.hint.value = hint;
  }

  static display() {
    Espanol.page = "Sentences";
    let statisticsData = Statistics.getStatistics();
    Sentences.mistakesForResults = [];
    for (let i = 0; i < Sentences.questions.length; i++) {
      Sentences.mistakesForResults.push({ n: i, c: 0, m: 0 });
    }
    Sentences.currentQuestion = 0;
    // display
    Espanol.app.innerHTML = "";

    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());

    container.appendChild(CreateElement.question());
    container.appendChild(CreateElement.hint());
    container.appendChild(CreateElement.answerInput());

    Espanol.app.appendChild(container);

    Sentences.counter = document.querySelector('[espanol = "QuestionNumber"]');
    Sentences.counter.innerText =
      Sentences.currentQuestion + 1 + " / " + Sentences.questions.length;

    document.querySelector('[espanol = "HintTitle"]').innerText = "Hint";

    Sentences.hint = document.querySelector('[espanol = "Hint"]');
    Sentences.hint.value = Sentences.showHint();

    Sentences.question = document.querySelector('[espanol = "Question"]');
    Sentences.question.value =
      Sentences.questions[Sentences.currentQuestion]["e"];

    Sentences.input = document.querySelector('[espanol = "AnswerImput"]');
  }

  static displayNextQuestion() {
    Sentences.counter.innerText =
      Sentences.currentQuestion + 1 + " / " + Sentences.questions.length;

    Sentences.hint.value = Sentences.showHint();

    Sentences.question.value =
      Sentences.questions[Sentences.currentQuestion]["e"];

    Sentences.input.value = "";
  }

  static validateAnswer(answer) {
    let answerArray = answer.split(" ");
    let correctAnswer = Sentences.questions[Sentences.currentQuestion]["w"];
    console.log("answer", correctAnswer);
    console.log("guess", answerArray);
    // check answer length
    if (answerArray.length == correctAnswer.length) {
      let mistakes = 0;
      correctAnswer.forEach((element, index) => {
        if (
          answerArray[index].toLowerCase() ==
          MyData.words[element]["s"].toLowerCase()
        ) {
          console.log("correct element", answerArray[index]);
        } else {
          mistakes++;
          console.log(
            "incorrect element",
            answerArray[index],
            " /= ",
            MyData.words[element]["s"]
          );
        }
      });
      // correct answer
      if (mistakes == 0) {
        Sentences.mistakesForResults[Sentences.currentQuestion]["c"]++;
        Sentences.currentQuestion++;
        if (Sentences.currentQuestion < Sentences.questions.length) {
          Sentences.displayNextQuestion();
        } else {
          Results.display(Sentences.mistakesForResults);
        }
        // incorrect answer
      } else {
        Sentences.mistakesForResults[Sentences.currentQuestion]["m"]++;
        alert = new Alert("Incorrect answer", "alert-danger");
        // more than 3 mistakes
        if (Sentences.mistakesForResults[Sentences.currentQuestion]["m"] > 2) {
          Sentences.currentQuestion++;
          if (Sentences.currentQuestion < Sentences.questions.length) {
            Sentences.displayNextQuestion();
          } else {
            Results.display(Sentences.mistakesForResults);
          }
          // less than 3 mistakes
        } else {
          Sentences.updateHint(answerArray, correctAnswer);
        }
      }
      // wrong answer lenght
    } else {
      alert = new Alert(
        "Correct answer contains " +
          correctAnswer.length +
          " words. Your answer contains " +
          answerArray.length +
          " words.",
        "alert-danger"
      );
    }
  }

  static run(variable) {
    console.log("SENTENCES " + variable);
    if (variable == "Submit") {
      Sentences.validateAnswer(Sentences.input.value);
    } else if (variable == "HintTitle") {
      alert = new Alert(
        "HINT : " + Sentences.questions[Sentences.currentQuestion]["s"],
        "alert-info"
      );
    } else if (variable == "Back") {
      MainMenu.display();
    }
  }
}
