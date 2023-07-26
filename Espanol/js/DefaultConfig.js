class DefaultConfig {
  static path = "./";
  static jsonDir = DefaultConfig.getJsonDir();
  static numbersPath = DefaultConfig.jsonDir + "/ns.json";

  // DEFAULT VALUES
  static defaultNumbers = {
    numberOfQuestions: 3,
    minNumber: 0,
    maxNumber: 100,
  };
  static emptyStatistics = { Numbers: [], numersMistakes: [] };

  static numbers = DefaultConfig.loadOrCreateFile(
    DefaultConfig.numbersPath,
    DefaultConfig.defaultNumbers
  );
  // static statistics = Statistics.getStatistics();

  static getJsonDir() {
    var dir = DefaultConfig.path + "json";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    return dir;
  }

  static loadOrCreateFile(fileLocation, defaultValues) {
    if (fs.existsSync(fileLocation)) {
      return MyFiles.loadJson(fileLocation);
    } else {
      MyFiles.saveJson(defaultValues, fileLocation);
      return defaultValues;
    }
  }
}
