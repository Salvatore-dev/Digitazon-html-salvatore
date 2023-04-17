{
  for(let i = 1, j = 2; i <= 10 && j <= 20; i++, j += 2, fn(i-1) ) {
    console.log( i + ' ' + j )
  }
  
  function fn( n ) {
    console.log( 'iterazione ' + n )
  }  
}


//2
{
   for(let i = 1; i <= 10; i++) {
    console.log( 'iterazione ' + i )
    let s = ''
  
    for(let j = 1; j <= 4; j++) {
      s += j + ' '
    }
  
    console.log( s )
  } 
}
  
//3
{
    function fn(x, y) { return x + y }
function printN(n) { console.log('il numero è: ' + n) }

// assegnamento
let result = fn(5, 6)

// espressione matematica o di concatenazione
console.log( 'il risultato è: ' + ( fn(10, 4) + 10 ) )

// passaggio di parametri
printN( fn(10, 4) )

// controllo condizionale
if( fn(10, 4) > 10 ) { console.log('here') }
}


//4
{
   function getArray() {
    return [1, 2, 3, 4]
  }
  
  let a = getArray()
  console.log( a[1] )
  
  function getMap(n, ln) {
    const m = new Map()
    m.set('name', n)
    m.set('lastname', ln)
  
    return m
  }
  
  const m1 = getMap('peach', 'pink')
  const hoUnNome =  m1.has('name')
  console.log(m1)
  
  if( getMap('peach', 'pink').get('lastname') == 'pink' ) {
    console.log('all right')
  } 
}

  //5

{
const a = 10
const exp = function(n, m) {
  return (n * m)*2 
}

const r1 = exp( 10, 4 )
console.log( r1 )
}


//6

{
  function fn() {
    return function(param) {
      return 'hai chiamato una funzione dentro una funzione con param: ' + param
    }
  }
  
  console.log(
    fn()('ciao').charAt(0).toUpperCase()
  )
  
}


  //7

{
     function sum(a, b) { return a + b }
function diff(a, b) { return a - b }
function multiply(a, b) { return a * b }

function ope( fn1, fn2, values ) {
  return fn1( values[0], values[1] ) * fn2( values[0], values[1] )
}

const result = ope( sum, diff, [10, 4] )
console.log( result ) 
}


//8
{
 function sum(a, b) { return a + b }
function diff(a, b) { return a - b }
function multiply(a, b) { return a * b }

function ope( fn1, fn2, values ) {
  return  multiply( fn1( values[0], values[1] ), fn2( values[0], values[1] ) )
}

const result = ope( sum, diff, [10, 4] )
console.log( result )   
}

//9
{
function sum(a, b) { return a + b }
function diff(a, b) { return a - b }
function multiply(a, b) { return a * b }

function ope( fn1, fn2, values ) {
  return  multiply( fn1( values[0], values[1] ), fn2( values[0], values[1] ) )
}

for(let i = 1; i <= ope( sum, diff, [10, 4] ) / 2; i++ ) {
  console.log( i)
}
}
