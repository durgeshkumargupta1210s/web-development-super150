let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellsize = 50;
let boardheight = 600;
let boardwidth = 1000;
canvas.width = boardwidth;
canvas.height = boardheight;

let direction = 'right';
let gameover = false;

let foodCells = generateFood();
let Score = 0;
let snakeCells = [[0, 0]];

let pulse = 0;
let increasing = true;

let intervalId = setInterval(function () {
    update();
    draw();
}, 200);

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    else if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    else if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    else if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

function draw() {
    // Background gradient
    let gradient = ctx.createLinearGradient(0, 0, boardwidth, boardheight);
    gradient.addColorStop(0, "#0f2027");
    gradient.addColorStop(0.5, "#203a43");
    gradient.addColorStop(1, "#2c5364");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, boardwidth, boardheight);

    if (gameover) {
        clearInterval(intervalId);
        ctx.fillStyle = "white";
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("GAME OVER!!", 350, 270);
        ctx.fillStyle = "cyan";
        ctx.font = "30px monospace";
        ctx.fillText(`Final Score: ${Score}`, 420, 330);
        return;
    }

    // Snake with shadow and gradient body
    for (let i = 0; i < snakeCells.length; i++) {
        const [x, y] = snakeCells[i];

        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        if (i === snakeCells.length - 1) {
            ctx.fillStyle = "#00FF7F"; // Vibrant head
        } else {
            const greenShade = 100 + Math.floor((i / snakeCells.length) * 100);
            ctx.fillStyle = `rgb(0, ${greenShade}, 100)`; // Gradient body
        }

        roundRect(ctx, x, y, cellsize, cellsize, 10);
        ctx.restore();
    }

    // Animated food (pulsing)
    if (increasing) pulse += 1;
    else pulse -= 1;
    if (pulse >= 10 || pulse <= 0) increasing = !increasing;

    ctx.fillStyle = `rgba(255, 69, 0, ${0.5 + pulse / 20})`; // red-orange glow
    ctx.beginPath();
    ctx.arc(foodCells[0] + cellsize / 2, foodCells[1] + cellsize / 2, cellsize / 2 - 5 + pulse / 5, 0, Math.PI * 2);
    ctx.fill();

    // Score display
    ctx.fillStyle = "white";
    ctx.font = "25px monospace";
    ctx.fillText(`Score: ${Score}`, 30, 40);
}

function update() {
    let headx = snakeCells[snakeCells.length - 1][0];
    let heady = snakeCells[snakeCells.length - 1][1];

    let newheadx = headx;
    let newheady = heady;

    if (direction === 'right') newheadx += cellsize;
    else if (direction === 'left') newheadx -= cellsize;
    else if (direction === 'up') newheady -= cellsize;
    else if (direction === 'down') newheady += cellsize;

    // Wall collision
    if (newheadx >= boardwidth || newheadx < 0 || newheady >= boardheight || newheady < 0) {
        gameover = true;
        return;
    }

    // Self collision
    for (let cell of snakeCells) {
        if (cell[0] === newheadx && cell[1] === newheady) {
            gameover = true;
            return;
        }
    }

    snakeCells.push([newheadx, newheady]);

    if (newheadx === foodCells[0] && newheady === foodCells[1]) {
        foodCells = generateFood();
        Score += 10;
    } else {
        snakeCells.shift();
    }
}

function generateFood() {
    return [
        Math.round((Math.random() * (boardwidth - cellsize)) / cellsize) * cellsize,
        Math.round((Math.random() * (boardheight - cellsize)) / cellsize) * cellsize,
    ];
}

function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
}
