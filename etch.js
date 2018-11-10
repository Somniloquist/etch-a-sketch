function createCanvas(canvasLength = 10) {
    const canvas = document.querySelector('.canvas');
    const canvasArea = canvasLength * canvasLength;
    canvas.setAttribute('style', `grid-template-columns: repeat(${canvasLength}, auto);`);

    for (i = 0; i < canvasArea; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseenter', function(e) {
            this.setAttribute('style', 'background: gray');
        });
        cell.classList.add('cell');
        canvas.appendChild(cell);
    }
}

function reset() {
    cells = document.querySelectorAll('.cell[style]');
    for(i = 0; i < cells.length; i++) {
        cells[i].removeAttribute('style');
    }
};

createCanvas();
