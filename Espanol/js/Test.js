class Test {
  constructor(questionsAndMistakes) {
    this.questions = questionsAndMistakes[0];
    this.mistakes = questionsAndMistakes[1];
    this.currentQuestion = 0;
    this.gui = this.display();
  }

  nextQuestion() {
    this.gui["counter"].innerText =
      this.currentQuestion + 1 + " / " + this.questions.length;
    this.gui["question"].value = this.questions[this.currentQuestion]["e"];
    this.gui["input"].value = "";
  }

  validateAnswer(input) {
    if (input.value == this.questions[this.currentQuestion]["s"]) {
      // IS VALID
      this.mistakes[this.currentQuestion]["c"]++;
      input.classList.add("is-valid");
      this.currentQuestion++;
      //   Numbers.results[1]["b"]++;
      if (this.currentQuestion >= this.questions.length) {
        console.log("RESULTS");
        Results.display(this.mistakes);
      } else {
        this.nextQuestion();
        setTimeout(() => {
          input.classList.remove("is-valid");
        }, 2000);
      }
    } else {
      // IS INVALID
      input.classList.add("is-invalid");
      this.mistakes[this.currentQuestion]["m"]++;
      this.gui.health.innerText =
        this.mistakes[this.currentQuestion]["m"] + 1 + " / 3 ";
      //   Numbers.results[2]["b"]++;

      if (this.mistakes[this.currentQuestion]["m"] > 2) {
        alert = new Alert(
          "CORRECT ANSWER " + this.questions[this.currentQuestion]["s"],
          "alert-danger"
        );
        this.currentQuestion++;
        if (this.currentQuestion >= this.questions.length) {
          console.log("RESULTS");
          Results.display(this.mistakes);
        } else {
          this.nextQuestion();
        }
      }

      setTimeout(() => {
        input.classList.remove("is-invalid");
      }, 2000);
    }
  }

  display() {
    Espanol.app.innerHTML = "";

    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());

    container.appendChild(
      CreateElement.header1("Title", "Translate English to Spanish")
    );
    container.appendChild(CreateElement.question());
    container.appendChild(CreateElement.answerInput());

    Espanol.app.appendChild(container);
    const counter = document.querySelector('[espanol = "QuestionNumber"]');
    counter.innerText =
      this.currentQuestion + 1 + " / " + this.questions.length;
    const question = document.querySelector('[espanol = "Question"]');
    question.value = this.questions[this.currentQuestion]["e"];
    const input = document.querySelector('[espanol = "AnswerImput"]');
    const health = document.querySelector('[espanol = "Health"]');
    health.innerText = this.mistakes[this.currentQuestion]["m"] + 1 + " / 3 ";

    return {
      counter: counter,
      question: question,
      input: input,
      health: health,
    };
  }
}
