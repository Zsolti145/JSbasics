//Névtelen függvény
var numbers = [12,321,115,54,8,93,89,76,67];

numbers.sort(function(a,b){
    return a % 10 - b % 10;

    console.log(numbers);
})


//Önhívó függyvény
/*var main = (function()
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

*/
//Person "osztály" (ES6 előtt)

function Person(fname,lname,born){
this.fname = fname;
this.lname = lname;
this.born = born;

this.getFullName = function()
{
    return this.fname+" "+this.lname;
};
this.getAge = function()
{
    return age;
};
function CalcAge(year)
{
    return (new Date()).getFullYear() - year;
}
var age = CalcAge(this.born);
}


var person = new Person("John", "Smith",1995);
var person2 = new Person("Kiss","Istvan",2001);
var info  = `Név: ${person.getFullName()},Született: ${person.born}, Kor: ${person.getAge()}`;
var info2  = `Név: ${person2.getFullName()},Született: ${person2.born}, Kor: ${person2.getAge()}`;

alert(info);
alert(info2);
