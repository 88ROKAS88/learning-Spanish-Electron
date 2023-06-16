class Numbers {
  static currentQuestion = 0;
  static rawData = MyData.numbers;
  static data = [];

  static results = [
    { a: "Questions", b: Numbers.data.length },
    { a: "Correct answers", b: 0 },
    { a: "Incorrect answers", b: 0 },
  ];

  static questions() {
    document.querySelector('[espanol = "Question"]').innerText =
      Numbers.data[Numbers.currentQuestion]["e"];
    document.querySelector('[espanol = "AnswerImput"]').value = "";
  }

  static getQuestions() {
    Numbers.data = [];
    let array = Numbers.rawData;
    // shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // get necesary amount of questions
    for (let i = 0; i < DefaultConfig.numbers["numberOfQuestions"]; i++) {
      Numbers.data[i] = array[i];
    }
  }

  static validation(input) {
    if (input.value == Numbers.data[Numbers.currentQuestion]["s"]) {
      // IS VALID
      input.classList.add("is-valid");
      Numbers.currentQuestion++;
      Numbers.results[1]["b"]++;
      if (Numbers.currentQuestion >= Numbers.data.length) {
        console.log("RESULTS");
        Results.display(Numbers.results);
      } else {
        Numbers.questions();
        setTimeout(() => {
          input.classList.remove("is-valid");
        }, 2000);
      }
    } else {
      // IS INVALID
      input.classList.add("is-invalid");
      Numbers.results[2]["b"]++;

      setTimeout(() => {
        input.classList.remove("is-invalid");
      }, 2000);
    }
  }

  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "Numbers";
    Numbers.getQuestions();
    Numbers.currentQuestion = 0;
    Numbers.results[1]["b"] = 0;
    Numbers.results[2]["b"] = 0;
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());
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
