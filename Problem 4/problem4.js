function largestPalindromeProduct(n) {
    let largest = 0;
    const start = Math.pow(10,n-1);
    const end = Math.pow(10,n);

    for(let i = start; i <= end; i++) {
        for(let j = start; j <= end; j++) {
            if(i * j > largest && isPalindrome(i * j)) {
                if(i * j > largest) {
                    largest = i * j;
                    console.log(largest);
                }
            }
        }
       
    }

    return largest;
  }
  
  function isPalindrome(num) {
        return num.toString() === reverseString(num.toString());
  }
  function reverseString(str) {
    return str.split("").reverse().join("");
}

  largestPalindromeProduct(2);