function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 100);
    frameRate(100);
    background(255); 
  }
  
  function draw() {
    background(255,2);
    
     noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX-240, mouseY-240, mouseY/2, mouseX/2 );
    ellipse(mouseX-240, mouseY-240, mouseX/2, mouseY/2 ); 
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX-120, mouseY-120, mouseY/2, mouseX/2 );
    ellipse(mouseX-120, mouseY-120, mouseX/2, mouseY/2 ); 
  
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX, mouseY, mouseY/2, mouseX/2 );
    ellipse(mouseX, mouseY, mouseX/2, mouseY/2 ); 
    
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX+120, mouseY+120, mouseY/2, mouseX/2 );
    ellipse(mouseX+120, mouseY+120, mouseX/2, mouseY/2 ); 
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX+240, mouseY+240, mouseY/2, mouseX/2 );
    ellipse(mouseX+240, mouseY+240, mouseX/2, mouseY/2 ); 
   
   
    //------------------
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX+240, mouseY-240, mouseY/2, mouseX/2 );
    ellipse(mouseX+240, mouseY-240, mouseX/2, mouseY/2 ); 
    
      noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX+120, mouseY-120, mouseY/2, mouseX/2 );
    ellipse(mouseX+120, mouseY-120, mouseX/2, mouseY/2 ); 
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX, mouseY, mouseY/2, mouseX/2 );
    ellipse(mouseX, mouseY, mouseX/2, mouseY/2 ); 
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX-120, mouseY+120, mouseY/2, mouseX/2 );
    ellipse(mouseX-120, mouseY+120, mouseX/2, mouseY/2 ); 
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX-240, mouseY+240, mouseY/2, mouseX/2 );
    ellipse(mouseX-240, mouseY+240, mouseX/2, mouseY/2 ); 
    
    //--------------------------
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX, mouseY-240, mouseY/2, mouseX/2 );
    ellipse(mouseX, mouseY-240, mouseX/2, mouseY/2 ); 
     
    
      noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX, mouseY+240, mouseY/2, mouseX/2 );
    ellipse(mouseX, mouseY+240, mouseX/2, mouseY/2 ); 
    
    
     //--------------------------
    
    
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX-240, mouseY, mouseY/2, mouseX/2 );
    ellipse(mouseX-240, mouseY, mouseX/2, mouseY/2 ); 
     
    noFill();
    stroke(random(30,60), 90, random(30,80));
    ellipse(mouseX+240, mouseY, mouseY/2, mouseX/2 );
    ellipse(mouseX+240, mouseY, mouseX/2, mouseY/2 ); 
    
  }