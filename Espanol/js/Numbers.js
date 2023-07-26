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
    // get necessary questions
    // let array = Numbers.rawData;
    let array = [];
    for (
      let q = +DefaultConfig.numbers["minNumber"];
      q <= +DefaultConfig.numbers["maxNumber"];
      q++
    ) {
      array.push(Numbers.rawData[q]);
    }
    console.log(array);
    // shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // get necesary amount of questions
    for (let i = 0; i < randomQuestions; i++) {
      Numbers.data[i] = array[i];

      Numbers.mistakes[i] = { n: array[i]["n"], c: 0, m: 0 }; // Number , Corrrect , Mistake
    }

    // add never asked questions
    let statisticsData = Statistics.getStatistics();
    let j = 0;
    let index = randomQuestions;
    while (j < 3) {
      if (index >= array.length) {
        break;
      }
      if (statisticsData["numersMistakes"][array[index]["n"]] == null) {
        j++;
        Numbers.data[randomQuestions - 1 + j] = array[index];

        Numbers.mistakes[randomQuestions - 1 + j] = {
          n: array[index]["n"],
          c: 0,
          m: 0,
        }; // Number , Corrrect , Mistake
      }
      index++;
    }
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
