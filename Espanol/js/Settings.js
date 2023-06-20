class Settings {
  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "Settings";

    // CONTAINER
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());

    container.appendChild(CreateElement.header1("Settings", "Number settings"));

    container.appendChild(
      CreateElement.settingsInput(
        "Number of questions",
        "numberQuestions",
        DefaultConfig.numbers["numberOfQuestions"]
      )
    );

    container.appendChild(CreateElement.button("Save"));

    Espanol.app.appendChild(container);
  }

  static save() {
    // GET VALUES
    // numbers
    let numberOfQuestions = document.querySelector(
      '[espanol = "numberQuestions"]'
    ).value;

    // SAVE NEW VALUES
    DefaultConfig.numbers["numberOfQuestions"] = numberOfQuestions;

    MyFiles.saveJson(DefaultConfig.numbers, DefaultConfig.numbersPath);
  }

  static run(variable) {
    if (variable == "Back") {
      MainMenu.display();
    } else if (variable == "Save") {
      Settings.save();
    }
  }
}
