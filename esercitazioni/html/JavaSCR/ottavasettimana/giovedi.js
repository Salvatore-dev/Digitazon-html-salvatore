{
    let i = 1;

while( i <= 5 ) {
  console.log(i)
  let j = 1

  while( j <= 3 ) {
    console.log('ciao')
    j++
  }

  i++
}

// i ...
}
{
    for(let i = 1; i <= 5; i++) {
        console.log(i)
        for(let j = 1; j <= 3; j++) console.log('ciao')
      }
      
      const a = ['php', 'javascript', 'python']
      a.forEach(( language ) => console.log( language ) )
}

{
    const sum = function(x, y) {
        return x + y
      }
      
      console.log( sum(4, 3) )
      
      const diff = (x, y) => x - y
      
      console.log( diff(4, 3) )
}

{
    const a = ['php', 'javascript', 'python']
    const printValues = ( language ) => console.log( language )
    const printValuesUc = ( language ) => console.log( language.toUpperCase() )

    a.forEach( printValues )
    a.forEach( printValuesUc )

    const uc = s => s.toUpperCase()

    console.log( uc('javascript') )
}

{
    let student = {
        'name': 'mario rossi',
        'age': 10,
        'sayHello': function() {
          console.log('ciao mi chiamo ' + this.name)
        }
      }
      
      student.sayHello()
      
      function fn() {
       // console.log( 'valore: ' + this.innerWidth )
      }
      
      //console.log( window.innerWidth )
      
      fn()
}

{
    let student = {
        'name': 'mario',
        'lastname': 'rossi',
        'fullname': function() { return this.name + ' ' + this.lastname },
        'age': 10,
        'sayHello': function() {
          console.log('ciao mi chiamo ' + this.fullname())
        }
      }
      
      student.sayHello()
      
      function fn() {
        console.log( 'valore: ' + this.name )
      }
      
      fn()              // chiamante: window
      fn.call(student)  // chiamante: student
      
}

{
    let student = {
        'name': 'mario rossi',
        'age': 10,
        'sayHello': function() {
          console.log('ciao mi chiamo ' + this.name)
        },
        'votes': [1,2,34],
        'point': {
          'x': 10, 'y': 20, 'z': {
            'h': {
              'z': 100
            }
          }
        }
      }
      
      console.log( student.point.z.h.z )
}