function Bear(){
    this.dBear = 100; //step(px) made by the bear when user clicks an arrow on the keyboard
    this.htmlElement = document.getElementById("bear"); //gets html element 
    this.id = this.htmlElement.id;
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;

    //methods
    //moves the bear by dx dy steps
    this.move = function(xDir,yDir){
        this.fitBounds(); //keeps bear within board
        this.x += this.dBear * xDir;
        this.y += this.dBear * yDir;
        this.display();
    };

    this.fitBounds = function(){
        let parent = this.htmlElement.parentElement;
        let iw = this.htmlElement.offsetWidth;
        let ih = this.htmlElement.offsetHeight;
        let l = parent.offsetLeft;
        let t = parent.offsetTop;
        let w = parent.offsetWidth;
        let h = parent.offsetHeight;

        if (this.x < 0) this.x = 0;
        if (this.x > w - iw) this.x = w - iw;
        if (this.y < 0) this.y = 0;
        if (this.y > h - ih) this.y = h -ih;
    };

    //display the bear at new position
    this.display = function(){
        this.htmlElement.style.left = this.x + "px";
        this.htmlElement.style.top = this.y + "px";
        this.htmlElement.style.display = "absolute";
    };

    this.setSpeed = function(bearSpeed){
        this.dBear = bearSpeed; //set dbear to speed value

    };

}

function start(){
    //create bear object
    bear = new Bear();
    
    bearSpeed = document.getElementById("bearSpeed").value;
    bear.setSpeed(bearSpeed);

    document.addEventListener("keydown", moveBear,false);
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

class Bee{
    constructor(beeNumber){
        this.htmlElement = createBeeImg(beeNumber);
        this.id = this.htmlElement.id;
        this.x = this.htmlElement.offsetLeft;
        this.y = this.htmlElement.offsetTop;
    }
}