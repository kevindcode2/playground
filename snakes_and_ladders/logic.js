window.onload = function() {
  const ApplicationLogic = {
    rollDice: function(player) {
      var self = this;
      self.generateRandNum(1,7);
    },
    generateRandNum: function (min, max) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    createBoard: function() {

      let getBoard = document.getElementById("board");
      let createTable = document.createElement("table");
      let counter = 0;
 
      for (let i = 0; i < 10; i++) { // row
        let row = document.createElement("tr");
        row.setAttribute("class", `row row-${i+1}`);
        createTable.appendChild(row);
        for (let j = 0; j < 10; j++) { // columns
          let col = document.createElement("td");
          col.setAttribute("class", `col col-${j+1}`);
          row.appendChild(col);
        }
      }
      getBoard.appendChild(createTable);

    },
    setup: function() {
      this.createBoard();

      // initialise number of players
    }
  }.setup();
};
