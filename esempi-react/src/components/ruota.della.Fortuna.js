import { useState, useEffect } from "react";

/*
quinto (piu facile): Scrivere una applicazione che si avvicini piu' possibile al concetto di "ruota della fortuna", quindi deve esserci una "ruota" (che puo' anche non avere l'aspetto di una ruota, basta che si vedano diversi valori selezionati di volta in volta... per arrivare ad uno solo finale), e deve esserci uno storico dei valori usciti.
*/


export function RoutadellaFortuna() {

        const valoreRuota = ['100€', '50€', '150€', '500€', '10.000€', '1000€', '10€','200€']
        const [numeroFortunato, setNumeroFortunato] = useState(0)
    
    
        let storico = []
        storico.push(valoreRuota[numeroFortunato])
        //console.log(storico);
        
        function handleClick() {
            setNumeroFortunato(Math.floor(Math.random() * valoreRuota.length));
        }

      
        console.log(numeroFortunato);
    
    
        return (
            <div className="container">
                <div className="history">
                    <ul>
                        {storico.map((n, i) =>
                            <li className="casella" key={i}>{n}</li>)} {/*sarà mappato*/}
                    </ul>
                </div>
                <div className="ruotaFortuna">
                    {valoreRuota.map((el, i) => <div className="casella" style={{ backgroundColor: "red" }} key={i}>{el}</div>)}
                </div>
                <button onClick={()=> handleClick()}>Click to start</button>
            </div>
        );
    
    
}