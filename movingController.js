
window.onkeydown = (e) => movingControll(e);

function movingControll(e){
    // console.log(e.code);
    // console.log(e.key);
    switch(e.code){
        case 'ArrowUp' :
            clearCharacter();
            y -= speed;
            drawCharacter();
            break;
        case 'ArrowDown' :
            clearCharacter();
            y += speed;
            drawCharacter();
            break;
        case 'ArrowLeft' :
            clearCharacter();
            x -= speed;
            drawCharacter();
            break;
        case 'ArrowRight' :
            clearCharacter();
            x += speed;
            drawCharacter();
            break;
        default :
            break;

    }

    movingLimit();

}

function movingLimit(){

    console.log('x : ' + x + ', y : '+ y);

    if(y > 475) {
        console.log('y stop');
        clearCharacter();
        y = 475;
        drawCharacter();
        return false;
    }

    if(y < 0) {
        console.log('y stop');
        clearCharacter();
        y = 0;
        drawCharacter();
        return false;
    }

    if(x > 875) {
        console.log('x stop');
        clearCharacter();
        x = 875;
        drawCharacter();
        return false;
    }

    if(x < 0) {
        console.log('x stop');
        clearCharacter();
        x = 0;
        drawCharacter();
        return false;
    }

    return true;

}