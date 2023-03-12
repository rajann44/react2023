import { useEffect, useState } from "react";

function RandomQuote(){

    const [quoteData, setQuoteData] = useState([])

    useEffect(() => {
        testfunc()
    }, [])
    
    async function testfunc(){
          let api = await fetch('https://api.quotable.io/random')
          let apijson = await api.json()
          setQuoteData(apijson)
    }

    return(<div className="container card-text">
        <h3 className='container d-flex justify-content-left my-2'>Today's Quote: </h3>
        <u>{quoteData.length > 0 ? quoteData.content : 'Loading...........'}</u>
        </div>);

}

export default RandomQuote;