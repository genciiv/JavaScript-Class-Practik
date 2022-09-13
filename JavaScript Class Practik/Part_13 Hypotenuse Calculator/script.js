
let a;
let b;
let c;

/*
a = window.prompt("Vendos anen A");
a = Number(a);

b = window.prompt("Vendos ana B");
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log("Ana C eshte :",c);
*/

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("cLabel").innerHTML = "Ana C :" + c;
}