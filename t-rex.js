


var img = new Image();
img.src = "./character1.png";


let character = {
    x : 0,
    y : 475,
    w : 50,
    h : 50,
    speed : 25,
    draw(){
        ctx.fillStyle = '#E0F8F7';
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    },
    clear(){
        ctx.clearRect(this.x, this.y, this.w, this.h);
    },
    movingLimit(){
        console.log('x : ' + this.x + ', y : '+ this.y);
        if(this.y > 475) {
            console.log('y stop');
            // this.clear();
            this.y = 475;
            // this.draw();
            return false;
        }
    
        if(this.y < 0) {
            console.log('y stop');
            // this.clear();
            this.y = 0;
            // this.draw();
            return false;
        }
    
        if(this.x > 875) {
            console.log('x stop');
            // this.clear();
            this.x = 875;
            // this.draw();
            return false;
        }
    
        if(this.x < 0) {
            console.log('x stop');
            this.clear();
            this.x = 0;
            this.draw();
            return false;
        }
        return true;
    },
    movingControll(e){
        // console.log(e.code);
        switch(e.code){
            case 'ArrowUp' :
                // this.clear();
                this.y -= this.speed;
                // this.draw();
                break;
            case 'ArrowDown' :
                // this.clear();
                this.y += this.speed;
                // this.draw();
                break;
            case 'ArrowLeft' :
                // this.clear();
                this.x -= this.speed;
                // this.draw();
                break;
            case 'ArrowRight' :
                // this.clear();
                this.x += this.speed;
                // this.draw();
                break;
            default :
                break;
        }
        this.movingLimit();
    }
}

