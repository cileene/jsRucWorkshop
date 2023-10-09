function setup() {
  createCanvas(windowWidth, windowHeight);
}

// vis introtext
function draw() {
  background(0);
  fill("white");
  textSize(20);
  text(introText[0], windowWidth/4, windowHeight/2);
}

//klik igennem introtext og sig til når der ikke er flere
function mousePressed() {
  introText.shift();
  if (introText.length === 0) {
    // test at det virker
    console.log("Done!");
  }
}


