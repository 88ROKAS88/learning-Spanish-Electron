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

    // INPUT
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("espanol", "AnswerImput");
    input.classList.add("form-control");

    // BUTTON
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("espanol", "Submit");
    button.classList.add("btn", "btn-outline-secondary");
    button.innerText = "Submit";

    div.appendChild(input);
    div.appendChild(button);
    return div;
  }

  // #### QUESTION ####
  static question() {
    // DIV
    let div = document.createElement("div");
    div.classList.add("my-1", "input-group");

    // SPAN
    let span = document.createElement("span");
    span.classList.add("input-group-text");
    span.setAttribute("espanol", "QuestionNumber");

    // INPUT
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("espanol", "Question");
    input.classList.add("form-control");
    input.disabled = true;

    // SPAN
    // let health = document.createElement("span");
    // health.classList.add("input-group-text");
    // health.setAttribute("espanol", "Health");

    div.appendChild(span);
    div.appendChild(input);
    // div.appendChild(health);
    return div;
  }

  // #### HINT ####
  static hint() {
    // DIV
    let div = document.createElement("div");
    div.classList.add("my-1", "input-group");

    // SPAN
    let span = document.createElement("span");
    span.classList.add("input-group-text");
    span.setAttribute("espanol", "HintTitle");

    // INPUT
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("espanol", "Hint");
    input.classList.add("form-control");
    input.disabled = true;

    div.appendChild(span);
    div.appendChild(input);    
    return div;
  }

  // #### SETTINGS INPUT ####
  static settingsInput(title, attirbuteValue, value) {
    // DIV
    let div = document.createElement("div");
    div.classList.add("my-1", "input-group");
    // SPAN
    let span = document.createElement("span");
    span.innerText = title;
    // button.setAttribute("type", "button");
    // button.setAttribute("espanol", "Submit");
    span.classList.add("input-group-text");
    // span.innerText = "Submit";
    // INPUT
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("espanol", attirbuteValue);
    input.classList.add("form-control");
    input.value = value;

    div.appendChild(span);
    div.appendChild(input);
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

  // #### TABLE ####
  static table(thNames, data) {
    // TABLE
    let table = document.createElement("table");
    table.classList.add("table");
    // THEAD
    table.appendChild(CreateElement.thead(thNames));
    // TBODY
    let tbody = document.createElement("tbody");

    data.forEach((item, index) => {
      tbody.appendChild(CreateElement.tr(item));
    });
    table.appendChild(tbody);

    return table;
  }

  // #### TABLE MISTAKES ####
  static tableMistakes(thNames, data) {
    // TABLE
    let table = document.createElement("table");
    table.classList.add("table");
    // THEAD
    table.appendChild(CreateElement.thead(thNames));
    // TBODY
    let tbody = document.createElement("tbody");

    data.forEach((item, index) => {
      if (item) {
        tbody.appendChild(CreateElement.tr([item["n"], item["c"], item["m"]]));
      }
    });
    table.appendChild(tbody);

    return table;
  }

  // #### NAV TABS ITEM ####
  static navTabsItem(tabName) {
    let navTab = document.createElement("li");
    navTab.classList.add("nav-item");

    let a = document.createElement("a");
    a.classList.add("nav-link");
    a.setAttribute("espanol", tabName);
    a.innerText = tabName;

    navTab.appendChild(a);

    return navTab;
  }

  // #### NAV TABS ####
  static navTabs(tabNameArray) {
    // NAV TABS
    let navTabs = document.createElement("ul");
    navTabs.classList.add("nav", "nav-tabs");

    tabNameArray.forEach((item, index) => {
      navTabs.appendChild(CreateElement.navTabsItem(item));
    });

    return navTabs;
  }

  // #### ALERT ####
  static alert(text, type) {
    // DIV
    let div = document.createElement("div");
    div.classList.add("alert", type);
    div.innerText = text;
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";

    return div;
  }
}
