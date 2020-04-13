//you were able to get the first four columns to check if you've won horozontally. Now you need to check if you
//have won in the other three columns horizontally. Also don't forget to check vertically and diagonally.
document.addEventListener("DOMContentLoaded", () =>{

  let turn = 0;

  let replace = "";

  //the col1-col7 allows me to keep track of how many pieces are in a given column.

  let col1 = {
    count : 0
  };
  let col2 = {
    count : 0
  };
  let col3 = {
    count : 0
  };
  let col4 = {
    count : 0
  };
  let col5 = {
    count : 0
  };
  let col6 = {
    count : 0
  };
  let col7 = {
    count : 0
  };


  //the win() function displays an appropriate winning message.
  win = () =>{
    document.getElementById("winningMessage").innerText = "Congratulations! Player " + replace + " has won!";
  }


  //checkFlat() checks all horizontal winning combinations that include the space the user just added a tile to. returns true if there is a winning combination, false otherwise
  checkFlat = (row, col) =>{
      for (let i = 1; i <= 4; i = i+1)
      {
        let box1 = document.getElementById("" + row + "x" + i).innerText;
        let box2 = document.getElementById("" + row + "x" + (i+1)).innerText;
        let box3 = document.getElementById("" + row + "x" + (i+2)).innerText;
        let box4 = document.getElementById("" + row + "x" + (i+3)).innerText;

        if ((box1 == box2 && box2 == box3 && box3 == box4) && box1 != "[ ]")
        {
          return true;
        }
      }
      for (let i = 7; i > 4; i = i-1)
      {
        let box1 = document.getElementById("" + row + "x" + i).innerText;
        let box2 = document.getElementById("" + row + "x" + (i-1)).innerText;
        let box3 = document.getElementById("" + row + "x" + (i-2)).innerText;
        let box4 = document.getElementById("" + row + "x" + (i-3)).innerText;

        if ((box1 == box2 && box2 == box3 && box3 == box4) && box1 != "[ ]")
        {
          return true;
        }
      }
    return false
  }

  //checkVert() checks all vertical winning combinations that include the space the player just added to. Returns true if there's a winning combination, false otherwise.
  checkVert = (row, col) =>{
    for (let i = 1; i <= 3; i = i+1)
    {
      let box1 = document.getElementById("" + i + "x" + col).innerText;
      let box2 = document.getElementById("" + (i+1) + "x" + col).innerText;
      let box3 = document.getElementById("" + (i+2) + "x" + col).innerText;
      let box4 = document.getElementById("" + (i+3) + "x" + col).innerText;

      if ((box1 == box2 && box2 == box3 && box3 == box4) && box1 != "[ ]")
      {
        return true;
      }
    }
    for (let i = 6; i > 3; i = i-1)
    {
      let box1 = document.getElementById("" + i + "x" + col).innerText;
      let box2 = document.getElementById("" + (i-1) + "x" + col).innerText;
      let box3 = document.getElementById("" + (i-2) + "x" + col).innerText;
      let box4 = document.getElementById("" + (i-3) + "x" + col).innerText;

      if ((box1 == box2 && box2 == box3 && box3 == box4) && box1 != "[ ]")
      {
        return true;
      }
    }
  return false
  }

  //checks all possible diagonal winning combinations that go upwards. returns true if winning combination found, false otherwise
  checkForwardDiagonal = () =>{
    for (let row = 1; row <=3; row = row+1)
    {
      for (let col = 1; col <=4; col = col+1)
      {
        let box1 = document.getElementById("" + row + "x" + col).innerText;
        let box2 = document.getElementById("" + (row+1) + "x" + (col+1)).innerText;
        let box3 = document.getElementById("" + (row+2) + "x" + (col+2)).innerText;
        let box4 = document.getElementById("" + (row+3) + "x" + (col+3)).innerText;

        if ((box1 == box2 && box2 == box3 && box3 == box4) && box1 != "[ ]")
        {
          return true;
        }

      }
    }
    return false;
  }

  //checks all diagonal combinations in which the diagonal goes downwards. returns true if winning combination found, false otherwise.
  checkBackwardDiagonal = () =>{
    for (let row = 1; row <=3; row = row+1)
    {
      for (let col = 7; col >=4; col = col-1)
      {
        let box1 = document.getElementById("" + row + "x" + col).innerText;
        let box2 = document.getElementById("" + (row+1) + "x" + (col-1)).innerText;
        let box3 = document.getElementById("" + (row+2) + "x" + (col-2)).innerText;
        let box4 = document.getElementById("" + (row+3) + "x" + (col-3)).innerText;

        if ((box1 == box2 && box2 == box3 && box3 == box4) && box1 != "[ ]")
        {
          return true;
        }

      }
    }
    return false;
  }



  document.querySelector("#col1").addEventListener("click", (e)=>{ //the following code (until line 161) runs when the button called "col1" is clicked.
    col1.count = col1.count +1;
    col1.count.toString();
    if (turn % 2 == 0){ //boolean statement to control which tile piece is added, depending on turn number.
      replace = "[X]";
    }
    else {
      replace = "[O]";
    }
    document.getElementById(col1.count + "x1").innerText = replace; //replaces innertext of the cells of a table with the game piece

    if (checkFlat(col1.count, 1) || checkVert(col1.count, 1) || checkForwardDiagonal() || checkBackwardDiagonal()){
      win(); //if winning combination found, then winning message is displayed.
    }
    else {
      turn = turn+1; //increments the turn number if there is no win yet.
    }

  })

  
  //the following code blocks are the same as the block from line 141-160, the only difference is that they are for the different
  //columns of the game board.
  document.querySelector("#col2").addEventListener("click", (e)=>{
    col2.count = col2.count +1;
    col2.count.toString();
    if (turn % 2 == 0){
      replace = "[X]";
    }
    else {
      replace = "[O]";
    }
    document.getElementById(col2.count + "x2").innerText = replace;
    if (checkFlat(col2.count, 2) || checkVert(col2.count, 2) || checkForwardDiagonal() || checkBackwardDiagonal()){
      win();
    }
    else {
      turn = turn+1;
    }
  })

  document.querySelector("#col3").addEventListener("click", (e)=>{
    col3.count = col3.count +1;
    col3.count.toString();
    if (turn % 2 == 0){
      replace = "[X]";
    }
    else {
      replace = "[O]";
    }
    document.getElementById(col3.count + "x3").innerText = replace;
    if (checkFlat(col3.count, 3) || checkVert(col3.count, 3) || checkForwardDiagonal() || checkBackwardDiagonal()){
      win();
    }
    else {
      turn = turn+1;
    }
  })

  document.querySelector("#col4").addEventListener("click", (e)=>{
    col4.count = col4.count +1;
    col4.count.toString();
    if (turn % 2 == 0){
      replace = "[X]";
    }
    else {
      replace = "[O]";
    }
    document.getElementById(col4.count + "x4").innerText = replace;
    if (checkFlat(col4.count, 4) || checkVert(col4.count, 4) || checkForwardDiagonal() || checkBackwardDiagonal()){
      win();
    }
    else {
      turn = turn+1;
    }
  })

  document.querySelector("#col5").addEventListener("click", (e)=>{
    col5.count = col5.count +1;
    col5.count.toString();
    if (turn % 2 == 0){
      replace = "[X]";
    }
    else { replace = "[O]";
    }
    document.getElementById(col5.count + "x5").innerText = replace;
    if (checkFlat(col5.count, 5) || checkVert(col5.count, 5) || checkForwardDiagonal() || checkBackwardDiagonal()){
      win();
    }
    else {
      turn = turn+1;
    }
  })

  document.querySelector("#col6").addEventListener("click", (e)=>{
    col6.count = col6.count +1;
    col6.count.toString();
    if (turn % 2 == 0){
      replace = "[X]";
    }
    else {
      replace = "[O]";
    }
    document.getElementById(col6.count + "x6").innerText = replace;
    if (checkFlat(col6.count, 6) || checkVert(col6.count, 6) || checkForwardDiagonal() || checkBackwardDiagonal()){
      win();
    }
    else {
      turn = turn+1;
    }
  })

  document.querySelector("#col7").addEventListener("click", (e)=>{
    col7.count = col7.count +1;
    col7.count.toString();
    if (turn % 2 == 0){
      replace = "[X]";
    }
    else {
      replace = "[O]";
    }
    document.getElementById(col7.count + "x7").innerText = replace;
    if (checkFlat(col7.count, 7) || checkVert(col7.count, 7) || checkForwardDiagonal() || checkBackwardDiagonal()){
      win();
    }
    else {
      turn = turn+1;
    }
  })

})
