function calculateWinner(squares) {
    const lines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];


    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        console.log(a);
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
            
        }
        
    }

    return null;
    
}


calculateWinner([4])

let arr = ['casa', 'spiaggia', 'mare' ]

const [a,b] = arr // prendo gli elemnti dellarray partendo dal primo

console.log(b);
