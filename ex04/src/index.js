// Only change code below this line
function localScope(){
    var myVariable="I am here!";
    console.log(myVariable);
}


// Only change code below this line



//myVariable is not defined outsize of localScope


if (typeof myVariable != "undefined") {
    console.log("outside localScope", myVariable)
}
else {
    console.log("outside localScope UNDEFINED!!!")
}

localScope();
module.exports = localScope;