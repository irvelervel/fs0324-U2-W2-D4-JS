// RECAP JS :)

// VARIABILI
// una variabile è un "contenitore" per un valore
// una variabile si dichiara con due keywords: let e const
let x = 10 // dichiarazione di una variabile
x = 50
console.log(x) // 50

let y
console.log(y) // undefined

const z = 'Stefano' // valore iniziale che però non potrà mai più cambiare
const url = 'https://epicode.com'
// url = 'https://google.com' // -> errore

// let e const hanno vibilità di "blocco" (block scoped variables)
if (true) {
  let justHere = 100
}

// console.log(justHere) // errore, qui la variabile non esiste

// quali TIPI primitivi di dato è possibile salvare in una variabile?
// string
// number
// boolean <- true/false
// undefined <- rappresenta un valore non ancora definito, come in una variabile
// null <- rappresenta invece l'ASSENZA ESPLICITA di un valore
// Symbol <- ?

// JS è un linguaggio DEBOLMENTE tipizzato (weakly typed)
let boh = 10
// boh = 'EPICODE' <- funziona, ma è una pessima prassi
// evitiamo di riassegnare ad una variabile un valore di tipo DIVERSO da quello con cui è nata!
console.log(typeof boh) // 'number'

// principali operazioni su questi tipi di dato (metodi integrati)
const myString = 'Hello EPICODE!'
myString.slice(0, 5) // 'Hello'
myString.length // 14
myString.toUpperCase() // 'HELLO EPICODE!'

// tipi di dato NON primitivi
// ARRAY
// un array è una lista (serie, collezione etc.) di valori
const myNumberArray = [40, 50, 60] // lunghezza 3 (length)
const myStringArray = ['stefano', 'mike', 'giancarlo']

const mixedArray = ['ciao', 'r', 100, false, [1, 2, 3]] // array misto, poco utilizzato

// gli elementi negli array sono recuperabili tramite la loro POSIZIONE (indice)
myNumberArray[0] // 40
myNumberArray[1] // 50
myNumberArray[myNumberArray.length - 1] // 60, l'ultimo elemento

// cosa possiamo fare con gli array?
// inserire un elemento in coda
myNumberArray.push(70) // [40, 50, 60, 70]
// inserire un elemento in testa
myNumberArray.unshift(30) // [30, 40, 50, 60, 70]
// eliminare l'ultimo elemento dell'array
myNumberArray.pop() // [30, 40, 50, 60]
myNumberArray.pop() // [30, 40, 50]
// eliminare un elemento in testa
myNumberArray.shift() // [40, 50]

// riaggiungo 60
myNumberArray.push(60) // [40, 50, 60]
// eliminare un elemento in una posizione a piacere
myNumberArray.splice(1, 1) // [40, 60]
console.log('myNumberArray', myNumberArray)

// myNumberArray = 'ciao' // caso d'uso irrealistico, viene prevenuto dalla dichiarazione con const

// OGGETTI
// un oggetto in HS è un tipo di dato complesso atto a contenere una serie di COPPIA chiave/valore (proprietà)
// in un oggetto per recuperare un valore non si usa la sua posizione, quello che si usa è la CHIAVE
// si dichiarano ancora sempre con "const" perchè questo non limita la manipolazione dell'oggetto
const myObject = {
  // coppie chiave/valore
  firstName: 'Stefano',
  lastName: 'Casasola',
  'is-old': true,
  age: 100,
  skills: ['HTML', 'JS'],
  area: {
    country: 'Italy',
    region: 'FVG',
  },
}

// per leggere un valore in un oggetto ho 2 METODI:
// 1) DOT NOTATION
myObject.firstName // 'Stefano'
// myObject.is-old // errore, la dot notation non funziona per nomi di proprietà "strane"
// 2) SQUARE BRACKETS NOTATION
myObject['is-old'] // true
myObject['age'] // 100

// per sovrascrivere una proprietà in un oggetto
myObject.lastName = 'Rossi'
myObject.isACssMaster = false
myObject.doesntExist // undefined

// con queste notazioni possiamo anche esplorare strutture annidate
myObject.area.country // 'Italy'
myObject['area']['country'] // 'Italy'

myObject.skills[1]

// come creare con successo delle COPIE di variabili

// tipi di dato primitivi
let a = 50
// devo creare una copia
let b = a
// quanto vale b? 50

a = 100
// quanto vale b? 50

// tipi di dato complessi (array e oggetti)
const objA = { verso: 'Bau' }
// devo creare una copia
const objB = objA // !!! NON CREA UNA COPIA! crea solo un altro "puntatore", riferimento allo stesso oggetto !!!

objA.verso = 'Miao'
console.log(objB.verso) // ? 'bau'?

// VEDIAMO COME CREARE DELLE VERE O PROPRIE COPIE
const anotherObjA = { verso: 'Bau' }
// 1)
const anotherObjB = { ...anotherObjA }
// ... -> spread operator -> prendi tutte le coppie chiave/valore che compongono anotherObjA e COPIAMELE qui dentro,
// nel nuovo guscio che ho creato con {  }
// 2)
// tecnica con Object Assign (che assegna ad un target {} tutte le proprietà di un oggetto)
// const anotherObjB = Object.assign({}, anotherObjA)

anotherObjA.verso = 'Miao'
console.log(anotherObjB.verso) // ? 'bau'?

// const utilizzato per funzioni, oggetti e array?
