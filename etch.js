const gridLength = 100;
const gridArea = gridLength * gridLength;
const canvas = document.querySelector('.canvas');
canvas.setAttribute('style', `grid-template-columns: repeat(${gridLength}, auto);`);

for (i = 0; i < gridArea; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseenter', function(e) {
        this.setAttribute('style', 'background: gray');
    });
    cell.classList.add('cell');
    canvas.appendChild(cell);
}

