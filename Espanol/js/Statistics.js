class Statistics {
  static data = [];

  static getStatistics() {
    if (fs.existsSync(DefaultConfig.jsonDir + "/statistics.json")) {
      return MyFiles.loadJson(DefaultConfig.jsonDir + "/statistics.json");
    } else {
      MyFiles.saveJson(
        DefaultConfig.emptyStatistics,
        DefaultConfig.jsonDir + "/statistics.json"
      );
      return DefaultConfig.emptyStatistics;
    }
  }

  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "Statistics";

    // CONTAINER
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());
    container.appendChild(CreateElement.header1("Results", "STATISTICS"));
    // TABLE
    let table = document.createElement("table");
    table.classList.add("table");
    // THEAD
    table.appendChild(
      CreateElement.thead(["Date", "questions", "correct", "incorrect"])
    );
    // TBODY
    let tbody = document.createElement("tbody");

    Statistics.getStatistics()["Numbers"].forEach((item, index) => {
      tbody.appendChild(CreateElement.tr([item[0], item[1], item[2], item[3]]));
    });
    table.appendChild(tbody);

    container.appendChild(table);
    Espanol.app.appendChild(container);
  }

  static saveNumberStatistic(results) {
    let data = Statistics.getStatistics();
    console.log(data["Numbers"][data["Numbers"].length - 1]);
    // console.log("saving statistics in updated row");
    if (data["Numbers"][data["Numbers"].length - 1][0] == MyFiles.dateISO) {
      data["Numbers"][data["Numbers"].length - 1][1] += results[0];
      data["Numbers"][data["Numbers"].length - 1][2] += results[1];
      data["Numbers"][data["Numbers"].length - 1][3] += results[2];
      console.log("saving statistics in updated row");
    } else {
      data["Numbers"].push([
        MyFiles.dateISO,
        results[0],
        results[1],
        results[2],
      ]);
      console.log("saving statistics in new row");
    }
    MyFiles.saveJson(data, DefaultConfig.jsonDir + "/statistics.json");
  }

  static run(variable) {
    console.log("Statistics " + variable);
    if (variable == "Back") {
      MainMenu.display();
    }
  }
}