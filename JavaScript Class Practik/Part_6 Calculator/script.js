/*
    let a;
    let b;
    let c;

    a = window.prompt("Shto A");
    a = Nymber(A);

    b = window.prompt("Shto B");
    b = Number(B);

    c = window.prompt("Shto C");
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    console.log("Shtohet c :" , c);
*/

let a;
let b;
let c;

document.getElementById("submitButton").onclick=function(){
    a = document.getElementById("aTextBox").value;
    a = Nymber(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("cLabel").innerHTML = "Shto C" + c; 
}