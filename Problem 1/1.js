function multiplesOf3Or5(number) {

    var sum = 0;
  
    for(var x = 0;x<number;x++)
    {
      if(x % 3 == 0 || x % 5 == 0) 
      {
        sum += x;
        console.log(x);
      }
    }
    return sum;
  }
  
  multiplesOf3Or5(1000);