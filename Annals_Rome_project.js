
//anno consolare
var anno = -509;
var senatus = [];
var i;
//fase di costituzione del senato
costSenato();
console.log('senatus sessio prima');   

//creazione array della lista senatori
function costSenato(){
    senatus[0] = "Cornelius Scipio";
    senatus[1] = "Cornelius Sulla";
    senatus[2] = "Cornelius Lentulus";
    senatus[3] = "Cornelius Cethegus";
    senatus[4] = "Cornelius Merula";
    senatus[6] = "Cornelius Dolabella";
    senatus[7] = "Claudius Nero";
    senatus[8] = "Claudius Marcellus";
    senatus[9] = "Claudius Pulcher";
    senatus[10] = "Valerius Messala";
    senatus[11] = "Valerius Flaccus";
    senatus[12] = "Sulplicius Galba";
    senatus[13] = "Sulplicius Rufus";
    senatus[14] = "Minucius Rufus";
    senatus[15] = "Minucius Thermus";
    senatus[16] = "Rutilius Rufus";
    senatus[17] = "Antonius"
    senatus[18] = "Servilius Cepio";
    senatus[19] = "Servilius Vatia";
    senatus[20] = "Pompeius Rufus";
    senatus[21] = "Pompeius Magnus";
    senatus[22] = "Caecilius Metellus";
    senatus[23] = "Aemilius Lepidus";
    senatus[24] = "Aemilius Paulus";
    senatus[25] = "Aemilius Scaurus";
    senatus[26] = "Furius Camillus";
    senatus[27] = "Terentius Varro";
    senatus[28] = "Octavius Rusus";
    senatus[29] = "Postumius Albinus"
    senatus[30] = "Mutius Scevola";
    senatus[31] = "Licinius Crassus";
    senatus[32] = "Licinius Lucullus";
    senatus[33] = "Junius Brutus";
    senatus[34] = "Junius Silanus";
    senatus[35] = "Tullius Cicero";
    senatus[36] = "Quintilius Varus";
    senatus[37] = "Sergius Catilina";
    senatus[38] = "Cassius Longinus";
    senatus[39] = "Domitius Enobarbus";
    senatus[40] = "Julius Caesar";
    console.log('Senatus in declaratio legis');
}
//funzione scelte da menù
function scelta(s){
    switch(s){

        //cooptazione senatore
        case '1':
            var aggSenatore = prompt("Indica nome e prenome del senatore ");
            senatus.push(aggSenatore);
        break;
        
        //rimozione senatore
        case '2':
            var rimSenatore = prompt("Indica numero seggio del senatore da rimuovere");
            console.log('hai deciso di rimuovere ' + se)   
            senatus[rimSenatore] == "removatus";
            console.log("senator removatus");
            for(i in senatus){
                document.write("senator nr. " + i + " " + senatus[i] + "<br />");
            }
        break;

        //visualizzazione senato
        case '3':
            for(i in senatus){
                document.write("senator nr. " + i + " " + senatus[i] + "<br />");
            }
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            c1 = prompt("Primo candidato");
            c2 = prompt("Secondo candidato");
            comizi(c1, c2);
        break;
        case '7':
            anno =+ 10;
        break;
        case '8':
        break;
    }
}

function comizi(cand1, cand2){
    while(votus <= CENTURIAE){      
        var result = Math.round(Math.random());
        if(result == 0){ca += 20;}
        else{cb += 20;}
        votus += 20;
    }
    if(ca > cb){
        fasti[anno] = cand1;
        console.log("Console eletto " + cand1 + " con " + ca + " suffragi");}
    else if(ca < cb){
        fasti[anno] = cand2;
        console.log("Console eletto " + cand2 + " con " + cb + " suffragi");}
}