let currentDieTextIndex = 0;

function DieThrow() {

  this.setup = function () {
    console.log("2DieThrow start");
    createCanvas(windowWidth, windowHeight);
  }

  this.draw = function () {
    background(0);
    fill("white");
    textFont('Courier');
    textSize(20);
    textAlign(CENTER, CENTER);
    text(dieText[currentDieTextIndex], windowWidth / 2, windowHeight / 2);
  }

  this.mousePressed = function () {
    // go from index 0 -> 1
    if (currentDieTextIndex === 0) {
      currentDieTextIndex++;
    }

    // check if the currentDieTextIndex exceeds the length of dieText
    if (currentDieTextIndex >= dieText.length) {
      console.log("2DieThrow1 end");
      // go on to displaying the text in the dieText array
      // switch the scene
      this.sceneManager.showScene(DieThrow);
    }
  }
}