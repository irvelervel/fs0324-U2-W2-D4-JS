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

// LOGICA CONDIZIONALE
// IF/ELSE

let cartTotal = 40

const shippingCost = 5

const freeShippingThreshold = 50

let totalToPay // ?

// if(cartTotal >= freeShippingThreshold) {
//     totalToPay = cartTotal
// } else {
//     totalToPay = cartTotal + shippingCost
// }

// totalToPay = 45

// ternary operator
totalToPay =
  cartTotal >= freeShippingThreshold ? cartTotal : cartTotal + shippingCost

// condizione ? se sì : se no

// C I C L I
// un ciclo è una direttiva che permette di eseguire una porzione di codice un numero determinato/indeterminato di volte

// for -> esegue un blocco di istruzioni un numero FINITO e PREFISSATO di volte
// while -> esegue un blocco di istruzioni un numero NON-PREFISSATO di volte (potenzialmente addirittura infinite... :( )

for (let i = 0; i < 10; i++) {
  // questo ciclo verrà eseguito 10 volte, con i che varierà da 0 a 9
  console.log('ciaone!')
  // la i vale 0 al primo ciclo
  // la i vale 1 al secondo ciclo
  // la i vale 2 al terzo ciclo
  // la i vale 3 al quarto ciclo
  // ...
  // la i vale 9 al decimo ciclo
  // i diventa 10 -> si esce dal ciclo
}

const testArray = ['davide', 'francesco', 'giampaolo', 'manuel']

for (let i = 0; i < testArray.length; i++) {
  console.log(testArray[i])
}

// un modo moderno per fare un ciclo for è il metodo degli array chiamato forEach()
testArray.forEach(function (element, i, array) {
  console.log('ciaone di nuovo!', element, i, array)
})

// il metodo .map() TRASFORMA un array in un altro array -> ['d', 'f', 'g', 'm']
const newArray = testArray.map(function (element, i, array) {
  return element.slice(0, 1)
})

console.log(newArray)

// il metodo .filter() crea un nuovo array FILTRANDO i contenuti dell'originale
const filteredArray = testArray.filter(function (element, i, array) {
  return element.slice(-1) === 'o'
})
console.log(filteredArray)
// ['francesco', 'giampaolo']

// FUNZIONI
// una funzione è un blocco di codice riutilizzabile.

const myFunction = () => {
  console.log('sono una funzione! bau!', this)
}

myFunction()

const arrowFunction = () => {
  // le funzioni freccia NON effettuano automaticamente un "binding" con direttive come super, this, etc.
}

const arr = [1, 2, 3]

arr.forEach((n) => {
  console.log(n)
})

const sum = function (num1, num2 = 0) {
  const result = num1 + num2
  console.log(result)
}

sum(4, 5)
sum(44, 523)

sum(50)

// VALORI DI RITORNO DELLE FUNZIONI
const product = function (n1, n2) {
  const result = n1 * n2
  return result
}

const w = product(2, 2) // 4
console.log(w)

console.log(typeof product(2, 2)) // number

// funzione che sottrae due numeri
const subtract = function (n1, n2) {
  return n1 - n2
}

const add100 = function (val) {
  return val + 100
}

const myValue1 = 50
const myValue2 = 27

// const firstResult = subtract(myValue1, myValue2) // firstResult vale 23
// const finalResult = add100(firstResult)
//
const finalResult = add100(subtract(myValue1, myValue2))
console.log(finalResult) // 123

const add100WithArrow = (val) => val + 100 // questa funzione RITORNA val + 100
// le funzioni freccia ritornano implicitamente un valore (hanno un return implicito) se NON mettete le graffe
// e se NON scrivete la parola return
