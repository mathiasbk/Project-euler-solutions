function largestPrimeFactor(number) {

    let bigest = 0;
    let devisor = 2;
    console.log(number);

    while (number >= devisor) {
        if(number % devisor === 0) {
            bigest = devisor;
            number = number / devisor;
        } else {
            devisor++;
        }
    }

    return bigest;
  }
  