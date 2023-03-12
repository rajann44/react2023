import { useEffect, useState } from "react";

function RandomQuote() {
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    testfunc();
  }, []);

  async function testfunc() {
    let api = await fetch("https://api.quotable.io/random");
    let apijson = await api.json();
    setQuoteData(apijson);
  }

  return (
    <div className="container card-text">
      <h3 className="container d-flex my-2">Today's Quote: </h3>
      <div>{quoteData.length > 0 ?
      <div className="card mb-3" style={{maxWidth: "450px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/The_Thinker_Musee_Rodin.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{quoteData.author}</h5>
              <p className="card-text">
              "{quoteData.content}"
              </p>
              <p className="card-text">
                <small className="text-muted">Date Added: {quoteData.dateAdded}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    : <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" className="loading" alt="loading" />}</div>
    </div>
  );
}

export default RandomQuote;
