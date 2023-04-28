{
    et ar=[]

let obj={
    x:10,
    y:5
}

let num=100
let str='javascript'
let m1=new Map()
m1.set('label','sono una mappa')
let a1=[40,50,60]

ar.push(obj,num,str,m1,a1)

ar.forEach((el)=>{
    if (el instanceof Map){
        if(el.has('label')){
            console.log(el.get('label'))
        }else{
            console.log('no label property found')
        }
    }else if(el instanceof Array){
        console.log('sono un array - stampo numeri in ordine inverso');
        for (let i = el.length-1; i >=0; i--) {
            console.log(el[i]);
        }
    }else if(el instanceof Object){
        let sum=el.x+el.y
        console.log('oggetto - somma proprietà = '+ sum)
    }

    if (typeof el =='string'){
        console.log('sono una stringa - primo carattere = '+el[0])
    }
    if (typeof el =='number'){
        if(el>100){
            console.log('numero - red')
        }else{
            console.log('numero - blue')
        }
    }
})
}

{
    let ar = [ {x:10,y:5}, 100, 'javascript', new Map([['label','sono una mappa']]), [40,50,60] ]

        ar.forEach((el)=>{

            // check mappa
            if (el instanceof Map){
                console.log( el.has('label') ? el.get('label') : 'no label property found' );
                return
            }

            // check array
            if( Array.isArray(el) ){
                console.log('sono un array - stampo numeri in ordine inverso');
                for (let i = el.length-1; i >=0; i--) console.log(el[i]);

                return
            }

            // check stringa, numero, oggetto
            switch( typeof el ) {
                case 'string':
                    console.log('sono una stringa - primo carattere = '+el[0])
                    return

                case 'number':
                    console.log( (el > 100) ? 'numero - red' : 'numero - blue') 
                    return

                case 'object':
                    console.log('oggetto - somma proprietà = '+ (el.x+el.y))
                    return
            }

        })
}