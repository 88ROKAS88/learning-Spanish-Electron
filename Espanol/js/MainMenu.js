class MainMenu {
  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "MainMenu";
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.button("Numbers"));
    container.appendChild(CreateElement.button("Settings"));
    container.appendChild(CreateElement.button("About"));

    return container;
  }

  static run(variable) {
    console.log("MAIN MENU " + variable);
  }
}
