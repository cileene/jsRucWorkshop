let currentDieTextIndex = 0;
let variableDieText;

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
    rect(windowWidth / 2, windowHeight - (windowHeight / 3), 40, 40);
    // die number
    fill("black");
    text(variableDieText, windowWidth / 2, windowHeight - (windowHeight / 3), 30,30, );
    
  }

  this.mousePressed = function () {
    // go from index 0 -> 1
    if (currentDieTextIndex === 0) {
      currentDieTextIndex++;
      // play the sound
      percLoop1.loop();
    } else if (currentDieTextIndex === 1) {
      // chooese random 1-6
      variableDieText = floor(random(1, 7));



    }


  }

  // check if the currentDieTextIndex exceeds the length of dieText
  if (currentDieTextIndex >= dieText.length) {
    console.log("2DieThrow1 end");
    // switch the scene
    this.sceneManager.showScene(DieThrow);
  }
}
