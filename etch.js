
// need to find a way to reset div cells

function drawCanvas(canvasLength = 10) {
    const canvas = document.querySelector('.canvas');
    const canvasArea = canvasLength * canvasLength;
    canvas.setAttribute('style', `grid-template-columns: repeat(${canvasLength}, auto);`);

    // fill the canvas with cells
    for (i = 0; i < canvasArea; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseenter', function(e) {
            if (rainbowCursor) this.setAttribute('style', `background: ${getRandomColor()}`);
            else this.setAttribute('style', `background: ${cursorColor}`);
        });
        cell.classList.add('cell');
        canvas.appendChild(cell);
    }
}

function deleteCells() {
    canvas = document.querySelector('.canvas');
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function clear() {
    const cells = document.querySelectorAll('.cell[style]');
    for(i = 0; i < cells.length; i++) {
        cells[i].removeAttribute('style');
    }
};

function resizeCanvas() {
    clear();
    deleteCells();
    drawCanvas(getCanvasSize());
}

function getCanvasSize() {
    return prompt('Enter the amount of squares for each side of the canvas.');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
    return `rgba(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)}, ${100})`
}

function toggleRainbowCursor() {
    rainbowCursor = !rainbowCursor;
}

const clearBtn = document.getElementById('clearCanvas');
clearBtn.addEventListener('click', clear);
const resizeBtn = document.getElementById('resizeCanvas');
resizeBtn.addEventListener('click', resizeCanvas);
const rainbowBtn = document.getElementById('rainbowCursor');
rainbowBtn.addEventListener('click', toggleRainbowCursor);
let cursorColor = 'gray';
let rainbowCursor = false;

drawCanvas();