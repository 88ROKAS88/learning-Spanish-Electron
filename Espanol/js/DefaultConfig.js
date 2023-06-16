class DefaultConfig {
  static path = "./";
  static jsonDir = DefaultConfig.getJsonDir();
  static emptyStatistics = { Numbers: [] };
  static numbers = { numberOfQuestions: 3 };
  // static statistics = Statistics.getStatistics();

  static getJsonDir() {
    var dir = DefaultConfig.path + "json";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    return dir;
  }
}
