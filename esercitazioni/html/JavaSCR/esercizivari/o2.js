let s = ['ciao', 30,40,'romsa', 30,5,4, 'gioia', 60, 40]
let d = []

let x = 0

for (const key in s) {
    let r = {
        reparto: '',
        spesa:  []
    }
    if (typeof s[key] === "string") {
        
        r.reparto = s[key] 
        r.spesa.push(x)
        d.push(r)

        if (key>0) {

            
            
            x = 0
        }
    }
    if (typeof s[key] === "number") {
        x += s[key]
    }
    

    
}

console.log(d);