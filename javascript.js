let isMouseDown = false;

let color = 'black';
let colorInput = document.getElementById('color');
colorInput.addEventListener("input", function() {
    color = colorInput.value;
})

let gridSize = 16;
const container = document.querySelector('.container');
container.addEventListener("mouseleave", function() {
    isMouseDown = false;
})

const sizeInput = document.getElementById('size');
const sizeLabel = document.getElementById('sizeLabel');
sizeInput.addEventListener("change", function(){
    updateGrid(sizeInput.value);
})

createGrid();

function changeColor(box)
{
    box.style.backgroundColor = color;
}

function updateGrid(newSize)
{
    gridSize = sizeInput.value;
    sizeLabel.textContent = `Size: ${gridSize} X ${gridSize}`;
    createGrid();
}

function createGrid()
{
    container.innerHTML = '';
    for (let y = 0; y < gridSize; y++)
    {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let x = 0; x < gridSize; x++)
        {
            const box = document.createElement('div');
            box.classList.add('etch-box');
            box.addEventListener('mousedown', function() {  
                isMouseDown = true;
                changeColor(box);
            });
            box.addEventListener('mouseup', function() {
                isMouseDown = false;
            });
            box.addEventListener('mouseover', function()
            {
                if (isMouseDown)
                {
                    changeColor(box);
                }
            });
            box.addEventListener

            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
