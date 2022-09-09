// switch = nje deklarate e cila shqyrton nje vlere ne shume clauses(raste)

let nota = 30;

switch(true){
    case nota>=90:
        console.log("Ti dole Shum mire");
        break;

    case nota>=80:
        console.log("Ti dole mire");
        break;

    case nota>=70:
        console.log("Ti dole Ok");
        break;

    case nota>=60:
        console.log("Ti kalove");
        break;

    case nota<=50:
        console.log("Ti ngele");
        break;

    default:
        console.log(nota, "nuk eshte nje leter note");
}