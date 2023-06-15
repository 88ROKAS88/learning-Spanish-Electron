const fs = require("fs");

class MyFiles {
  static staticProperty = "someValue";
  static dateISO = new Date().toISOString().split("T")[0];

  static loadJson(path) {
    let rawdata = fs.readFileSync(path);
    let data = JSON.parse(rawdata);
    return data;
  }

  static saveJson(rawdata, path) {
    let data = JSON.stringify(rawdata);
    fs.writeFileSync(path, data);
    // return "static method has been called.";
  }
}
