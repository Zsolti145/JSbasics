//Névtelen függvény
var numbers = [12,321,115,54,8,93,89,76,67];

numbers.sort(function(a,b){
    return a % 10 - b % 10;

    console.log(numbers);
})


//Önhívó függyvény
var main = (function()
{
console.log("Fut a függvény");

var step =1;
var methods = [
    function(){step++;},
    function(){return step;}
];
return methods;

})();

var GetStep = main[1];
var IncStep = main[0];

IncStep();
IncStep();
IncStep();
console.log(GetStep());




//Person "osztály" (ES6 előtt)