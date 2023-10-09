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

//klik igennem introText og sig til når der ikke er flere
function mousePressed() {
  // !!! TILFØJ TOUCH !!!
  introText.shift();
  if (introText.length === 0) {
    // test at det virker
    console.log("intro færdig");
    // fjern alt ?
    remove();
    // go on to displaying the text in the dieText array

    }
  } 

  




