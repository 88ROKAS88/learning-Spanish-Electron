class Sentences {
    
    static display() {
      Espanol.page = "Sentences";
      let statisticsData = Statistics.getStatistics();
  

      // display
      Espanol.app.innerHTML = "";

      let container = document.createElement("div");
      container.classList.add("container", "my-5", "d-flex", "flex-column");
  
      container.appendChild(CreateElement.backButton());
  
  
      Espanol.app.appendChild(container);
    }
  
    static run(variable) {
      console.log("SENTENCES " + variable);
      if (variable == "Submit") {
        // Words.test.validateAnswer(
        //   document.querySelector('[espanol = "AnswerImput"]')
        // );
      } else if (variable == "Back") {
        MainMenu.display();
      }
    }
  }
  