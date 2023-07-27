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
        "Number of random questions",
        "numberQuestions",
        DefaultConfig.numbers["numberOfQuestions"]
      )
    );

    container.appendChild(
      CreateElement.settingsInput(
        "Number of additional questions",
        "additionalQuestions",
        DefaultConfig.numbers["additionalQuestions"]
      )
    );

    container.appendChild(
      CreateElement.settingsInput(
        "Lowest number in questions",
        "numbersFrom",
        DefaultConfig.numbers["minNumber"]
      )
    );

    container.appendChild(
      CreateElement.settingsInput(
        "Biggest number in questions",
        "numbersTo",
        DefaultConfig.numbers["maxNumber"]
      )
    );

    container.appendChild(CreateElement.button("Save"));

    Espanol.app.appendChild(container);
  }

  static save() {
    // GET VALUES
    // numbers
    // number of questions
    let numberOfQuestions = document.querySelector(
      '[espanol = "numberQuestions"]'
    ).value;
    // number of additional questions
    let additionalQuestions = document.querySelector(
      '[espanol = "additionalQuestions"]'
    ).value;
    // min number
    let minNumber = document.querySelector('[espanol = "numbersFrom"]').value;
    // max number
    let maxNumber = document.querySelector('[espanol = "numbersTo"]').value;

    // SAVE NEW VALUES
    DefaultConfig.numbers["numberOfQuestions"] = numberOfQuestions;
    DefaultConfig.numbers["additionalQuestions"] = additionalQuestions;
    DefaultConfig.numbers["minNumber"] = minNumber;
    DefaultConfig.numbers["maxNumber"] = maxNumber;

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
