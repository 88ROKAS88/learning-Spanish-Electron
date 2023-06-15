class CreateElement {
  // #### MENU BUTTON ####
  static button(text) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("espanol", text);
    button.classList.add("btn", "btn-primary", "my-1", "col-6", "offset-3");
    button.innerText = text;
    return button;
  }

  // #### BACK BUTTON ####
  static backButton() {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("espanol", "Back");
    button.classList.add("btn", "btn-danger", "mb-5", "col-3");
    button.innerText = "Back";
    return button;
  }

  // #### H1 ####
  static header1(name, text) {
    let header = document.createElement("h1");
    header.setAttribute("espanol", name);
    header.classList.add("my-1", "text-center");
    header.innerText = text;
    return header;
  }

  // #### ANSWERT INPUT ####
  static answerInput() {
    // DIV
    let div = document.createElement("div");
    div.classList.add("my-1", "input-group");
    // BUTTON
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("espanol", "Submit");
    button.classList.add("btn", "btn-outline-secondary");
    button.innerText = "Submit";
    // INPUT
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("espanol", "AnswerImput");
    input.classList.add("form-control");

    div.appendChild(input);
    div.appendChild(button);
    return div;
  }

  // #### THEAD ####
  static thead(thNames) {
    // THEAD
    let thead = document.createElement("thead");
    let tHeadRow = document.createElement("tr");
    // TH
    thNames.forEach((item, index) => {
      let th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerText = item;
      tHeadRow.appendChild(th);
    });

    thead.appendChild(tHeadRow);
    return thead;
  }

  // #### TR ####
  static tr(data) {
    // TR
    let tr = document.createElement("tr");
    // TD
    data.forEach((item, index) => {
      let td = document.createElement("td");
      // td.setAttribute("scope", "col");
      td.innerText = item;
      tr.appendChild(td);
    });

    return tr;
  }
}
