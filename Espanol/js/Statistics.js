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
    let statisticsData = Statistics.getStatistics();

    // CONTAINER
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");

    container.appendChild(CreateElement.backButton());
    container.appendChild(CreateElement.header1("Results", "STATISTICS"));

    // TABLE 1

    container.appendChild(
      CreateElement.table(
        ["Date", "questions", "correct", "incorrect"],
        statisticsData["Numbers"]
      )
    );

    // TABLE 2

    container.appendChild(
      CreateElement.tableMistakes(
        ["Number", "Correct", "Incorrect"],
        statisticsData["numersMistakes"]
      )
    );

    Espanol.app.appendChild(container);
  }

  static saveNumberStatistic(results, mistakes) {
    let data = Statistics.getStatistics();
    // DAYS STATISTICS
    if (data["Numbers"][data["Numbers"].length - 1][0] == MyFiles.dateISO) {
      data["Numbers"][data["Numbers"].length - 1][1] += results[0];
      data["Numbers"][data["Numbers"].length - 1][2] += results[1];
      data["Numbers"][data["Numbers"].length - 1][3] += results[2];
    } else {
      data["Numbers"].push([
        MyFiles.dateISO,
        results[0],
        results[1],
        results[2],
      ]);
    }
    // MISTAKES STATISTICS
    mistakes.forEach((item, index) => {
      if (data["numersMistakes"][item["n"]]) {
        data["numersMistakes"][item["n"]]["c"] += item["c"];
        data["numersMistakes"][item["n"]]["m"] += item["m"];
      } else {
        data["numersMistakes"][item["n"]] = item;
      }
    });
    // SAVE TO FILE
    MyFiles.saveJson(data, DefaultConfig.jsonDir + "/statistics.json");
  }

  static run(variable) {
    console.log("Statistics " + variable);
    if (variable == "Back") {
      MainMenu.display();
    }
  }
}
