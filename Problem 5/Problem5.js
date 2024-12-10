function smallestMult(n) {
    let current = n;

    while (true) {
        let divisible = true;

        for (let i = 1; i <= n; i++) {
            if (current % i !== 0) {
                divisible = false;
                break;
            }
        }
        if(divisible){
            return current;
        }
        current++;
    }
  }
  
console.log(smallestMult(20));