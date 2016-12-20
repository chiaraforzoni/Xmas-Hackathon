var mySong;

function preload() {
    mySong = loadSound('assets/babbosound.mp3');
    babbo = loadImage('assets/babboculo.png')
}

function setup() {
    createCanvas(360, 640);
    
    mySong.loop();
    
    analyzer = new p5.Amplitude();
    analyzer.setInput(mySong);
    
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    var volume = mic.getLevel();
    
    background('#1b1e3c');
    
    
    fill('#CB150B');
    textFont('Mountains of Christmas');
    textSize(30);
    text("If you yell, BABBO will comes to you!", 30, 50, 20);
    
    

    
    
    
    
    if (volume > 0.1) {
        fill(255);
        noStroke();
        textFont('Just Me Again Down Here')
        text('OH! OH! OH!', 180, 360);
        text('Happy Xmas!!', 180, 400);
        image(babbo, 144, 421, 200,100);
        
    }
    
    noStroke();
    fill('#CB150B');
    rect(180, 550, 130, 90);
    fill(0);
    rect(180, 580, 130, 1);
    rect(180, 610, 130, 1);
    rect(180+40, 610-30, 1, 30);
    rect(180+90, 610-30, 1, 30);
    rect(180+65, 610-60, 1, 30);
    rect(180+65, 610, 1, 30);
    fill('#282828');
    rect(160, 520, 170, 30);
    
    

    
    var myVolume = map(volume,0,1,0,10);
    mySong.amp(volume/5);

    
    
var x = random() * width;
var y = random() * height;
var mySize = map(myVolume, 0, 1, 5, 10);
fill('#fff714');
ellipse (x,y,mySize);
}
    
