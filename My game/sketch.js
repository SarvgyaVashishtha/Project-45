var player1 , player2 , player1_image , player2_image;
let laser, laser2, treasure , spike_ball ,treasure_image , spike_ball_image;
let laser_image , laser2_image;
var wall1 , wall1a , wall1b , wall1c , wall1d , wall1e , wall1f , wall1g , wall1h , wall1i , wall1j , wall1k , wall1l , wall1m , wall1n , wall1o ;
var wall2 , wall2a, wall2b , wall2c , wall2d , wall2e , wall2f , wall2g , wall2h , wall2i ;
var wall3 , wall3a , wall3b , wall3c ;
var wall4 , wall4a , wall4b , wall4c , wall4d , wall4e , wall4f ;
var spike_ball2 , spike_ball3 , spike_ball4;


function preload(){
sprite = new Sprite();

}

function setup(){
createCanvas(windowWidth,windowHeight);

setup = new Setup();

}


function draw(){
background("yellow");

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

drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
    player1.x = player1.x-50
    }
    
    if(keyCode === RIGHT_ARROW){
        player1.x = player1.x+50
        }
    
        if(keyCode === DOWN_ARROW){
            player1.y = player1.y+50
            }
    
            if(keyCode === UP_ARROW){
                player1.y = player1.y-50
                }
    
                if(keyCode === 87){
                    player2.y = player2.y-50
                    }
    
                    if(keyCode === 65){
                        player2.x = player2.x-50
                        }
    
                        if(keyCode === 83){
                            player2.y = player2.y+50
                            }
    
                            if(keyCode === 68){
                                player2.x = player2.x+50
                                }
    }