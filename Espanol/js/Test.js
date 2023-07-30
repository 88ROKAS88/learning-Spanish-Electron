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
    this.gui["question"].innerText = this.questions[this.currentQuestion]["e"];
    document.querySelector('[espanol = "AnswerImput"]').value = "";
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
      //   Numbers.results[2]["b"]++;

      if (this.mistakes[this.currentQuestion]["m"] > 2) {
        this.currentQuestion++;
        if (this.currentQuestion >= this.questions.length) {
          console.log("RESULTS");
          Results.display(Numbers.mistakes);
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

    const counter = CreateElement.header1(
      "QuestionNumber",
      this.currentQuestion + 1 + " / " + this.questions.length
    );
    container.appendChild(counter);

    container.appendChild(
      CreateElement.header1("Title", "Translate English to Spanish")
    );

    const question = CreateElement.header1(
      "Question",
      this.questions[this.currentQuestion]["e"]
    );
    container.appendChild(question);

    container.appendChild(CreateElement.answerInput());

    Espanol.app.appendChild(container);

    return { counter: counter, question: question };
  }
}
