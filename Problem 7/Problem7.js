function checkIfPrime(number)
{
    for(let x = 1; x<number; x++)
    {
        if(number % x == 0 && x != 1)
        {

            return false
        }

    }
    return true;
}
const target = 10001;
let primenumbers = [];

let count = 0;

while(primenumbers.length <= target+1)
{
    if(checkIfPrime(count) == true)
    {
        console.log("Fant: " + count);
        primenumbers.push(count);
    }
    count++;

}
