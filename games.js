function Bear(){
    this.dBear = 100; //step(px) made by the bear when user clicks an arrow on the keyboard
    this.htmlElement = document.getElementById("bear"); //gets html element 
    this.id = this.htmlElement.id;
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;

    //methods
    //moves the bear by dx dy steps
    this.move = function(xDir,yDir){
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display();
    };

    //display the bear at new position
    this.display = function(){
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        this.htmlElement.style.display = "absolute";
    };

}

function start(){
    //create bear object
    bear = new Bear();

    document.addEventListener("keydown", moveBear, false);
}

//create eventhandler to handle keyboard events to move the bear
function moveBear(e){
    //ascii codes of the four arrow keys
    const KEYUP = 38;
    const KEYDOWN = 40;
    const KEYLEFT = 37;
    const KEYRIGHT = 39;

    if(e.keyCode == KEYRIGHT){ //if user presses right arrow
        bear.move(1,0);
    }

    if (e.keyCode == KEYLEFT){ //if user presses left arrow
        bear.move(-1,0);
    }

    if (e.keyCode == KEYUP){//if user presses up arrow
        bear.move(0,-1);
    }

    if (e.keyCode == KEYDOWN){ //if user presses down arrow
        bear.move(0,1);
    }


}