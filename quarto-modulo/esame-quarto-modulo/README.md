pseudo codice

solo back-end

un file json dove immagazzinare gli album fotografici Photoazon

1. creazione end point "/albums" di scrittura (post) nuovo album
    1.1 il clent mi passa un oggetto che ha i seguenti attributi:
            nome album: "nome"
            fotografie: un array di oggetti
                ogni foto e un oggetto che ha le seguenti caratteristiche 
                    nome
                    data di creazione(questo puo essere inserito dal server)
                    data di modifica (come sopra)
                    hashtags: un array di stringhe "#esempio"

            hashtags: un array di stringhe (come sopra)
            data di creazione(questo puo essere inserito dal server)
            data di modifica (come sopra)
    1.2 ottenere i dati dal client, 
    strutturare l'oggetto marcato con il nome dell'album
    salvare l'oggetto nel file json
    mandare messaggio di creazione oggetto

2. creazione di una Get su "/albums" 

3. creazione di una delete di un album
    end point "/albums/:name"
    verificare se l'album esiste altrimenti messagio di album inesistente

4. creazione di una get su singolo album "/albums/:name (gestire risposta se album non esiste)


//se mi chiede di aggiungere una foto?

5.  creazione di una put di modifica singolo album :
    su endpoint "/albums/:name
    il client mi passa un oggetto che ha i seguenti attributi:
        nome dell'album (dai pametri)
        attributo che vuole modificare con valore corrispondente

// se mi chiede di cancellare una foto?

6. creazione di un delete, un endpoint "/albums/:name/:foto
    leggere i params e controllare se la risorsa esiste
    se esiste cancellarla
    se non esiste messaggio di errore

7. creazione di una get per una singola foto "/albums/:name/:photo
    (gestire risposta se album esiste)

evnetuale estenzione...