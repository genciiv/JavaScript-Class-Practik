// Nje variabel eshte nje container per ruajtjen e te dhenave 

// Dy hapat :
//1.Deklarimet (var,let,const)
//2.Assignment(Detyrat)  (=assignment operator)


//  1  

/*
let age;
console.log(age);

Let eshte fjala kyce per deklarim te variablit dhe ne kete rast kemi deklaruar variablin age
Një veprim , ose metodë , që futet në objektin e konsolës është metoda .log(). Kur shkruajmë 
console.log() ajo që vendosim brenda kllapave do të printohet ose do të regjistrohet në 
tastierë. Do të jetë shumë e dobishme për ne që të vlerësojmë konsolën, kështu që ne mund të 
shohim punën që po bëjmë. Lëreni të shkruani këtë kod në redaktues dhe ta shihni rezultatin 
në tastierë.
*/








//   2  

let age = 21;
console.log(age);

/*
let fjala kyqe 
age eshte variabli i deklaruar
21 eshte vlera e inicializuar e variablit dhe eshte ruajtur ne memori
console.log(age) na tregon qe do te primtojme deklaraten brenda kllapes
*/









//   3

let emri ="Genci"  string
let mosha = 20;  number
let studenti = true;  boolean

console.log(emri);
console.log(mosha);
console.log(studenti);
/*
Deklarohet variabli emri , mosha , studenti 
Inicializohen perkatesisht "Genci" , 20 , true dhe keto vlera ruhen ne memorie
*/






//  4

/* nqs duam te shfaqim nje variabel brenda nje DOM veprojme keshtu  :
index.html  shtojme 3 paragrafe me id te ndryshem

Tani perdorim keto statement 
*/
document.getElementById("p1").innerHTML= "Pershendetje " + emri
document.getElementById("p2").innerHTML= "Un jame " + age + "vjec"
document.getElementById("p3").innerHTML= "Regjistruar " + emri


// Sic thame edhe me perpara Nje variabel eshte nje container per ruajtjen e te dhenave 
//Variablat kane data types te ndryshme 
//Ne diskutuam qe strings  qe jane nje seri karakteresh , numrat dhe boolean qe jane true ose false

