class CreateElement {
  static button(text) {
    // <button type="button" class="btn btn-primary">Primary</button>

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("espanol", text);
    button.classList.add("btn", "btn-primary", "my-1", "col-6", "offset-3");
    button.innerText = text;

    return button;
  }
}
