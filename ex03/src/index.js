// Write code below this line

var myGlobalVarible=10;
var notGlobalVarible=5;

// Write code below this line
function function1(){
    var result="";
    if(typeof myGlobalVarible !="undefined"){
        result+="myGlobalVarible :" + myGlobalVarible;
    }
    if(typeof notGlobalVarible !="undefined"){
        result+="notGlobalVarible :" + notGlobalVarible;
    }
    console.log(result);

    function1();
    

};
module.exports=function1;