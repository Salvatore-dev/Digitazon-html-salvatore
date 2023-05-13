//Reduce uber alles

function isUpperCase(str) {
    return str === str.toUpperCase()
}

let els = ['Alberto', 'gatto', 'Luca', 'cane', 'Marco']
let res = els.filter(s => isUpperCase(s[0]))
console.log("FILTER", res)

res = els.reduce((filtered, s) => {
  if (isUpperCase(s[0])) {
    filtered.push(s)
  }
  return filtered
}, [])
console.log("REDUCE", res)

let allUppercase = els.reduce((uppercased, s) => {
  uppercased.push(s.toUpperCase())
  return uppercased
}, [])
console.log(allUppercase)


async function productsAsList() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()

    return products.reduce((all, product) => `
        ${all}
        <li>
          ${product.title}
        </li>
    `, '<ol>') + '</ol>'
}

(async function() {
  let lis = await productsAsList()
  document.getElementById('target').innerHTML = lis
})()


// creare oggetto con reduce
let obj = arr.reduce((res, n, i) => {
    res[i] = n
    return res
}, {})


//Async top level (questo esempio non sempre e accettato dai browser aspetto in evoluzione)

const URL = 'https://api.npoint.io/4da0650ce36be0bd5475'

async function call() {
  const res = await fetch(URL)
  const json = await res.json()
  return json
}

console.log(1)
console.log(await call())
console.log(2)

// Async dentro una funzione wrapper

const URL2 = 'https://api.npoint.io/4da0650ce36be0bd5475'

async function call() {
  const res = await fetch(URL)
  const json = await res.json()
  return json
}

async function run() {
    console.log(1)
    let result = await call()
    console.log(result)
    console.log(2)
}

// spread

// dichiarazione
function stampa(...tutto) {
  tutto.map(t => console.log(t))
}
// stampa()
// stampa(1)
// stampa(1,2,3,4)
// stampa(1,2,3,4,5,6)

function boh(primo, secondo, ...gliAltri) {
  console.log(primo)
  console.log(secondo)
  console.log(gliAltri)
}
// boh()
// boh(1,2)
// boh(1,2,3,4,5,6)

// invocazione
let arr = [1,2,3]
let arr2 = [...arr]
console.log(arr, arr2)
arr[0] = 42
console.log(arr, arr2)

let todo = {
  id: 1,
  startedOn: new Date().getTime(),
  task: 'prendere il latte',
  completed: false
}
let todoCompleted = { ...todo, completed: true }



function process(todo) {
  // ...
}

function otherProcess(todo) {
  // ...
}

let todo2 = { /* ... */ }
process(todo2)
otherProcess(todo2)


