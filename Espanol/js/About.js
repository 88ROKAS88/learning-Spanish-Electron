class About {
  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "About";

    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");
    container.appendChild(CreateElement.backButton());

    Espanol.app.appendChild(container);

  }

  static run(variable) {
    console.log("ABOUT " + variable);
    if (variable == "Back") {
      MainMenu.display();
    }
  }
}
