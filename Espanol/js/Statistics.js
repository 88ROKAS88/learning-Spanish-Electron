class Statistics {
  static data = [];
  static currentTab = "Days";
  static container;
  static statisticsData = [];

  static sucessRate(correct, incorrect) {
    let sucess = (100 / (correct + incorrect)) * correct;

    return Math.round(sucess);
  }

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

  static removeCurrentTable(newTab) {
    document
      .querySelector('[espanol = "' + Statistics.currentTab + '"]')
      .classList.remove("active");
    document.querySelector("table").remove();

    Statistics.currentTab = newTab;
    document
      .querySelector('[espanol = "' + Statistics.currentTab + '"]')
      .classList.add("active");
  }

  static displayDays() {
    // document.querySelector('[espanol = "Days"]').classList.add("active");

    // TABLE
    Statistics.container.appendChild(
      CreateElement.table(
        ["Date", "questions", "correct", "incorrect"],
        Statistics.statisticsData["Numbers"]
      )
    );
  }

  static displayNumbers() {
    // DATA
    let data = [];
    Statistics.statisticsData["numersMistakes"].forEach((item, index) => {
      if (item) {
        data[index] = [
          item["n"],
          MyData.numbers[item["n"]]["s"],
          Statistics.sucessRate(item["c"], item["m"]),
        ];
      }
    });
    // TABLE
    Statistics.container.appendChild(
      CreateElement.table(["Number", "Spanish", "Correct %"], data)
    );
  }

  static displayWords() {
    // DATA
    let data = [];
    Statistics.statisticsData["wordsMistakes"].forEach((item, index) => {
      if (item) {
        data[index] = [
          MyData.words[item["n"]]["s"],
          Statistics.sucessRate(item["c"], item["m"]),
        ];
      }
    });
    // TABLE
    Statistics.container.appendChild(
      CreateElement.table(["Word", "Correct %"], data)
    );
  }

  static display() {
    Espanol.app.innerHTML = "";
    Espanol.page = "Statistics";
    Statistics.statisticsData = Statistics.getStatistics();

    // CONTAINER
    let container = document.createElement("div");
    container.classList.add("container", "my-5", "d-flex", "flex-column");
    Statistics.container = container;

    container.appendChild(CreateElement.backButton());
    container.appendChild(CreateElement.header1("Results", "STATISTICS"));

    Espanol.app.appendChild(container);
    // NAV TABS
    container.appendChild(CreateElement.navTabs(["Days", "Numbers", "Words"]));

    // TABLE

    Statistics.displayDays();

    document.querySelector('[espanol = "Days"]').classList.add("active");
    // TABLE 1

    // container.appendChild(
    //   CreateElement.table(
    //     ["Date", "questions", "correct", "incorrect"],
    //     statisticsData["Numbers"]
    //   )
    // );

    // // TABLE 2

    // container.appendChild(
    //   CreateElement.tableMistakes(
    //     ["Number", "Correct", "Incorrect"],
    //     statisticsData["numersMistakes"]
    //   )
    // );
  }

  static saveNumberStatistic(results, mistakes) {
    let data = Statistics.getStatistics();
    // DAYS STATISTICS    
    if ( data["Numbers"].length >0 && data["Numbers"][data["Numbers"].length - 1][0] == MyFiles.dateISO) {
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
    let whichMistakes = "";
    if (Espanol.page == "Numbers") {
      whichMistakes = "numersMistakes";
    } else if (Espanol.page == "Words") {
      whichMistakes = "wordsMistakes";
    }
    mistakes.forEach((item, index) => {
      if (data[whichMistakes][item["n"]]) {
        data[whichMistakes][item["n"]]["c"] += item["c"];
        data[whichMistakes][item["n"]]["m"] += item["m"];
        data[whichMistakes][item["n"]]["t"] = DefaultConfig.date.getTime();
      } else {
        data[whichMistakes][item["n"]] = item;
        data[whichMistakes][item["n"]]["t"] = DefaultConfig.date.getTime();
      }
    });
    // SAVE TO FILE
    MyFiles.saveJson(data, DefaultConfig.jsonDir + "/statistics.json");
  }

  static run(variable) {
    console.log("Statistics " + variable);

    switch (variable) {
      case "Back":
        MainMenu.display();
        break;
      case "Days":
        Statistics.removeCurrentTable(variable);
        Statistics.displayDays();
        break;
      case "Numbers":
        Statistics.removeCurrentTable(variable);
        Statistics.displayNumbers();
        break;
      case "Words":
        Statistics.removeCurrentTable(variable);
        Statistics.displayWords();
        break;
    }
  }
}
