const Foot = () => {
  return (
    <footer>
      <h1>Informazioni generali</h1>
      <div className="footer-informations">
        <div className="general-informations">
          <h2>Informazioni</h2>
          <div className="details-footer">
            <p>Nome del progetto: </p>
            <span>"In origine fu la Parola</span>
          </div>
          <div className="details-footer">
            <p>Nome autore: </p>
            <span>Salvatore Tosich</span>
          </div>
          <div className="details-footer">
            <p>Email: </p>
            <span>"salvatore.tosich.dev@gmail.com"</span>
          </div>
          <div className="details-footer">
            <p>Dettagli: </p>{" "}
            <span>
              Il presente progetto è realizzato come "prova finale" del "Corso
              Web Developer Full Stack" della "Digitazon Tech School".
            </span>
          </div>
        </div>
        <div className="space"></div>
        <div className="mandatory citations">
          <h2>Ringraziamenti</h2>
          <p>
            Questo progetto è stato realizzato anche grazie alle risorse
            "open-source" messe a disposizione da "BibleGet-I-O":{" "}
            <a href="https://www.bibleget.io/">www.bibleget.io</a>, attraverso i
            seguenti{" "}
            <a href="https://github.com/BibleGet-I-O/endpoint">Endpoints</a>
          </p>
          <p>
            Si ringraziano partcolarmente tutti i docenti intervenuti durante i
            corsi, si è grati per la loro competenza, il loro impegno mi ha
            aperto al mondo Web, vasto e affascinante.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
