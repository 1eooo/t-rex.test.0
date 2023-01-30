

let timer = 0;
let obstacleArr = [];
let animation;

function frameDraw(){
    animation = requestAnimationFrame(frameDraw);
    // console.log(timer);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0B2161";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "20px gothic";
    // ctx.textAlign = "center";
    ctx.strokeStyle = "white";
    ctx.strokeText(timer/100, 850, 20);

    if(timer % 10 === 0){
        let obstacle = new Obstacles();
        // console.log(obstacle.randNum);
        obstacleArr.push(obstacle);
    }
    
    obstacleArr.forEach((obVal, i, o)=>{
        if(obVal.x < 0 || obVal.y < 0 || obVal.x > 950 || obVal.y > 950){
            o.splice(i, 1)
        }
        crashCheck(character, obVal);
        
        switch(obVal.start){
            case 1 :
                obVal.x += obVal.speedX;
                obVal.y -= obVal.speedY;
                break;
            case 2 :
                obVal.x -= obVal.speedX;
                obVal.y -= obVal.speedY;
                break;
            case 3 :
                obVal.x += obVal.speedX;
                obVal.y -= obVal.speedY;
                break;
            case 4 :
                obVal.x += obVal.speedX;
                obVal.y += obVal.speedY;
                break;
        }

        obVal.draw();
    })
    
    character.draw();
    
}

frameDraw();

//충돌?