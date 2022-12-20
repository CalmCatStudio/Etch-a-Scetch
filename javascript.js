let gridSize = 16;
const container = document.querySelector('.container');
let isMouseDown = false;
createGrid();

function changeColor(box)
{
    box.style.backgroundColor = 'black';
}

function createGrid()
{
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
            box.addEventListener('click', function()
            {
                box.style.backgroundColor = 'black';
            });

            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
