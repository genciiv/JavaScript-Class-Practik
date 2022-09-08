// Si te pranojme user input 







//         1

// Rruge e thjeshte me nje window prompt

//let emri = window.prompt('Cfare eshte emri juaj ?');

//console.log(emri);





//         2 

// Rruge e veshtire me HTML textbox
//Shtojme ne html code label , input dhe buton

let emri;

document.getElementById('butoniIm').onclick = function(){
    emri = document.getElementById("tekstiIm").ariaValueMax;
    console.log(emri);

    //nqs duam te ndryshojme tekstin e label shkruajme kodin
    document.getElementById('myLabel').innerHTML="Hello" + emri;
}

