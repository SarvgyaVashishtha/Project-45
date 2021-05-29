var player1 , player2 , player1_image , player2_image;
let laser, laser2, treasure , spike_ball ,treasure_image , spike_ball_image;
let laser_image , laser2_image;
var wall1 , wall1a , wall1b , wall1c , wall1d , wall1e , wall1f , wall1g , wall1h , wall1i , wall1j , wall1k , wall1l , wall1m , wall1n , wall1o ;
var wall2 , wall2a, wall2b , wall2c , wall2d , wall2e , wall2f , wall2g , wall2h , wall2i ;
var wall3 , wall3a , wall3b , wall3c ;
var wall4 , wall4a , wall4b , wall4c , wall4d , wall4e , wall4f ;
var spike_ball2 , spike_ball3 , spike_ball4;

var wall5 , wall6 , wall7 , wall8;

var wall9;

var full,one_down,two_down,three_down,over,full_image,one_down_image,two_down_image,three_down_image,over_image;

var full2,one_down2,two_down2,three_down2,over2,full_image,one_down_image,two_down_image,three_down_image,over_image;

function preload(){
sprite = new Sprite();

}

function setup(){
createCanvas(windowWidth,windowHeight);

setup = new Setup();

}


function draw(){
background("yellow");

if(keyDown(LEFT_ARROW)){
    player1.x = player1.x-5
    }
    
    if(keyDown(RIGHT_ARROW)){
        player1.x = player1.x+5
        }
    
        if(keyDown(DOWN_ARROW)){
            player1.y = player1.y+5
            }
    
            if(keyDown(UP_ARROW)){
                player1.y = player1.y-5
                }
    
                if(keyDown("w")){
                    player2.y = player2.y-5
                    }
    
                    if(keyDown("a")){
                        player2.x = player2.x-5
                        }
    
                        if(keyDown("s")){
                            player2.y = player2.y+5
                            }
    
                            if(keyDown("d")){
                                player2.x = player2.x+5
                                }

                                if(player1.isTouching(spike_ball)){
                                   player1.x = windowWidth/8-140
                                   player1.y = windowHeight/8-50
                                   full.addImage(one_down_image);
                                }

                                   if(player1.isTouching(spike_ball2)){
                                    player1.x = windowWidth/8-140
                                    player1.y = windowHeight/8-50
                                    full.addImage(one_down_image);
                                 }

                                 if(player1.isTouching(spike_ball3)){
                                    player1.x = windowWidth/8-140
                                    player1.y = windowHeight/8-50
                                    full.addImage(one_down_image);
                                 }

                                 if(player1.isTouching(spike_ball4)){
                                    player1.x = windowWidth/8-140
                                    player1.y = windowHeight/8-50
                                    full.addImage(one_down_image);
                                 }

                                 if(player1.isTouching(laser)){
                                    player1.x = windowWidth/8-140
                                    player1.y = windowHeight/8-50
                                    full.addImage(one_down_image);
                                 }

                                 if(player1.isTouching(laser2)){
                                    player1.x = windowWidth/8-140
                                    player1.y = windowHeight/8-50
                                    full.addImage(one_down_image);
                                 }

                                 if(player2.isTouching(spike_ball)){
                                    player2.x = windowWidth/8-140
                                    player2.y = windowHeight-20
                                    full2.addImage(one_down_image);
                                 }
 
                                    if(player2.isTouching(spike_ball2)){
                                        player2.x = windowWidth/8-140
                                        player2.y = windowHeight-20
                                        full2.addImage(one_down_image);
                                  }
 
                                  if(player2.isTouching(spike_ball3)){
                                    player2.x = windowWidth/8-140
                                    player2.y = windowHeight-20
                                    full2.addImage(one_down_image);
                                  }
 
                                  if(player2.isTouching(spike_ball4)){
                                    player2.x = windowWidth/8-140
                                    player2.y = windowHeight-20
                                    full2.addImage(one_down_image);
                                  }
 
                                  if(player2.isTouching(laser)){
                                    player2.x = windowWidth/8-140
                                    player2.y = windowHeight-20
                                    full2.addImage(one_down_image);
                                  }
 
                                  if(player2.isTouching(laser2)){
                                    player2.x = windowWidth/8-140
                                    player2.y = windowHeight-20
                                    full2.addImage(one_down_image);
                                  }

                                  if(player1.isTouching(treasure)){
                                    player2.visible = false;
                                    treasure.visible = false;

                                    text("✌ PLAYER-1 WINS!!! ✌",580,180);
                                    wall9 = createSprite(1155,323,40,5);
                                    wall9.visible = false;
                                    player1.bounceOff(wall9);

                                    wall1.visible = false;
                                    wall1a.visible = false;
                                    wall1b.visible = false;
                                    wall1c.visible = false;
                                    wall1d.visible = false;
                                    wall1e.visible = false;
                                    wall1f.visible = false;
                                    wall1g.visible = false;
                                    wall1h.visible = false;
                                    wall1i.visible = false;
                                    wall1j.visible = false;
                                    wall1k.visible = false;
                                    wall1l.visible = false;
                                    wall1m.visible = false;
                                    wall1n.visible = false;
                                    wall1o.visible = false;

                                    wall2.visible = false;
                                    wall2a.visible = false;
                                    wall2b.visible = false;
                                    wall2c.visible = false;
                                    wall2d.visible = false;
                                    wall2e.visible = false;
                                    wall2f.visible = false;
                                    wall2g.visible = false;
                                    wall2h.visible = false;
                                    wall2i.visible = false;

                                    wall3.visible = false;
                                    wall3a.visible = false;
                                    wall3b.visible = false;
                                    wall3c.visible = false;

                                    wall4.visible = false;
                                    wall4a.visible = false;
                                    wall4b.visible = false;
                                    wall4c.visible = false;
                                    wall4d.visible = false;
                                    wall4e.visible = false;
                                    wall4f.visible = false;
                                      
                                    spike_ball.visible = false;
                                    spike_ball2.visible = false;
                                    spike_ball3.visible = false;
                                    spike_ball4.visible = false;

                                    laser.visible = false;
                                    laser2.visible = false;

                                 }     
                                 
                                 if(player2.isTouching(treasure)){
                                    player1.visible = false;
                                    treasure.visible = false;

                                    text("✌ PLAYER-2 WINS!!! ✌",580,180);
                                    wall9 = createSprite(1155,323,40,5);
                                    wall9.visible = false;
                                    player2.bounceOff(wall9);

                                    wall1.visible = false;
                                    wall1a.visible = false;
                                    wall1b.visible = false;
                                    wall1c.visible = false;
                                    wall1d.visible = false;
                                    wall1e.visible = false;
                                    wall1f.visible = false;
                                    wall1g.visible = false;
                                    wall1h.visible = false;
                                    wall1i.visible = false;
                                    wall1j.visible = false;
                                    wall1k.visible = false;
                                    wall1l.visible = false;
                                    wall1m.visible = false;
                                    wall1n.visible = false;
                                    wall1o.visible = false;

                                    wall2.visible = false;
                                    wall2a.visible = false;
                                    wall2b.visible = false;
                                    wall2c.visible = false;
                                    wall2d.visible = false;
                                    wall2e.visible = false;
                                    wall2f.visible = false;
                                    wall2g.visible = false;
                                    wall2h.visible = false;
                                    wall2i.visible = false;

                                    wall3.visible = false;
                                    wall3a.visible = false;
                                    wall3b.visible = false;
                                    wall3c.visible = false;

                                    wall4.visible = false;
                                    wall4a.visible = false;
                                    wall4b.visible = false;
                                    wall4c.visible = false;
                                    wall4d.visible = false;
                                    wall4e.visible = false;
                                    wall4f.visible = false;
                                      
                                    spike_ball.visible = false;
                                    spike_ball2.visible = false;
                                    spike_ball3.visible = false;
                                    spike_ball4.visible = false;

                                    laser.visible = false;
                                    laser2.visible = false;                                   
                                 }

spike_ball.bounceOff(wall4);
spike_ball.bounceOff(wall4b);
spike_ball2.bounceOff(wall2i);
spike_ball2.bounceOff(wall2);
spike_ball3.bounceOff(wall4);
spike_ball3.bounceOff(wall4c);
spike_ball4.bounceOff(wall4);
spike_ball4.bounceOff(wall4c);

laser.bounceOff(wall4);
laser.bounceOff(wall2h);
laser2.bounceOff(wall4);
laser2.bounceOff(wall2h);

player1.bounceOff(wall1);
player1.bounceOff(wall1a);
player1.bounceOff(wall1b);
player1.bounceOff(wall1c);
player1.bounceOff(wall1d);
player1.bounceOff(wall1e);
player1.bounceOff(wall1f);
player1.bounceOff(wall1g);
player1.bounceOff(wall1h);
player1.bounceOff(wall1i);
player1.bounceOff(wall1j);
player1.bounceOff(wall1k);
player1.bounceOff(wall1l);
player1.bounceOff(wall1m);
player1.bounceOff(wall1n);
player1.bounceOff(wall1o);

player1.bounceOff(wall2);
player1.bounceOff(wall2a);
player1.bounceOff(wall2b);
player1.bounceOff(wall2c);
player1.bounceOff(wall2d);
player1.bounceOff(wall2e);
player1.bounceOff(wall2f);
player1.bounceOff(wall2g);
player1.bounceOff(wall2h);
player1.bounceOff(wall2i);

player1.bounceOff(wall3);
player1.bounceOff(wall3a);
player1.bounceOff(wall3b);
player1.bounceOff(wall3c);

player1.bounceOff(wall4);
player1.bounceOff(wall4a);
player1.bounceOff(wall4b);
player1.bounceOff(wall4c);
player1.bounceOff(wall4d);
player1.bounceOff(wall4e);
player1.bounceOff(wall4f);

player1.bounceOff(wall5);
player1.bounceOff(wall6);
player1.bounceOff(wall7);
player1.bounceOff(wall8);  

player2.bounceOff(wall1);
player2.bounceOff(wall1a);
player2.bounceOff(wall1b);
player2.bounceOff(wall1c);
player2.bounceOff(wall1d);
player2.bounceOff(wall1e);
player2.bounceOff(wall1f);
player2.bounceOff(wall1g);
player2.bounceOff(wall1h);
player2.bounceOff(wall1i);
player2.bounceOff(wall1j);
player2.bounceOff(wall1k);
player2.bounceOff(wall1l);
player2.bounceOff(wall1m);
player2.bounceOff(wall1n);
player2.bounceOff(wall1o);

player2.bounceOff(wall2);
player2.bounceOff(wall2a);
player2.bounceOff(wall2b);
player2.bounceOff(wall2c);
player2.bounceOff(wall2d);
player2.bounceOff(wall2e);
player2.bounceOff(wall2f);
player2.bounceOff(wall2g);
player2.bounceOff(wall2h);
player2.bounceOff(wall2i);

player2.bounceOff(wall3);
player2.bounceOff(wall3a);
player2.bounceOff(wall3b);
player2.bounceOff(wall3c);

player2.bounceOff(wall4);
player2.bounceOff(wall4a);
player2.bounceOff(wall4b);
player2.bounceOff(wall4c);
player2.bounceOff(wall4d);
player2.bounceOff(wall4e);
player2.bounceOff(wall4f);

player2.bounceOff(wall5);
player2.bounceOff(wall6);
player2.bounceOff(wall7);
player2.bounceOff(wall8);

drawSprites();

}
