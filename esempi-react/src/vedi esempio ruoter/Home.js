const Home = ({photos}) => {
    return <>
    
        <h1>Home</h1>
        {photos.map((photo)=>(
            <>
            <p>titolo {photo.title} </p>
            <img src={photo.url} ></img>
            </>
            
        ))}
        <h2>mi vedi sono solo dentro Home</h2>
    </>
   
    
  };
  
  export default Home;