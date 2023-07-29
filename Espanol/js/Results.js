class Results {
  static data = [];
  static display(mistakes) {
    Espanol.app.innerHTML = "";
    Espanol.page = "Results";
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());
    container.appendChild(CreateElement.header1("Results", "RESULTS"));
    console.log(mistakes);

    container.appendChild(
      CreateElement.tableMistakes(["Number", "Correct", "Incorrect"], mistakes)
    );

    Espanol.app.appendChild(container);

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    mistakes.forEach((item, index) => {
      correctAnswers += item["c"];
      incorrectAnswers += item["m"];
    });
    Statistics.saveNumberStatistic(
      [mistakes.length, correctAnswers, incorrectAnswers],
      mistakes
    );
  }

  static run(variable) {
    console.log("RESULTS " + variable);
    // console.log(document.querySelector('[espanol = "AnswerImput"]').value);
    if (variable == "Back") {
      MainMenu.display();
    }
  }
}
