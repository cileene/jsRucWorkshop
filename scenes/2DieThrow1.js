let currentDieTextIndex = 0;
let variableDie1;
let variableDie2;
let die1Thrown;
let die2Thrown;

function DieThrow() {


  this.setup = function () {
    console.log("2DieThrow start");
    createCanvas(windowWidth, windowHeight);
  }

  this.draw = function () {
    background(0);
    // text
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    text(dieText[currentDieTextIndex], windowWidth / 2, windowHeight / 2);
    // die background
    rectMode(CENTER);
    fill("cream");
    rect(windowWidth / 3, windowHeight - (windowHeight / 3), 40, 40);
    rectMode(CENTER);
    fill("cream");
    rect(windowWidth - (windowWidth / 3), windowHeight - (windowHeight / 3), 40, 40);
    // die 1 number
    fill("black");
    text(variableDie1, windowWidth / 3, windowHeight - (windowHeight / 3), 30, 30,);
    // die 2 number
    fill("black");
    text(variableDie2, windowWidth - (windowWidth / 3), windowHeight - (windowHeight / 3), 30, 30,);

  }

  this.mousePressed = function () {
    // go from index 0 -> 1
    if (dieText.length === 3) {
      dieText.shift();
      // play the sound
      percLoop1.loop();

    } else if (dieText.length === 0) {
      console.log("2DieThrow1 end");
      // switch the scene
      this.sceneManager.showScene(BadNews);
      // check if the die has been thrown yet
    } else if (dieText.length === 2 && die1Thrown) {
      dieText.shift();

    } else if (dieText.length === 1 && die2Thrown) {
      dieText.shift();

    } else if (dieText.length === 1) {
      // choose random 1-6
      variableDie2 = floor(random(1, 7));
      //write to variable severity
      severity = variableDie2;
      die2Thrown = true;
      // check if die1Thrown and print contents of variable privilege in console
      console.log("die2 thrown? ", die2Thrown);
      console.log("severity = ", severity);

      // if die1 haven't been thrown we will
    } else if (dieText.length === 2) {
      // chooese random 1-6
      variableDie1 = floor(random(1, 7));
      // write to variable privilege
      privilege = variableDie1;
      die1Thrown = true;
      // check if die1Thrown and print contents of variable privilege in console
      console.log("die1 thrown? ", die1Thrown);
      console.log("privilege = ", privilege);
    }
  }

  // check if the currentDieTextIndex exceeds the length of dieText
  if (dieText.length === 0) {
    console.log("2DieThrow1 end");
    // switch the scene
    this.sceneManager.showScene(BadNews);
  }
}
