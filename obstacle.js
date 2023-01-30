// var img2 = new Image();
// img2.src = "./character2.png";

class Obstacles {

    constructor(){
        this.x = 900;
        this.y = 200;
        this.w = 10;
        this.h = 10;
        this.speed = 3;
    }

    randNum = Math.floor(Math.random() * 17);

    draw(){
        ctx.fillStyle = '#F2F5A9';
        this.y = this.randNum*30;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        // ctx.drawImage(img2, this.x, this.y, this.w, this.h);
    }

    clear(){
        ctx.clearRect(this.x, this.y, this.w, this.h);
    }

}


