let a =1
console.log(a);

let s = Math.random()
console.log(s);

function numeri(x, y,z) {
    let a = Math.random()*x
    let b = Math.random()*y
    let c = Math.random()*z
    let result = a+b/c * (a+b+c) / (a+b+c)
    return result + Math.random()
    
}
console.log(numeri(10,20,30));
console.log(numeri(5,2,3));

console.log(10-5+1);
//sotto una funzione che crea un numero random intero tra due limiti, si noti che .floor da l'intero arrontato senza le virgole, cosi che si spiega il +1
// usando il .ceil che arrotonda all'intero superiore il risultato sarebbe atato div
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
  
  
  console.log(random(20, 25));
