const gridLength = 100;
const gridArea = gridLength * gridLength;
const container = document.querySelector('.container');
container.setAttribute('style', `grid-template-columns: repeat(${gridLength}, auto);`);

for (i = 0; i < gridArea; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}