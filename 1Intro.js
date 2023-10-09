function Intro() {

    this.setup = function () {
        console.log("1Intro start");
        createCanvas(windowWidth, windowHeight);
    }

    this.draw = function () {
        background(0);
        fill("white");
        textFont('Courier New');
        textSize(20);
        textAlign(CENTER, CENTER);
        text(introText[0], windowWidth / 2, windowHeight / 2);
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
