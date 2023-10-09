function Intro() {

    this.setup = function () {
        console.log("1Intro start");
        createCanvas(windowWidth, windowHeight);
    }

    this.draw = function () {
        background(0);
        fill("white");
        textSize(20);
        text(introText[0], windowWidth / 4, windowHeight / 2);
    }

    this.mousePressed = function () {
        // !!! TILFØJ TOUCH !!!
        introText.shift();
        if (introText.length === 0) {
            // test at det virker
            console.log("1Intro end");
            // go on to displaying the text in the dieText array
            // switch the scene
            this.sceneManager.showScene(DieThrow);
        }
    }
}


/*
function setup() {
  createCanvas(windowWidth, windowHeight);
}
 
// vis introtext
function draw() {
  background(0);
  fill("white");
  textSize(20);
  text(introText[0], windowWidth / 4, windowHeight / 2);
}
 
//klik igennem introText og sig til når der ikke er flere
function mousePressed() {
  // !!! TILFØJ TOUCH !!!
  introText.shift();
  if (introText.length === 0) {
    // test at det virker
    console.log("intro done");
    // go on to displaying the text in the dieText array
 
  }
}
 
*/




