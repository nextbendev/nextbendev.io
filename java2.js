// VAR'S
var boxes = {
  box1: document.querySelector("#box-1"),
  box2: document.querySelector("#box-2"),
  box3: document.querySelector("#box-3"),
  box4: document.querySelector("#box-4"),
  box5: document.querySelector("#box-5"),
  box6: document.querySelector("#box-6"),
  box7: document.querySelector("#box-7"),
  box8: document.querySelector("#box-8"),
  box9: document.querySelector("#box-9")
};

var oneOrZero = 0;
// INTELIGENCIA DO TIC TAC TOE

var identBox = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// KNOW WHEN THE GAME ENDS

// Put x on the box
function putX(x) {
  var box = x.querySelector(".x-box");
  for (var i = 0; i < 2; i++) {
    var divX = document.createElement("div");
    divX.classList.add("x");
    box.appendChild(divX);
  }
  x.onclick = false;
}
// Put o on the box
function putO(o) {
  var box = o.querySelector(".o-box");
  var divO = document.createElement("div");
  divO.classList.add("o");
  box.appendChild(divO);
  o.onclick = false;
}
// valid player
var player = 1;
function validPlayer(whichBox) {
  switch (player) {
    case 1:
      player = 2;
      putX(whichBox);
      oneOrZero = 1;
      break;

    case 2:
      oneOrZero = 2;
      player = 1;
      putO(whichBox);
      break;
  }

}
// Hashtag On
function addClassToHashtag() {
  var hashtag = document.querySelectorAll(".hashtagOff");
  for (var i = 0; i < 4; i++) {
    hashtag[i].classList.add("hashtag");
  }
  document.querySelector(".start").onclick = false;
}

// FUNCTION TO FILL BOX
function fillBox() {

  boxes.box1.onclick = function() {
    validPlayer(boxes.box1);
    identBox[0][0] = oneOrZero;
    endGame();
  };

  boxes.box2.onclick = function() {
    validPlayer(boxes.box2);
    identBox[0][1] = oneOrZero;
    endGame();
  };

  boxes.box3.onclick = function() {
    validPlayer(boxes.box3);
    identBox[0][2] = oneOrZero;
    endGame();
  };

  boxes.box4.onclick = function() {
    validPlayer(boxes.box4);
    identBox[1][0] = oneOrZero;
    endGame();
  };

  boxes.box5.onclick = function() {
    validPlayer(boxes.box5);
    identBox[1][1] = oneOrZero;
    endGame();
  };

  boxes.box6.onclick = function() {
    validPlayer(boxes.box6);
    identBox[1][2] = oneOrZero;
    endGame();
  };

  boxes.box7.onclick = function() {
    validPlayer(boxes.box7);
    identBox[2][0] = oneOrZero;
    endGame();
  };

  boxes.box8.onclick = function() {
    validPlayer(boxes.box8);
    identBox[2][1] = oneOrZero;
    endGame();
  };

  boxes.box9.onclick = function() {
    validPlayer(boxes.box9);
    identBox[2][2] = oneOrZero;
    endGame();
  };
}

// FUNCTION END GAME

