function DieThrow() {
  
  
  this.setup = function () {
    console.log("2DieThrow start");
    createCanvas(windowWidth, windowHeight);
  }

  this.draw = function () {
    background(0);
    fill("white");
    textSize(20);
    text(dieText[0], windowWidth / 4, windowHeight / 2);
  }
}