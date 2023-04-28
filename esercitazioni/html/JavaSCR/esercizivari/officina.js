{
    function Balanced(str) {
        const stack = [];

        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (char == "(") {
                stack.push(char);
            } else if (char == ")") {
                if (stack.length == 0) {
                    return false;
                }
                stack.shift();
            }
        }

        return stack.length == 0;
    }

    console.log(Balanced("()"));
    console.log(Balanced("(())"));
    console.log(Balanced("()()"));
    console.log(Balanced("(()"));
    console.log(Balanced("())"));
    console.log(Balanced("())("));
    console.log(Balanced("()()()"));
}

{
    function x(s) {
        let l = '';
    
        function expandFromMiddle(left, right) {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }
            return s.slice(left + 1, right);
        }
    
        for (let i = 0; i < s.length; i++) {
            const odd = expandFromMiddle(i, i);
            const even = expandFromMiddle(i, i + 1);
            const currentl = odd.length > even.length ? odd : even;
            if (currentl.length > l.length) {
                l = currentl;
            }
        }
    
        return l;
    }
}

{
    function x(p) {
        let a = []
        for (let i = 0; i < p.length; i++) {
            if (p[i] == '(') {
                a.unshift('(') // inserisce l'elemento specificato in testa all'array
                continue // continua l'esecuzione del for, va alla riga 3 quindi
            }
    
            if (p[i] == ')' && a[0] == '(') {
                a.shift() // toglie il primo elemento dalla testa dell'array
            } else {
                return false
            }
        }
        return a.length == 0
    }
}

{
    // create two pointers, LEFT and RIGHT
// given LEN as length of the string
// given MIDDLE as LEN / 2
// if the string is even
//   LEFT starts at MIDDLE - 1, RIGHT starts at MIDDLE
// else 
//   LEFT and RIGHT start at Math.floor(MIDDLE)
// while LEFT >= 0 and RIGHT < LEN
//   given LINE as the accumulation of 2 * LEFT spaces
//   accumulate in LINE the characters in the string between LEFT and RIGHT
//   LEFT--
//   RIGHT++
//   print LINE
//   LINE = ''
    function javascriptPyramid(str) {
        let left, right
        let len = str.length
        let middle = len / 2
        if (len  % 2 == 0) {
            left = middle - 1
            right = middle
        } else {
            left = right = Math.floor(middle)
        }
    
        while (left >= 0 && right < len) {
            let line = ''
            for (let i = 0; i < 2 * left; i++) {
                line += ' '
            }
            for (let i = left; i <= right; i++) {
                line += str[i] + ' '
            }
            left--
            right++
            console.log(line)
            line = ''
        }
    }
    javascriptPyramid('JavaScript')
}

let s = 'ciao a tutti'
let r = s.split(' ')
console.log(r);

{
    let a = 23
    let b = 2
    let c

    function somandAss(a, b) {
        c = a+b
        b = c * a
        return b
    }

   
    console.log(b);
    console.log(somandAss(a,b));
    console.log(b);
    console.log(c);
    let tt = ar(1,2,3);

    function ar(a,b,c) {
         return arguments
        
    }
    console.log(tt[2]);
}

{
    let fun = l => l != l
    //console.log(!funx('s'));

    console.log(arguments[0]);
    let stringa = 'abbasd'
    
    console.log(provo(fun, stringa));

    function provo(funx, str) {
        let result = ''
        for (let i = 0; i < str.length; i++) {
            if (funx(str[i] )) {
                result += str[i]
                
            }
        }
        return result
        
    }
}

/* for (let i = 0; i < string.length; i++) {
    if (string[i]==l){
        result += string[i]
    }
}*/