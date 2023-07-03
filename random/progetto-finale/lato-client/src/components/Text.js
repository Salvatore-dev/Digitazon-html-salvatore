import { useState, useEffect } from "react";

export default function Text ({data}) {
    const [text, setText] = useState([]);

    useEffect(()=>{
        setText(data)
    }, [data])

    console.log("sono nel text", text);
    
    return(
        <div>
              {text?.map((el, i) => (
              <div className="verse-search" key={i}>
                <p key={i}>
                  <span key={i}>
                    {el.originalquery},{el.verse}:{" "}
                  </span>
                  {el.text}
                </p>
              </div>
            ))
          }
        </div>
      
    )
}