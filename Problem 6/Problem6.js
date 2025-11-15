

const length = 100;
let sumOfSquares =0;
let squareOfSum =0;

for(let i = 1; i <= length; i++)
{
    sumOfSquares += Math.pow(i, 2);
    squareOfSum += i;
}

console.log("delta sum: " + (Math.pow(squareOfSum, 2) - sumOfSquares))