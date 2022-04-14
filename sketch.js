let isMad = false;
let isSad = false;
let isDancing = false;
let isPumpkin = false;
let isHeart = false;
let isSleep = false;
let isCrazy = false;
let isCowboy = false;
let isKissing = false;
let pumpkin = ["🎃","🎃","🎃","🎃","🎃"];
let cowboy = ["🤠", "🤠", "🤠", "🤠", "🤠"];
let kissing = ["💕","💕","💕","💕","💕","💕"];
let i = 0;

function setup() {
  createCanvas(windowWidth, 500);
  textAlign(CENTER, CENTER);
  textSize(144);
  x = width / 2;
  y = height;
  


}

function draw() {
  if (isMad) {
    background(random(64, 255), 0, 0);
    text("😠", width / 2 + random(-10, 10), height / 2 + random(-10, 10));
  } 
  
  else if (isSad){
    background(0,0,random(64,255));
    text("😭", width / 2 , y = y + 5);
    if (y > 500){
      y = height - 500;
    }
  }
  
  else if (isDancing){
    background(random(64,255), 0, random(64,255));
    push();
    translate(width/2,height/2);
    rotate(radians(frameCount));
    text("💃", 10, 10);
    pop()
  }
  
  else if (isPumpkin){
    if(i > pumpkin.length){
      background(random(230,255), random(130,165), 0);
      i = 0;
    }
    let p = pumpkin[i]
    text(p, random(width), random(height));
    i = i + 1;
  }
  
  else if(isHeart){
    background(random(230, 255), random(170,192), random(180,203));
    text("🥰", width / 2 + random(-10, 10), height / 2 + random(-10, 10));
  }
 
  else if(isSleep){
    background(random(125,137),random(190,207),random(220,240));
    text("😴", width / 2 , y = y + 5);
    if (y > 500){
      y = height - 500;
    }
  }
  
  else if(isCrazy){
    background(random(45,57), random(240,255), random(10,20));
    push();
    translate(width/2,height/2);
    rotate(radians(frameCount));
    text("🤪", 10, 10);
    pop()
  }

  else if(isCowboy){
    if(i > cowboy.length){
      background(random(190,210), random(100,125), random(30,45));
      i = 0;
    }
    let c = cowboy[i]
    text(c, random(width), random(height));
    i = i + 1;
  }

  else if(isKissing){
    if(i > kissing.length){
      background(random(190,240), random(130,144), random(130,144));
      i = 0;
    }
    let kiss = kissing[i]
    text(kiss, random(width), random(height));
    i = i + 1;
  }

  else {
    background('#D2D8B3');
    text("🙂", width / 2, height / 2);
  }
}

function mousePressed() {
  isMad = !isMad;
}

function keyPressed() {
  if(keyCode === DOWN_ARROW){
    isSad = !isSad;
  }
  else if(keyCode === ENTER){
    isDancing = !isDancing;
  }
  else if(keyCode === 32){ //space bar
    isPumpkin = !isPumpkin;
  }
  else if(keyCode === BACKSPACE){
    isHeart = !isHeart;
  }
  else if(keyCode === TAB){
    isSleep = !isSleep;
  }
  else if(keyCode === ESCAPE){
    isCowboy = !isCowboy;
  }
  else if(keyCode === LEFT_ARROW){
    isCrazy = !isCrazy;
  }
  else if(keyCode === SHIFT){
    isKissing = !isKissing;
  }
  else{
    isSad = isSad;
    isDancing = isDancing;
    isPumpkin = isPumpkin;
    isHeart = isHeart;
    isSleep = isSleep;
    isCowboy = isCowboy;
    isCrazy = isCrazy;
    isKissing = isKissing;
  }
}