let x1 = 0;
let y1 = 0; 
let heartRate = [];
let heart;
let B = 0;
let c = 0;
let cr = 0; 
let s = 0;
let b

function preload(){
  heartRate = loadJSON('data/heart_rate-2020-09-11.json')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(170, 50, 100);
  x1 = width/2;
  y1 = height/2;
  frameRate(25);
}

function draw() {
  //read heartRate data
  let bpm = heartRate[B].value['bpm'];
  let b = map(bpm,60,170,10,255)
  let sw = map(bpm,60,170,3,5)
  B += 1;

  //squares
  choice = int(random(1, 4.5));
  let x2 = x1 + 50;
  let y2 = y1 + 50;
  let a = 5;
  strokeWeight(sw);
  stroke(s, random(360), random(360), b);
  line(x1-random(-a,a), y1-random(-a,a),
         x2+random(-a,a), y1-random(-a,a));
    line(x2+random(-a,a), y1-random(-a,a),
         x2+random(-a,a), y2+random(-a,a));
    line(x2+random(-a,a), y2+random(-a,a),
         x1+random(-a,a), y2+random(-a,a));
    line(x1+random(-a,a), y2+random(-a,a),
         x1+random(-a,a), y1+random(-a,a));

  //square movement
  if (choice == 1){
    x1 += 25;
  } 
  if (choice == 2){
    x1 -= 25;
  }
  if (choice == 3){
    y1 += 25;
  }
  if (choice == 4){
    y1-=25;
  }

  //reset
  if (x1 < 0){
    x1 = random(width);
  }
  if (y1 < 0){
    y1 =random(height);
  }
  if (x2 > width){
    x1 = random(width);
  }
  if (y2 > height){
    y1 =random(height);
  }
  
  
  //color change
  s += 1;
    if (s == 360){
        s = 0
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


