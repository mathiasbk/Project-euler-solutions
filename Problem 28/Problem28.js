const gridSize = 1001;
//let grid = Array.from({ length: gridSize }, () => new Array(gridSize).fill(0));
let grid = Array.from({ length: gridSize }, () => new Array(gridSize).fill(0));

const max = gridSize * gridSize;
function createGrid()
{
    const center = Math.floor(gridSize / 2);
    let posX = center, posY = center;
    let count = 1;
    grid[posY][posX] = count;
    step = 1;


    while (count < max) 
    {


        //Right direction
        for(let i = 0; i < step && count < max; i++) {
            posX++;
            count++;
            grid[posY][posX] = count;
        }

        //Move down
        for (let i = 0; i < step && count < max; i++) {
            posY++;
            count++;
            grid[posY][posX] = count;
        }
        
        step++;

        // Left
        for (let i = 0; i < step && count < max; i++) {
            posX--;
            count++;
            grid[posY][posX] = count;
        }
        //  Up
        for (let i = 0; i < step && count < max; i++) {
            posY--;
            count++;
            grid[posY][posX] = count;
        }
        step++;
    }
}

function sumDiaGonalNumbers()
{
    let ltrSum = 0;
    let rtlSum = 0;
    let posX = 0, posY = 0;
    console.table(grid);
    //Upper left to right bottom
    for(let x = 0; x<gridSize; x++)
    {
        ltrSum += grid[posY][posX];
        posX++;
        posY++;
    }
    
    //Upper right to right bottom
    posX = gridSize-1, posY = 0;
    for(let x = 0; x<gridSize; x++)
    {
        rtlSum += grid[posY][posX];
        posX--;
        posY++;
    }
    console.log("Sum 1: "+ltrSum);
    console.log("Sum 2: "+rtlSum);
    console.log("Result: " + ((ltrSum+rtlSum)-1));
}


createGrid();
console.table(grid);

sumDiaGonalNumbers();



