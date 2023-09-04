class Sentences {
  static questions = MyData.sentences;
  static currentQuestion = 0;

  static counter;
  static question;
  static hint;
  static input;

  static showHint() {
    let hint = "";
    console.log(Sentences.questions[Sentences.currentQuestion]["w"])

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

  static display() {
    Espanol.page = "Sentences";
    let statisticsData = Statistics.getStatistics();

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

  static validateAnswer(answer) {
    console.log("answer", answer);
  }

  static run(variable) {
    console.log("SENTENCES " + variable);
    if (variable == "Submit") {
      Sentences.validateAnswer(
        document.querySelector('[espanol = "AnswerImput"]').value
      );
    } else if (variable == "Back") {
      MainMenu.display();
    }
  }
}
