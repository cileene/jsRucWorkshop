var mgr;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Intro );
    mgr.addScene ( DieThrow );
    

    mgr.showNextScene();
}

function draw()
{
    mgr.draw();
}

function mousePressed()
{
    mgr.handleEvent("mousePressed");
}
/*
function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( Intro );
            break;
       /* case '2':
            mgr.showScene( Animation2 );
            break;
        case '3':
            mgr.showScene( Animation3 );
            break; 
    }
    
    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}
*/
// Intro scene constructor function
