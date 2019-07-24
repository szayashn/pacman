var pacmanX = 0;
var pacmanY = 0;
var pacmanClass = 'right';
var ghostX = 0;
var ghostY = 0;
var start = 0;
var id ;
var pos = 0;
var dir = 2;

var world = [
    [5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,5,3,3,3,60,0,0,50,3,3,3,60,0,0,500,3,6,0,0,50,3,3,3,60,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,4,1,1,1,4,0,0,4,1,1,1,4,0,0,0,0,4,0,0,4,1,1,1,4,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,4,1,1,1,4,0,0,4,1,1,1,4,0,0,0,0,4,0,0,4,1,1,1,4,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,4,1,1,1,4,0,0,4,1,1,1,4,0,0,0,0,4,0,0,4,1,1,1,4,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,1,1,100,1,4,0,0,4,1,1,1,4,0,0,0,0,4,0,0,4,1,99,1,1,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,4,1,1,1,4,0,0,4,1,1,1,4,0,0,0,0,4,0,0,4,1,1,1,4,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,4,1,1,1,4,0,0,4,1,1,1,4,0,0,0,0,4,0,0,4,1,1,1,4,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,4,1,1,1,4,0,0,4,1,1,1,4,0,0,800,0,4,0,0,4,1,1,1,4,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,8,3,3,3,70,0,0,80,3,3,3,70,0,0,8,3,70,0,0,80,3,3,3,70,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
    [8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7]

    
];





displayWorld();
ghost();
function displayWorld(){
    var output = "";
    
    for (var i = 0; i < world.length; i++) {
        output += "<div class='row'>"
        for(var j = 0; j < world[i].length; j++) {

            if(world[i][j] == 3) {
                output += "<div class='brick--3'></div>";
            }
            else if(world[i][j] == 4) {
                output += "<div class='brick--4'></div>";
            }
            else if(world[i][j] == 5) {
                output += "<div class='brick--5'></div>";
            }
            else if(world[i][j] == 6) {
                output += "<div class='brick--6'></div>";
            }
            else if(world[i][j] == 7) {
                output += "<div class='brick--7'></div>";
            }
            else if(world[i][j] == 8) {
                output += "<div class='brick--8'></div>";
            }
            else if(world[i][j] == 50) {
                output += "<div class='brick--50'></div>";
            }
            else if(world[i][j] == 60) {
                output += "<div class='brick--60'></div>";
            }
            else if(world[i][j] == 70) {
                output += "<div class='brick--70'></div>";
            }
            else if(world[i][j] == 80) {
                output += "<div class='brick--80'></div>";
            }
            else if(world[i][j] == 500) {
                output += "<div class='brick--500'></div>";
            }
            else if(world[i][j] == 800) {
                output += "<div class='brick--800'></div>";
            }
            else if(world[i][j] == 0) {
                output += "<div class='coin'></div>";
            }
            else if(world[i][j] == 1) {
                output += "<div class='brick'></div>";
            }
            else if(world[i][j] == 99) {
                output += "<div id='red_ghost' class='ghost'></div>";
                ghostX = i;
                ghostY = j;
            }
            else if(world[i][j] == 100 ) {
                output += "<div id='pacman' class='" +pacmanClass + "'></div>";
                pacmanX = i;
                pacmanY = j;
            }
           
        }
        output += "</div>";

    }
    document.getElementById('world').innerHTML = output;
}
    function movePacman (posX, posY){
        if (world[posX][posY] != 4 && world[posX][posY] != 3) {
            world[pacmanX][pacmanY] = 1;
            world[posX][posY] = 100; 
            pacmanX += posX;
            pacmanY += posY;
        }
    }
    function moveGhost (posX, posY){
        if (world[posX][posY] != 4 && world[posX][posY] != 3) {
            if (world[posX][posY] == 1) {
                world[ghostX][ghostY] = 1;
            }
            else {
                world[ghostX][ghostY] = 0;
            }
            world[posX][posY] = 99; 
            ghostX += posX;
            ghostY += posY;
        }
        else {
            pos = 5;
            
            ghost();
            
        }
    }

    document.onkeydown = function(e){

        if(e.keyCode == 37) {   
            pacmanClass = "left";   
            movePacman(pacmanX,pacmanY - 1);
          
        }
        else if(e.keyCode == 39) {
            movePacman(pacmanX,pacmanY + 1);
            pacmanClass = "right";
        }
        else if(e.keyCode == 38) {
            movePacman(pacmanX - 1,pacmanY);
            pacmanClass = "up";
        }
        else if(e.keyCode == 40) {
            movePacman(pacmanX + 1,pacmanY);
            pacmanClass = "down";

        }
        displayWorld();
    }
    function getDirection () {
       
        
        return  Math.floor(Math.random() * 5);
    }
    function getRandom () {
       
        
        return  Math.floor(Math.random() * 20);
    }


    
    function ghost() {
        
        id = setInterval(frame, 300);
        function frame() {
            if (pos == 5) {
                dir = getDirection();
                pos = 0;
            } else {
                pos++;
                if (dir == 0){
                    moveGhost(ghostX + 1, ghostY );
                
                }
                else if (dir == 1){
                    moveGhost(ghostX - 1, ghostY );
                    
                }
                else if (dir == 2){
                    moveGhost(ghostX, ghostY + 1 );
                
                }
                else if (dir == 3){
                    moveGhost(ghostX, ghostY - 1 );
                    
                }

                displayWorld();
            }
        }        
    }
    
    
    
   

