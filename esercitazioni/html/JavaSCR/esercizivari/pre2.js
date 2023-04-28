 /* 
    dati due array ordinati, creare una funzione chiamata merge, che prende in ingresso i due array e ne ritorna uno solo, ordinato
    NON si puo' usare array.sort
    merge([1,2], [3,.4]) -> [1,2,3,4]
    merge([1,3,5], [2,4,6,7,8]) -> [1.2.3.4.5.6.7.8]

    algoritmo
    creare i due array
    creare la funzione 
        creo arry A = [] che poi restituisco

        con il metodo concat posso unire i due array in B

        per mettere in ordine l'array
        in due cicli il primo sul primo array cheparte da zero
            nel secondo che sul secondo array
                se a1[iesimo] < a2[iesimo]
                metto in A iesimo di a1 altrimenti quello di a2

    */    

            let arr1 = [1,3,5]
            let arr2 = [2,4,6,7,8]
            Merge(arr1,arr2)

            function Merge(a1,a2) {
                let A = []
                for (let i = 0 , j =0; i < a1.length || j < a2.length;) {
                    if (a1[i] < a2[j] ) {
                        A.push(a1[i])
                        
                    }
                     
                }

            }
