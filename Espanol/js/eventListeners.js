app.addEventListener("click", (e) => {
  let targetID = e.target.getAttribute("espanol");
  //   console.log(e.target);
  //   console.log(targetID);
  if (Espanol.page == "MainMenu") {
    MainMenu.run(targetID);
  } else if (Espanol.page == "Numbers") {
    Numbers.run(targetID);
  } else if (Espanol.page == "Results") {
    Results.run(targetID);
  } else if (Espanol.page == "Statistics") {
    Statistics.run(targetID);
  } else if (Espanol.page == "Settings") {
    Settings.run(targetID);
  }
});

window.addEventListener("keydown", (e) => {
  if (Espanol.page == "Numbers") {
    if (e.key == "Enter") Numbers.run("Submit");
  }
});
