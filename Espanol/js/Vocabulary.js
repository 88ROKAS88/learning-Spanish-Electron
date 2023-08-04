class Vocabulary {
  static container;
  static currentTab = "Numbers";

  static displayNumbers() {
    // DATA
    let data = [];
    MyData.numbers.forEach((item, index) => {
      data[index] = [item["n"], item["e"], item["s"]];
    });
    // TABLE
    Vocabulary.container.appendChild(
      CreateElement.table(["Number", "English", "Spanish"], data)
    );
  }

  static displayWords() {
    // DATA
    let data = [];
    MyData.words.forEach((item, index) => {
      data[index] = [item["n"], item["e"], item["s"]];
    });
    // TABLE
    Vocabulary.container.appendChild(
      CreateElement.table(["#", "English", "Spanish"], data)
    );
  }

  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "Vocabulary";

    // CONTAINER
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");
    Vocabulary.container = container;

    container.appendChild(CreateElement.backButton());
    container.appendChild(CreateElement.header1("Results", "VOCABULARY"));

    Espanol.app.appendChild(container);
    // NAV TABS
    container.appendChild(CreateElement.navTabs(["Numbers", "Words"]));

    // TABLE

    Vocabulary.displayNumbers();

    document.querySelector('[espanol = "Numbers"]').classList.add("active");
  }

  static removeCurrentTable(newTab) {
    document
      .querySelector('[espanol = "' + Vocabulary.currentTab + '"]')
      .classList.remove("active");
    document.querySelector("table").remove();

    Vocabulary.currentTab = newTab;
    document
      .querySelector('[espanol = "' + Vocabulary.currentTab + '"]')
      .classList.add("active");
  }

  static run(variable) {
    console.log("Vocabulary " + variable);

    switch (variable) {
      case "Back":
        MainMenu.display();
        break;
      case "Numbers":
        Vocabulary.removeCurrentTable(variable);
        Vocabulary.displayNumbers();
        break;
      case "Words":
        Vocabulary.removeCurrentTable(variable);
        Vocabulary.displayWords();
        break;
    }
  }
}
