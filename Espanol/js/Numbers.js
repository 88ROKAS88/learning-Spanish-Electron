class Numbers {
  static currentQuestion = 0;
  static data = [
    { e: "zero", s: "cero" },
    { e: "one", s: "uno" },
    // { e: "two", s: "dos" },
    // { e: "three", s: "tres" },
    // { e: "four", s: "cuatro" },
    // { e: "five", s: "cinco" },
    // { e: "six", s: "seis" },
    // { e: "seven", s: "siete" },
    // { e: "eight", s: "ocho" },
    // { e: "nine", s: "nueve" },
    // { e: "ten", s: "diez" },
  ];

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
