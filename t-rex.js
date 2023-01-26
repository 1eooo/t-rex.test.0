
let x = 0;
let y = 475;
let w = 25;
let h = 25;

let speed = 25;

function drawCharacter() {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.fillRect(x, y, w, h);
    }
}

function clearCharacter(){
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(x, y, w, h);
    }
}

window.onload = function(){
    drawCharacter();
};