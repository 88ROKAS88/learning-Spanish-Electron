class Results {
  static data = [];
  static display(freshData) {
    Espanol.app.innerHTML = "";
    Espanol.page = "Results";
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());
    container.appendChild(CreateElement.header1("Results", "RESULTS"));
    console.log(freshData);
    freshData.forEach((item, index) => {
      container.appendChild(
        CreateElement.header1("Results", item.a + " " + item.b)
      );
    });

    Espanol.app.appendChild(container);

    Statistics.saveNumberStatistic([
      freshData[0]["b"],
      freshData[1]["b"],
      freshData[2]["b"],
    ]);
  }

  static run(variable) {
    console.log("RESULTS " + variable);
    // console.log(document.querySelector('[espanol = "AnswerImput"]').value);
    if (variable == "Back") {
      MainMenu.display();
    }
  }
}
