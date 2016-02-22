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
  console.log("click");
  if(this.classList.contains("clicked")){
    console.log("clicked");
  }else {
    this.className += " clicked";
    if(j % 2 === 0){
      this.innerHTML = "<p>X</p>";
      this.className += " x";
      grid[parseInt(this.id[0])][parseInt(this.id[1])] = "x";
      console.log(grid);
    }else {
      this.innerHTML = "<p>O</p>"
      this.className += " o";
      grid[parseInt(this.id[0])][parseInt(this.id[1])] = "o";
      console.log(grid);
    }
    j++;
    vTest();
  }
}

function reset(event){
  console.log("reset");
  for (var i = 0; i < sqs.length; i++) {
    sqs[i].innerHTML = "";
    sqs[i].className = "sq";
    grid = [[],[],[]];
  }
}

for (var i = 0; i < sqs.length; i++) {
  sqs[i].addEventListener("click", go);
}

button.addEventListener("click", reset);

function vTest(){
  var x;
  if(j % 2){
    x = "x";
  } else {
    x = "o";
  }

  for (var i = 0; i < grid.length; i++) {
    for (var k = 0; k < grid[i].length; k++) {
      if(grid[i][k] !== x){
        counth = 0;
      }else {
        counth++;
        console.log(counth);
        if(counth === 3){
          alert("Victory " + x);
          return "Victory " + x;
        }
      }
      if(grid[k][i] !== x){
        countv = 0;
      }else{
        countv++;
        if(countv === 3){
          alert("Victory " + x);
          return "Victory " + x;
        }
      }
      if(grid[k][k] !== x){
        countd1 = 0;
      }else{
        countd1++;
        if(countd1 === 3){
          alert("Victory " + x);
          return "Victory " + x;
        }
      }
      if(grid[k][2 - k] !== x){
        countd2 = 0;
      }else{
        countd2++;
        if(countd2 === 3){
          alert("Victory " + x);
          return "Victory " + x;
        }
      }
    }
  }


  // for (var i = 0; i < 3; i++) {
  //   if(row1[i].classList.contains(x) || row2[i].classList.contains(x) || row3[i].classList.contains(x)){
  //     console.log(i);
  //   }else{
  //     console.log(i);
  //     return;
  //   }
  // }
  // alert("Victory " + x);
  // return "Victory " + x;

  // if(sqs[0].classList.contains(x)){
  //   console.log("1");
  //   if(sqs[1].classList.contains(x)){
  //     console.log("2");
  //     if(sqs[2].classList.contains(x)){
  //       alert("Victory " + x);
  //       return "Victory " + x;
  //     }
  //   }
  //   if(sqs[3].classList.contains(x)){
  //     if(sqs[6].classList.contains(x)){
  //       alert("Victory " + x);
  //       return "Victory " + x;
  //     }
  //   }
  // }
}
