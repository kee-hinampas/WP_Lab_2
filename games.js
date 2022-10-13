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
        //attributes
        this.htmlElement = createBeeImg(beeNumber);
        this.id = this.htmlElement.id; //html id
        this.x = this.htmlElement.offsetLeft; //left position
        this.y = this.htmlElement.offsetTop;//top position

        //methods
        //move bee
        this.move = function(dx,dy){
            this.x += dx;
            this.y += dy;
            this.display();

        };

        //display bees
        this.display = function(){
            //adjusts position of the bee and displays it
            this.fitBounds(); //adjust bounds
            this.htmlElement.style.left = this.x + "px";
            this.htmlElement.style.top = this.y + "px";
            this.htmlElement.style.display = "block";
        };

        this.fitBounds = function(){
            //check and make sure that the bees stay in the board space
            let parent = this.htmlElement.parent;
            let iw = this.htmlElement.offsetWidth;
            let ih = this.htmlElement.offsetHeight;
            //get parent element's left, top position and height and width
            let l = parent.offsetLeft;
            let t = parent.offsetTop;
            let w = parent.offsetWidth;
            let h = parent.offsetHeight;

            if (this.x < 0){
                this.x = 0;
            } 
            if (this.x > w-iw){
                this.x = w - iw;
            }
            if (this.y < 0){
                this.y = 0;
            }
            if (this.y > h - ih){
                this.y = h -ih;
            }
        };
    }
}

function createBeeImg(wNum){
    //get dimensions and position of board div
    let boardDiv = document.getElementById("board");
    let boardDivW = boardDiv.offsetWidth;
    let boardDivH = boardDiv.offsetHeight;
    let boardDivX = boardDiv.offsetLeft;
    let boardDivY = boardDiv.offsetTop;

    //create this img element
     let img = document.createElement("img"); //create image tag
     img.setAttribute("src", "bee.gif");
     img.setAttribute("width", "100");
     img.setAttribute("alt", "A bee!");
     img.setAttribute("id", "bee" + wNum);
     img.setAttribute("class", "bee"); //set class of html tag img
     //add the img element as a child element of the board div
     img.style.position = "absolute";
     boardDiv.appendChild(img);

    //set initial position
    let x = getRandomInt(boardDivW);
    let y = getRandomInt(boardDivH);
    img.style.left = (boardDivX + x) + "px";
    img.style.top = (y) + "px";

    return img;
}