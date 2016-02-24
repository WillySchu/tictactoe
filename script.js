var sqs = document.getElementsByClassName("sq");
var button = document.getElementsByTagName("button")[0];
var row1 = document.getElementsByClassName("row1");
var row2 = document.getElementsByClassName("row2");
var row3 = document.getElementsByClassName("row3");
var grid = [[null, null, null],[null, null, null],[null, null, null]];
var j = 0;
var counth = 0;
var countv = 0;
var countd1 = 0;
var countd2 = 0;

function go(event){
  var celli = parseInt(this.id[0]);
  var cellj = parseInt(this.id[1]);
  var cpuMove;
  if(this.classList.contains("clicked")){
    console.log("clicked");
  } else {
    this.className += " clicked";
    if(j % 2 === 0){
      this.innerHTML = "<p>X</p>";
      this.className += " x";
      grid[celli][cellj] = "x";
    } else {
      this.innerHTML = "<p>O</p>"
      this.className += " o";
      grid[celli][cellj] = "o";
    }
    j++;
    console.log(grid);
    if(vTest(grid)){
      alert(vTest(grid));
    }
    cpuMove = document.getElementById(minimax());
    cpuMove.innerHTML = "<p>O</p>";
    cpuMove.className += " o clicked";
    j++;
    console.log(grid);
    if(vTest(grid)){
      alert(vTest(grid));
    }
  }
}


function reset(event){
  console.log("reset");
  for (var i = 0; i < sqs.length; i++) {
    sqs[i].innerHTML = "";
    sqs[i].className = "sq";
  }
  grid = [[null, null, null],[null, null, null],[null, null, null]];
  countv = 0;
  counth = 0;
  countd1 = 0;
  countd2 = 0;
  j = 0;
}

for (var i = 0; i < sqs.length; i++) {
  sqs[i].addEventListener("click", go);
}

button.addEventListener("click", reset);

function vTest(grid){
  var x;
  for (var a = 0; a < 2; a++) {

    if(a % 2){
      x = "x";
    } else {
      x = "o";
    }

    for (var i = 0; i < grid.length; i++) {
      counth = 0;
      countv = 0;
      countd1 = 0;
      countd2 = 0;
      for (var k = 0; k < grid[i].length; k++) {
        if(grid[i][k] !== x){
          counth = 0;
        }else {
          counth++;
          if(counth === 3){
            return x;
          }
        }
        if(grid[k][i] !== x){
          countv = 0;
        }else{
          countv++;
          if(countv === 3){
            return x;
          }
        }
        if(grid[k][k] !== x){
          countd1 = 0;
        }else{
          countd1++;
          if(countd1 === 3){
            return x;
          }
        }
        if(grid[k][2 - k] !== x){
          countd2 = 0;
        }else{
          countd2++;
          if(countd2 === 3){
            return x;
          }
        }
      }
    }

  }
}

function makeVGrid(grid){
  var vGrid = [[],[],[]];
  for (var i = 0; i < grid.length; i++) {
    for (var k = 0; k < grid[i].length; k++) {
      vGrid[i][k] = grid[i][k];
    }
  }
  return vGrid;
}

function nextStates(grid, x) {
  var states = [];
  var vGrid = [[],[],[]];
  for (var i = 0; i < grid.length; i++) {
    for (var k = 0; k < grid[i].length; k++) {
      vGrid = makeVGrid(grid);
      dGrid = makeVGrid(grid);
      if(!vGrid[i][k]){
        vGrid[i][k] = x;
        states.push(vGrid);
      }
    }
  }
  return states;
}

function minimax(){
  var move;
  var stateso = nextStates(grid, "o");
  var statesx = nextStates(grid, "x");
  if(j % 2){
    for (var i = 0; i < statesx.length; i++) {
      if(vTest(stateso[i]) === "o"){
        for (var l = 0; l < grid.length; l++) {
          for (var k = 0; k < grid[l].length; k++) {
            if(stateso[i][l][k] !== grid[l][k]){
              console.log("solution for o");
              console.log("" + l + k);
              grid[l][k] = stateso[i][l][k];
              return "" + l + k;
            }
          }
        }
      }
    }
    for (var i = 0; i < statesx.length; i++) {
      if(vTest(statesx[i]) === "x"){
        for (var l = 0; l < grid.length; l++) {
          for (var k = 0; k < grid[l].length; k++) {
            if(statesx[i][l][k] !== grid[l][k]){
              console.log("solution");
              console.log("" + l + k);
              grid[l][k] = stateso[i][l][k];
              return "" + l + k;
            }
          }
        }
      }
    }
    for (var l = 0; l < grid.length; l++) {
      for (var k = 0; k < grid[l].length; k++) {
        if(stateso[stateso.length - 1][l][k] !== grid[l][k]){
          console.log("solution");
          console.log("" + l + k);
          grid[l][k] = stateso[stateso.length - 1][l][k];
          return "" + l + k;
        }
      }
    }
  }
}
