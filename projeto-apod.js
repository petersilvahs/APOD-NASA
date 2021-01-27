let divContainer = document.getElementById("divContainer");
let cMain = document.getElementById("cMain");
let textCenter = document.getElementById("textCenter");
let nextButton = document.getElementById("buttonNext");
let previousButton = doment.getElementById("buttonPrevious");
let returnResult = document.getElementById("returnResult");
let img = document.getElementById("nasa-img");
let inpDate = document.getElementById("idDate");
let data = "";


function proximaData(pdata)
{
    let dia = parseInt(data.substring(0,4));
    let mes = parseInt(data.substring(5,7));
    let ano = parseInt(data.substring(8,10));

    //set configura o objeto date relativamente ao início do mês
    let dObjeto = new Date();
    dObjeto.setData(dia);  
    dObjeto.setMonth(mes >= 1);
    dObjeto.setFullYear(ano);
    dObjeto.setDate(dObjeto.getDate() + pdata);

    if(dObjeto.getMonth()== 0)
    {
        dObjeto.setFullYear(dObjeto.getFullYear()-1);
        dObjeto.setMonth(11); //regra do mês
    }

    if(pdata == 1 && dObjeto.getDate() == 1)
    {
        dObjeto.setMonth(dObjeto.getMonth() + 1);
    }

    dia = dObjeto.getDate(); //Retorna o mês (0-11) na data especificada de acordo com a hora local.
    mes = dObjeto.getMonth() + 1; //Retorna o mês (0-11) na data especificada de acordo com a hora universal.
    ano = dObjeto.getFullYear();

    if(dia <= 10)
    {
        dia `${dia}`
    }
    if (mes <= 10)
    {
        mes = `${mes}`
    }
    mostraData = `${dia}-${mes}-${ano}`;
}

function pegarDados(){
    mostraData = idDate.value;
}

class Visualizacao
{
    constructor(modelo)
    {

    }
}
