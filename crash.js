function crashCheck(character, obstacle){
    
    let border = 3;

    let char1x = character.x - border;
    let char1y = character.y - border;
    let char2x = character.x + character.w  - border;
    let char2y = character.y - border;
    let char3x = character.x - border;
    let char3y = character.y + character.h - border;
    let char4x = character.x + character.w - border;
    let char4y = character.y + character.h - border;

    let obs1x = obstacle.x - border;
    let obs1y = obstacle.y - border;
    let obs2x = obstacle.x + obstacle.w - border;
    let obs2y = obstacle.y - border;
    let obs3x = obstacle.x - border;
    let obs3y = obstacle.y + obstacle.h - border;
    let obs4x = obstacle.x + obstacle.w - border;
    let obs4y = obstacle.y + obstacle.h - border;

    if( (obs1x < char4x && obs1y < char4y) 
        && (obs4x > char1x && obs4y > char1y)
        && (obs2x > char3x && obs2y < char3y)
        && (obs3x < char2x && obs3y > char2y)){
        cancelAnimationFrame(animation);
    }

}