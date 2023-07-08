import attention from '../assets/icona-attenzione.jpg'

const InvalidRequest = () => {

  return (
    <div className="request-invalid">
      <div>
        <img src={`${attention}`} alt="immage-attention"></img>
      </div>
      <p>
        Ops! inserisci una citazione valida, ad esempio Mc1,2-3; oppure: 1Ts2,3
      </p>
    </div>
  );
};

export default InvalidRequest;
