class Results {
  static data = [];
  static display(mistakes) {
    Espanol.app.innerHTML = "";
    // Espanol.page = "Results";
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());
    container.appendChild(CreateElement.header1("Results", "RESULTS"));
    console.log(mistakes);

    if (Espanol.page == "Words") {
      let wordsMistakes = [];

      mistakes.forEach((item, index) => {
        wordsMistakes[index] = [
          MyData.words[item["n"]]["s"],
          item["c"],
          item["m"],
        ];
      });

      container.appendChild(
        CreateElement.table(["Words", "Correct", "Incorrect"], wordsMistakes)
      );
    } else {
      container.appendChild(
        CreateElement.tableMistakes(
          ["Number", "Correct", "Incorrect"],
          mistakes
        )
      );
    }

    Espanol.app.appendChild(container);

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    mistakes.forEach((item, index) => {
      correctAnswers += item["c"];
      incorrectAnswers += item["m"];
    });
    // if (Espanol.page == "Numbers") {
    // console.log("save number mistakes");
    Statistics.saveNumberStatistic(
      [mistakes.length, correctAnswers, incorrectAnswers],
      mistakes
    );
    // }
  }

  static run(variable) {
    console.log("RESULTS " + variable);
    // console.log(document.querySelector('[espanol = "AnswerImput"]').value);
    if (variable == "Back") {
      MainMenu.display();
    }
  }
}