function endGame(){
var topHorX = 0;
var middleHorX = 0;
var bottomHorX= 0;
var leftVertX= 0;
var centerVertX= 0;
var rightVertX= 0;
var topBottomX= 0;
var bottomTopX= 0;

var topHorO = 0;
var middleHorO = 0;
var bottomHorO= 0;
var leftVertO= 0;
var centerVertO= 0;
var rightVertO= 0;
var topBottomO= 0;
var bottomTopO= 0;

for(var i=0;i<3;i++){


  if (identBox[0][i] == 1) {
    topHorX += 1;
  }
  if(identBox[1][i] == 1){
    middleHorX += 1;
  }
  if(identBox[2][i] == 1){
    bottomHorX += 1;
  }
  if(identBox[i][0] == 1){
    leftVertX += 1;
  }
  if(identBox[i][1] == 1){
    centerVertX += 1;
  }
  if(identBox[i][2] == 1){
    rightVertX += 1;
  }
  if(identBox[i][i] == 1){
    topBottomX += 1;
  }

  if (identBox[0][i] == 2) {
    topHorO += 1;
  }
  if(identBox[1][i] == 2){
    middleHorO += 1;
  }
  if(identBox[2][i] == 2){
    bottomHorO += 1;
  }
  if(identBox[i][0] == 2){
    leftVertO += 1;
  }
  if(identBox[i][1] == 2){
    centerVertO += 1;
  }
  if(identBox[i][2] == 2){
    rightVertO += 1;
  }
  if(identBox[i][i] == 2){
    topBottomO += 1;
  }

}



  if(identBox[0][2] == 1){
    bottomTopX += 1;
  }
  if(identBox[1][1] == 1){
    bottomTopX += 1;
  }
  if(identBox[2][0] == 1){
    bottomTopX += 1;
  }

  if(identBox[0][2] == 2){
    bottomTopO += 1;
  }
  if(identBox[1][1] == 2){
    bottomTopO += 1;
  }
  if(identBox[2][0] == 2){
    bottomTopO += 1;
  }



if(topHorX == 3){
  document.querySelector("#top-hor").classList.add("slash");

   document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });

}
  else if (leftVertX == 3){
  document.querySelector("#left-vert").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (middleHorX == 3){
  document.querySelector("#middle-hor").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (rightVertX== 3){
  document.querySelector("#right-vert").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (centerVertX== 3){
  document.querySelector("#center-vert").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (bottomHorX== 3){
  document.querySelector("#bottom-hor").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (topBottomX== 3){
  document.querySelector("#top-bottom").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (bottomTopX== 3){
  document.querySelector("#bottom-top").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}

if(topHorO == 3){
  document.querySelector("#top-hor").classList.add("slash");

   document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });

}
  else if (leftVertO == 3){
  document.querySelector("#left-vert").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (middleHorO == 3){
  document.querySelector("#middle-hor").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (rightVertO== 3){
  document.querySelector("#right-vert").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (centerVertO== 3){
  document.querySelector("#center-vert").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (bottomHorO== 3){
  document.querySelector("#bottom-hor").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (topBottomO== 3){
  document.querySelector("#top-bottom").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}
  else if (bottomTopO== 3){
  document.querySelector("#bottom-top").classList.add("slash");
  document.querySelectorAll(".tic-tac-box").forEach(function(e,i){
     e.onclick = false;
   });
}

}

// START GAME / HASHTAG ON
function clickStart() {
  document.querySelector(".start-off").onclick = function(e) {
    addClassToHashtag();

    // FILL THE BOXES WITH X OR O
    fillBox();

    endGame();

    var start = document.querySelector(".start-off");
    start.classList.remove("start");
    var buttonReset = document.querySelector(".reset-off");
    buttonReset.classList.add("reset");
  };
}

clickStart();
// RESET FUNCTION
function reset() {
  var xboxes = document.querySelectorAll(".x-box");
  var oboxes = document.querySelectorAll(".o-box");
  var hashtags = document.querySelectorAll(".hashtagOff");
  var ticTacBoxs = document.querySelectorAll(".tic-tac-box");
  var slash = document.querySelectorAll(".slash-off");

  ticTacBoxs.forEach(function(e, i) {
    e.onclick = false;
  });

  hashtags.forEach(function(e, i) {
    e.classList.remove("hashtag");
  });

  xboxes.forEach(function(e, i) {
    e.innerHTML = "";
  });

  oboxes.forEach(function(e, i) {
    e.innerHTML = "";
  });

  slash.forEach(function(e,i){
    if(e.classList[1] == "slash"){
      e.classList.remove("slash")
    }
  });


  player = 1;

  identBox = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

}

// RESET EVENT
document.querySelector(".reset-off").onclick = function(e) {
  reset();
  var start = document.querySelector(".start-off");
  start.classList.add("start");

  var buttonReset = document.querySelector(".reset-off");
  buttonReset.classList.remove("reset");

  var hashtags = document.querySelectorAll(".hashtagOff");
  hashtags.forEach(function(e, i) {
    e.classList.remove("hashtag");
  });

  clickStart();
};
