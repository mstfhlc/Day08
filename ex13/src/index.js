// Only change code below this line
function randomRangeNumber(x){
  

    minNumber=5;
    maxNumber=10;
    return x=Math.floor(Math.random(x)*(maxNumber-minNumber+1))+minNumber
  
}

// Only change code below this line
console.log(randomRangeNumber(0,30));
module.exports=randomRangeNumber;