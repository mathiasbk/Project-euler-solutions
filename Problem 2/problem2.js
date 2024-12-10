function fiboEvenSum(n) {
    let prev1 = 1;
    let prev2 = 2;
    let evenSum = 0;

    while (prev1 <= n) {
        if (prev1 % 2 === 0) {
            evenSum += prev1;
        }
        let sum = prev1 + prev2;
        prev1 = prev2;
        prev2 = sum;
    }

    return evenSum;
}
