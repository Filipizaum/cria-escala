

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
shuffle = function(array) {
    var currentIndex = array.length, 
    temporaryValue, 
    randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Programa


var diasDeterminados = [6];

y_i = 2019;
m_i = 2; // 0 = jan, 1 = fev, 2 = mar, ...
d_i = 6;
var diaInicial = new Date(y_i, m_i, d_i);

y_f = 2019;
m_f = 11;
d_f = 30;

var diaFinal = new Date(y_f, m_f, d_f);

var nomes_candidatos = ["Alinne", "Ivanez", "Bianca", "Dilma", "Sueny", "Keroli", "Maely", "Havany"]

var modalidade = "revezamento";  // revezamento, aleatorio, ...
var nomes_ordem = shuffle(nomes_candidatos);

pegaDiasEscolhidos = function(dDate1, dDate2, dDiasDeterminados) {
    if (dDate1 > dDate2) return false;
    var date  = dDate1;
    var dates = [];

    while (date < dDate2) {
        if (date.getDay() === 6) dates.push(new Date(date));
        date.setDate( date.getDate() + 1 );
    }

    return dates;
}

function dateToString(dDate){
    var result = ('0' + dDate.getDate()).slice(-2) + '/'
    + ('0' + (dDate.getMonth()+1)).slice(-2) + '/'
    + dDate.getFullYear().toString().substr(-2);

    return result;
}

var diasEscolhidos = pegaDiasEscolhidos(diaInicial, diaFinal, diasDeterminados);


var contador = 0;

var last_month = diasEscolhidos[0].getMonth();

diasEscolhidos.forEach(function(o, i){
    if(modalidade == "revezamento"){
        nome_escolhido = nomes_ordem[contador];
        if(contador == nomes_ordem.length - 1){
            contador = 0;
        } else {
            contador += 1;
        }
    }
    if(o.getMonth() != last_month){
        console.log("");
    }
    console.log(dateToString(o) + " - " + nome_escolhido);
    last_month = o.getMonth();
});





