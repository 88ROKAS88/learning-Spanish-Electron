class MainMenu {
  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "MainMenu";
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.button("Numbers"));
    container.appendChild(CreateElement.button("Statistics"));
    container.appendChild(CreateElement.button("Settings"));
    container.appendChild(CreateElement.button("About"));

    Espanol.app.appendChild(container);
  }

  static run(variable) {
    console.log("MAIN MENU " + variable);
    if (variable == "Numbers") {
      Numbers.display();
    } else if (variable == "Statistics") {
      Statistics.display();
    } else if (variable == "Settings") {
      Settings.display();
    }
  }
}
