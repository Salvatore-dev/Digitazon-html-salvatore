import CEI2008 from "../data/index-version-Cei2008.json";
const books = CEI2008.indexes.CEI2008.biblebooks;
const abbreviations = CEI2008.indexes.CEI2008.abbreviations;
const chaptersLimit = CEI2008.indexes.CEI2008.chapter_limit;
const verseLimit = CEI2008.indexes.CEI2008.verse_limit;

const oldTestament = books.slice(0, 46); // 46 e l'indice del libro di matteo
const newTestament = books.slice(46);

export default function Introduction(params) {
  return (
    <div className="introduction">
      <h1>Benvenuto nel sito "In origine fu la Parola"</h1>
      <h3>
        Qui potrai consultare le pagine della Bibbia e trovare spunto per la tua
        riflessione e la tua preghiera
      </h3>
      <h5>
        Per consultare una pagina della Bibbia, <br></br> scegli se vuoi consultare un
        libro del Antico Testamento oppure del Nuovo Testamento, scegli il libro
        corrispondente e scelgi il versetto
      </h5>
      <br></br>
      <h3>I Libri dell'Antico Testamento sono: </h3>
      <ol className="list-book">
        {oldTestament.map((book, i) => (
          <li key={i}>{book} <span>" {abbreviations[i]} "</span></li>
        ))}
      </ol>
      <br></br>
      <h3>I Libri del Nuovo Testamento sono: </h3>
      <ol className="list-book">
        {newTestament.map((book, i) => (
          <li key={i}>{book} <span>" {abbreviations[i + 46]} "</span></li>
        ))}
      </ol>
      <p>oppure</p>
      <br></br>
      <h3>
        scegli di cercare i versetti che ti interessano di un libro,
        selezionando il tipo di ricerca corrispondente
      </h3>
      <p>per selezionare una serie di versetti specifici devi indicare l'abbreviazione del libro che cerchi seguito dal numero del capitolo desiderato, poi dopo una virgola ",", indichi il numero del versetto, e se sono piu di uno inserisci un trattino "-" tra il primo e l'ultimo versetto cercato.</p>
      <p>Ecco degli esempi: "Mc3,2" oppure "1Cor2, 3-5</p>
      
      <br></br>
      <p>oppure</p>
      <h3>
        scegli se vuoi fare una ricerca per argomento, e quindi seleziona il
        tema che vuoi cercare nelle pagine della Bibbia, selezionando il tipo di ricerca corrispondente
      </h3>
    </div>
  );
}
