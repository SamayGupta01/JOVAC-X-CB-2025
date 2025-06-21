var x = 120;
var y = 120;
var sum = x + y;
console.log(sum);

console.log(z);
var z = 50;
console.log(z);

const x1 = 10;
x1 = 20;
console.log(x1);

var s = "Rastogi";
console.log(s);
let s = "Raju";
console.log(s);

var s = "Rastogi";
s = "Raju";
console.log(s);

function sum(num1, num2){
    let sum = num1 + num2;
    return sum;
}
console.log(sum(5, 5));

function sum(num1, num2){
    console.log(num1 + num2);
}
sum(500, 500);

var mul = () =>{
    console.log(500 * 5);
}

mul();

// TO ANALYSE THE BEHAVIOR NAMED FUNCTION IN EXPRESSION;

var divide = function(num1, num2){
    console.log(num1 / num2);
}
divide(100,2);

//setTimeout
setTimeout(() =>{
    console.log("Hello Everyone");
}, 5000);

//setInterval
setInterval(() =>{
    console.log("Hello Everyone");
},2000);

function a(){
    var x = 100;
    console.log(x);
    function b(){
        var y = 200;
        console.log(y);
        function c(){
            var z = 300;
            console.log(z);
        }
        c();
    }
    b();
}
a();

//Closures
function a(){
    let x = 100;
    let y = 200;
    function b(){
        console.log(x);
        console.log(y);
    }
    b();
}
a();

function a(){
    let x = 100;
    let y = 200;
    function b(){
        let x = 500;
        console.log(x);
        console.log(y);
    }
    b();
}
a();

function a(){
    let x = 100;
    let y = 200;
    function b(){
        let x = 500;
        const y = 700;
        console.log(x);
        console.log(y);
    }
    b();
}
a();

//For Loop
for(let i=0; i<10; i++){
    console.log(i+1);
}

//Event Listners
document.getElementById("functionCall").addEventListener("click",function abc(){
    console.log("EVENT HAPPENED!!")
});
