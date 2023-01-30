// var img2 = new Image();
// img2.src = "./character2.png";

class Obstacles {

    constructor(){
        this.x = 900;
        this.y = 900;
        this.positionX = this.positionY = Math.floor(Math.random() * 30);
        this.start = Math.floor(Math.random() * 4 + 1);

        switch(this.start){
            case 1 :
                this.x = 950;
                this.y = this.positionY*30;
                break;
            case 2 :
                this.x = this.positionX*30;
                this.y = 950;
                break;
            case 3 :
                this.x = 0;
                this.y = this.positionY*30;
                break;
            case 4 :
                this.x = this.positionX*30;
                this.y = 0;
                break;
        }

        this.w = 10;
        this.h = 10;
        this.speed = 2;
        this.speedX = Math.floor(Math.random() * 3 + 1);
        this.speedY = Math.floor(Math.random() * 3 + 1);
       
    }

    draw(){
        ctx.fillStyle = '#F2F5A9';
        // console.log('start : ' + this.start);
        // console.log('speedX : ' + this.speedX);
        // console.log('speedY : ' + this.speedY);

        // switch(this.start){
        //     case 1 :
        //         this.y = this.positionY*30;
        //         this.y = this.positionY*30;
        //         break;
        //     case 2 :
        //         this.x = this.positionX*30;
        //         break;
        //     case 3 :
        //         this.x = 0;
        //         this.y = this.positionY*30;
        //         break;
        //     case 4 :
        //         this.x = this.positionX*30;
        //         this.y = 0;
        //         break;
        // }
        
        ctx.fillRect(this.x, this.y, this.w, this.h);
        // ctx.drawImage(img2, this.x, this.y, this.w, this.h);
    }

    clear(){
        ctx.clearRect(this.x, this.y, this.w, this.h);
    }

}


