function Intro() {

    this.setup = function () {
        console.log("1Intro start");
        createCanvas(windowWidth, windowHeight);
    }

    this.draw = function () {
        background(0);
        fill("white");
        textSize(20);
        textAlign(CENTER, CENTER);
        text(introText[0], windowWidth / 2, windowHeight / 2);
    }

    this.mousePressed = function () {
        introText.shift();
        if (introText.length === 0) {
            // test
            console.log("1Intro end");
            // switch the scene
            this.sceneManager.showScene(DieThrow);
        }
    }
}
