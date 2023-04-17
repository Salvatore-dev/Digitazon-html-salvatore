{
    const obj = {
        name: 'Riccardo',
        lastname: 'Degni'
      }
      
      const livelloDiFormalità = 'house'
      function checkLivelloDiFormalità() {
        if( livelloDiFormalità == 'work' ) return 'lastname'
        if( livelloDiFormalità == 'house' ) return 'name'
      }
      
      console.log( 'Ciao ' + obj[ checkLivelloDiFormalità() ] )
}

{
    const obj = { name: 'Riccardo', lastname: 'Degni',
  skills: {
    frontEnd: ['html', 'css', 'js', 'react', { x: { colors: ['blue', 'green'], fn: function() { console.log('hai chiamato fn!') } } }],
    backEnd: ['node', 'java', 'py', 'php']
  }
}

console.log( obj.skills.frontEnd[4].x.colors[1] )
obj.skills.frontEnd[4].x.fn()
}

{
    /*<?php

   $values = [
    'name' => 'Riccardo',
    'lastname' => 'Degni',
     0 => 'ciao',
     22 => 'xyz'
    ];

    echo $values['lastname'] . ' ' . $values[22];

?>*/
}
{
    const m = new Map([
        ['name', 'Riccardo'],
        ['lastname', 'Degni'],
        ['skills', { frontEnd: ['js'], backEnd: ['node'] }],
        ['fn', function() { console.log('hai chiamato fn!') }],
        [10, 'ciao']
      ])
      
      console.log( m.get('skills').frontEnd[0] )
      m.get('fn')()
      
      console.log( m.has(10) )
}
{
    const m = new Map([
        ['numeroDiMele', 0]
      ])
      
      function aumentaNumeroDiMeleDi(n) {
        m.set('numeroDiMele', m.get('numeroDiMele') + n)
      }
      
      aumentaNumeroDiMeleDi(1)
      aumentaNumeroDiMeleDi(1)
      aumentaNumeroDiMeleDi(4)
      
      console.log( m.get('numeroDiMele') )
}

{
    let n = 'riccardo'

    function inverter (name){
        let result = ' '
        for (let i = name.length -1; i >= 0; i--) {
            result += name[i]
        }
        return result
    }
    console.log(inverter(n));
    
}

//crare una stringa 
//crare una variabile '_r
// mettere in upper case l'ultiimo carattere
// concatenare la varialbile
{
    /*let n ='riccardo'
    let agiunta = '_r'
    string.charAt(1).toUpperCase()
    //console.log(string);
    //console.log(agiunta);*/
}

{
/*let firstLast = n.charAt((n.length)-1).toUpperCase() + '_' + n.charAt(0).toLowerCase()

console.log(firstLast)*/
}

{
    /* Ex 3
    creare l'apposita strategia per rappresentare, tramite oggetto, uno studente. Lo studente avrà:
    idMatricola: 14
    nomeCompleto: Luigi Verdi
    voti: 6, 7, 7

    Stampare in output la stringa tramite apposito algoritmo:

*/

//creo l'oggetto con i dati presentati
// creo una variabile result '' 
// richiamo i valori dell'oggetto nella stringa

const obj ={
    id: 14,
    nomeCompleto: 'Luigi Verdi',
    voti: [6,7,7]
}
let result = `lo studente ${obj.id} di nome ${obj.nomeCompleto} e i voti sono ${obj.voti}`
console.log(result);






    

}