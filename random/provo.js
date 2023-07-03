const a = [1,2,3,4,5,6,7,8,9,65,66,7777]
const b = a.filter((e)=> e <9 && e >2)

console.log(b);

function controlRequest(str) {
    const regex = /^(\d+)(?:-(\d+))?$/;
    const match = str.match(regex);
  
    if (match) {
      const num1 = parseInt(match[1], 10); // non serve il parse
      const num2 = parseInt(match[2], 10);
      
      if (num2) {
        return [num1, num2];
      } else {
        return num1;
      }
    } else {
      return null;
    }
  }
  
  const c = controlRequest('2')
  console.log(c);
let t = null
  //console.log(NaN <= "54");

  if (!t) {
    console.log('vero');
  } else {
    console.log('false');
  }