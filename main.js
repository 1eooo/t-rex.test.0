

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 500;

window.onkeydown = (e) => character.movingControll(e);