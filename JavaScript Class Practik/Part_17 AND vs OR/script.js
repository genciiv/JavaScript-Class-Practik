// na jep neve aftesine per te kontrolluar me shume se 1 kusht 
// && AND (se bashku duhet te jene true)
// || OR (kushti mund te jete true)


let temp = 50;
let dielli = true;

if(temp<=0 || temp>=30 && dielli==true){
    console.log('Moti eshte i keq');
}else{
    console.log('Moti eshte i mire');
}