/*
SNACK 1

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo, (tableName)
nome dell'ospite,  (guestName)
posto occupato. (place)
Generiamo e stampiamo in console la lista per i segnaposto.
*/


//SNACK 1
const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

const table = 'Tavolo Vip'

const invitatiVip = invitati.map((element, index) => ({
    guestName: element,
    place : index + 1,
    tableName : table
}))
console.log(invitatiVip)



/*
SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:

Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/


// SANCK 2

const studenti = [
    {
        id : '213',
        name:'Marco della Rovere',
        grades : '78'
    },
    {
        id : '110',
        name:'Paola Cortellessa',
        grades : '96'
    },
    {
        id : '250',
        name:'Andrea Mantegna',
        grades : '48'
    },
    {
        id : '145',
        name:'Gaia Borromini',
        grades : '74'
    },
    {
        id : '196',
        name:'Luigi Grimaldello',
        grades : '68'
    },
    {
        id : '102',
        name:'Piero della Francesca',
        grades : '50'
    },
    {
        id : '120',
        name:'Francesca da Polenta',
        grades : '84'
    }
]

// Punto 1

const targheStudenti = studenti.map((el)=> {
    return el.name.toLocaleUpperCase()
})
console.log(targheStudenti)

// Punto 2

const gradesOver70 = studenti.filter((el)=> {
    return el.grades > 70
})
console.log(gradesOver70)

// Punto 3

const newScore = studenti.filter((el)=> {
    return el.grades > 70 && el.id > 120
})
console.log(newScore)



/*SNACKS 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/



/*
-creo un array con almeno 3 oggetti e una avra peso minore
-creo una variabile peso minore
- creo un ciclo for che confronta peso tra le bici 
-distrutturo l'oggetti bici nelle variabili nome e peso
-stampo queste variabili con inner html*/

const bikes = [
    {
        nome : 'Kona',
        peso :  6.8
    },
    {
        nome : 'Giant',
        peso :  7
    },
    {
        nome : 'Bergamont',
        peso :  6.5
    },
    {
        nome : 'BMC',
        peso :  9
    },
    {
        nome : 'Lapierre',
        peso :  8
    }
]

let pesoMinore = bikes[0];

for(let el of bikes){
    if(el.peso < pesoMinore.peso )
    pesoMinore = el
}
let {nome, peso} = pesoMinore;
console.log(`La bici con peso minore é: ${nome} e pesa ${peso}kg`)

//Bonus 
const sn3 = document.getElementById('snack3')
const myDivSn3 = document.createElement('div')
sn3.append(myDivSn3)
myDivSn3.innerHTML = `La bici con peso minore é: ${nome} e pesa ${peso}kg`


/*SNACKS 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

BONUSES
Stampare in pagina oltre che in console!*/

/*SN4
- creo un array di squadre di calcio con tre proprietà
- ciclo array e creo numeri rnd 
-ciclo di nuovo l'arrya e salvo un nuovo oggetto tramite destrutturazione con squadre e falli subiti in un nuovo array
-stampo in console


bonus 
creare un html element per il contenitore degli elementi 
*/


    //punto 1
const footballTeams = [
    {
        squadra: "Milan",
        punti: 0,
        falliSubiti: 0
    },
    {
        squadra: "Juventus",
        punti: 0,
        falliSubiti: 0
    },
    {
        squadra: "Inter",
        punti: 0,
        falliSubiti: 0
    },
    {
        squadra: "Verona",
        punti: 0,
        falliSubiti: 0
    }
]
    //punto 2

    function getRndInteg (min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    footballTeams.forEach((el)=>{
        el.punti = getRndInteg(1, 10);
        el.falliSubiti = getRndInteg (1,10);
    })
    console.log(footballTeams)

const resultTeam = footballTeams.map ((el)=>{
    const {squadra, falliSubiti} = el;
    return{
        squadra : el.squadra,
        falliSubiti : el.falliSubiti
    }
})
console.log(resultTeam)


//Bonus

const sn4 = document.getElementById('snack4')
const myDivSn4 = document.createElement('div')
sn4.append(myDivSn4)
myDivSn4.innerHTML = `${resultTeam}`
